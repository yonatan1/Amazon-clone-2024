import React from "react";
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectRoute from "./Components/ProtectRoute/ProtectRoute";
const stripePromise = loadStripe(
  "pk_test_51NUVJJSE3plJQFvuMQo5PZR16rTBZw4Ddf08VD7FcPCzJ704Ovt9nA9cvZAQp2IMLwczqEu2IsHIa7pOniS8ruKh00wvOQrvJM"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={
          <ProtectRoute msg={"you must log in to pay"} redirect={'/payments'}>
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
          </ProtectRoute>
        } />
        <Route path="/orders" element={
        
        <ProtectRoute msg={'you must log in to see your orders'}  redirect={'/orders'}>
          <Orders />
        </ProtectRoute>
        
        
        } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
