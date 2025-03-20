import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import session from 'express-session';
import { OAuth2Client } from 'google-auth-library';

dotenv.config();

const app = express();
const __dirname = path.resolve(); 

const client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Serve React Build Files
//app.use(express.static(path.join(__dirname, '../client/dist')));

// Home Route
app.get('/profile', (req, res) => {
    if (req.session.user) {
        //res.redirect('https://localhost:5173/profile');
        res.send(`
            <h1>Welcome, ${req.session.user.name}!</h1>
            <img src="${req.session.user.picture}" alt="Profile Picture" width="100"/>
            <p>Email: ${req.session.user.email}</p>
        `);
    } else {
        res.send('Hello from server!');
    }
});

app.get('/', (req, res) => {
    res.send('Connected to server');
});


// Simple Route for Testing
app.get('/hi', (req, res) => {
    res.send('Hello from server!');
});

// Google OAuth Login
app.get('/auth/google', (req, res) => {
    console.log("Redirecting to Google...");

    const url = client.generateAuthUrl({
        access_type: 'offline',
        response_type: 'code',
        scope: ['profile', 'email'],
        prompt: 'select_account'
    });

    res.redirect(url);
});

// Google OAuth Callback
app.get('/auth/google/callback', async (req, res) => {
    console.log('Callback from Google...');

    const code = req.query.code;

    try {
        const { tokens } = await client.getToken(code);

        if (!tokens.id_token) {
            console.error("No ID Token found in response.");
            return res.status(400).send("Authentication failed. No ID Token received.");
        }

        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        req.session.user = {
            name: payload.name,
            email: payload.email,
            picture: payload.picture
        };

        req.session.save(() => {
            res.redirect('http://localhost:5173/profile'); // Redirect to the homepage after login
        });

    } catch (error) {
        console.error('Error in Google OAuth Callback:', error);
        res.redirect('/error'); // Redirect to an error page if something goes wrong
    }
});

app.get('/api/user',(req,res)=>{
    if(req.session.user){
        res.json(req.session.user);
    }else{
        res.status(401).json({error: 'User not authenticated'});
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
