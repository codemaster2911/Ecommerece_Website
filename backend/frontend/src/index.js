import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

(async () => {
  const stripePromise = loadStripe(
    "pk_test_51KZZQ0SDmP6B2opgiZ1Tk09ObFm7l9WU5o3FZl9BxTr57Z7CBC6oIhy7WBAUnTczvQosTc2mZFqJRmDLSSO5FlQV00n7fe9yv2"
  );
  ReactDOM.render(
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </AlertProvider>
    </Provider>,
    document.getElementById("root")
  );
})();

// ReactDOM.render(
//   <Provider store={store}>
//     <AlertProvider template={AlertTemplate} {...options}>
//       <App />
//     </AlertProvider>
//   </Provider>,
//   document.getElementById("root")
// );
