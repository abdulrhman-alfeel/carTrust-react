import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
// Screens
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import VerifyNumber from "./pages/VerifyNumber";
import PostPyment from "./pages/PostPyment";
import store from "./redux/store";
import { Storeing } from "./redux/redux/storeing";

const router = createBrowserRouter(
  createRoutesFromElements(
 
      <Route >
       <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-number" element={<VerifyNumber />} />
      <Route path="/checkout" element={<Checkout />} /> 
      <Route path="/Dashboard" element={<Dashboard />} />
       <Route path="/PostPyment" element={<PostPyment />} /> 

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
      <Provider  store={store}>
      {/* <Provider  store={Storeing}> */}
        <ToastContainer />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
       
        </Helmet>
        <RouterProvider  router={router} />
        {/* <Landing /> */}
      </Provider>
      {/* </Provider> */}
    </ >
  );
}

