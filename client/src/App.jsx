import  React, { lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from "sonner";

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
