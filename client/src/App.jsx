import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import { Toaster } from "sonner";
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/products/ProductDetails'
import CheckOut from './components/cart/CheckOut'
import OrderConfirmation from './components/cart/OrderConfirmation'

const UserLayout = lazy(() => import("./components/layout/UserLayout"))


const App = () => {

  const initialOptions = {
    clientId: "AfBxDwOoW_IcL3ZW9v3_2A1TEbJ508bMbD7O9ToQY4hQSDRIATzkoQo_P8NJLkYM2_2tskuQULYp6UpX",
    currency: "USD",
    intent: "capture",
};

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Router>
          <Toaster position="top-right" />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="profile" element={<Profile />} />
                <Route path="collections/:collection" element={<CollectionPage />} />
                <Route path='product/:id' element={<ProductDetails />} />
                <Route path='checkout' element={<CheckOut />} />
                {/* Order Confirmation */}
                <Route path="order-confirmation" element={<OrderConfirmation />} />


              </Route>
              {/* User Layout */}
              {/* Home */}
              {/* Cart */}
              {/* Product */}
            </Routes>
          </Suspense>

        </Router>
      </PayPalScriptProvider>


    </>

  )
}

export default App
