import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

// const product = {
//   name: "laptop",
//   images: [
//     {
//       url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
//     },
//   ],
//   price: "3000",
//   _id: "Tushar",
// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="ECOMMERCE" />
          <div className="banner">
            <p> Welcone to Ecommerce </p> <h1> Find Amazing Products Below </h1>{" "}
            <a href="#container">
              <button>
                Scroll <CgMouse> </CgMouse>{" "}
              </button>{" "}
            </a>{" "}
          </div>{" "}
          <h2 className="homeHeading"> Featured Products </h2>{" "}
          <div className="container" id="container">
            {" "}
            {/* <Product product={product}></Product> */}{" "}
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}{" "}
          </div>{" "}
        </>
      )}{" "}
    </Fragment>
  );
};

export default Home;
