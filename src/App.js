import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
// Screens
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import VerifyNumber from "./pages/VerifyNumber";
import store from "./redux/store";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-number" element={<VerifyNumber />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  )
  // [{
  //   path: "/",
  //   element: <Landing/>,
  // },

  // {
  //   path: "checkout",
  //   element: <Checkout/>,
  // }],
);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <RouterProvider router={router} />
        {/* <Landing /> */}
      </Provider>
    </ >
  );
}

