import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./Store";
import { loadUser } from "./actions/UserAction";
import UserOptions from "./component/User/UserOptions.jsx";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import About from "./component/layout/About/about"
import Contact from "./component/Contact/Contact";


function App() {
  // const stripePromise = loadStripe(
  //   "pk_test_51KZZQ0SDmP6B2opgiZ1Tk09ObFm7l9WU5o3FZl9BxTr57Z7CBC6oIhy7WBAUnTczvQosTc2mZFqJRmDLSSO5FlQV00n7fe9yv2"
  // );

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");
   console.log(stripeApiKey);
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Robonto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        {isAuthenticated && (
          <Route exact path="/account" element={<Profile />} />
        )}
        {isAuthenticated && (
          <Route exact path="/me/update" element={<UpdateProfile />} />
        )}
        {isAuthenticated && (
          <Route exact path="/password/update" element={<UpdatePassword />} />
        )}

        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/cart" element={<Cart />} />
        {isAuthenticated && (
          <Route exact path="/shipping" element={<Shipping />} />
        )}

        {isAuthenticated && (
          <Route exact path="/process/payment" element={<Payment />} />
        )}
        {isAuthenticated && (
          <Route exact path="/success" element={<OrderSuccess />} />
        )}
        {isAuthenticated && (
          <Route exact path="/orders" element={<MyOrders />} />
        )}
        {isAuthenticated && (
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        )}
        {isAuthenticated && (
          <Route exact path="/order/:id" element={<OrderDetails />} />
        )}
        {isAuthenticated === true && user.role === "admin" && (
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
        )}
        {isAuthenticated === true && user.role === "admin" && (
          <Route exact path="/admin/products" element={<ProductList />} />
        )}
        {isAuthenticated === true && user.role === "admin" && (
          <Route exact path="/admin/product" element={<NewProduct />} />
        )}
        {isAuthenticated === true && user.role === "admin" && (
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
        )}
        {isAuthenticated === true && user.role === "admin" && (
          <Route exact path="/admin/orders" element={<OrderList />} />
        )}
        {isAuthenticated === true && user.role === "admin" && (
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
        )}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
