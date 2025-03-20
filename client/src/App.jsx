import  React, { lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import {Toaster} from "sonner";
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/products/ProductDetails'
import CheckOut from './components/cart/CheckOut'

const UserLayout = lazy(()=>import("./components/layout/UserLayout")) 


const App = () => {
  return (
    <>
      
      <Router>
        <Toaster position="top-right"/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<UserLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="collections/:collection" element={<CollectionPage/>} />
            <Route path='product/:id' element={<ProductDetails/>}/>
            <Route path='checkout' element={<CheckOut/>}/>
            
          </Route>
          {/* User Layout */}
          {/* Home */}
          {/* Cart */}
          {/* Product */}
        </Routes>
      </Suspense>

    </Router>
    
    </>
    
  )
}

export default App
