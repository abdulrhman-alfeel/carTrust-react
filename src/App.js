import React, { useEffect,useState } from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { Link } from "react-scroll";

// Screens
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import MYEvalution from "./pages/Dashboard/MYEvalution";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import VerifyNumber from "./pages/VerifyNumber";
import EvaluationDetails from "./pages/EvaluationDetails";
import store from "./redux/store";
import Seccessing_py from './pages/Seccessing_py';
import Modal from "./components/Elements/Modal";
import { useDispatch, useSelector } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    // basename="/carTrust"
      <Route  >
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/MYEvalution" element={<MYEvalution />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/verify-number" element={<VerifyNumber />} />
      <Route path="/checkout" element={<Checkout />} /> 
      <Route path="/EvaluationDetails" element={<EvaluationDetails />} /> 
      <Route path="/Seccessing_py" element={<Seccessing_py />} /> 

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
  // const statusing = useSelector(state => state.statusing)

  return (
    <div style={{width:'100%',overflow:'hidden'}}>
    

      <Provider  store={store}>
        <ToastContainer />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
        </Helmet>
        <RouterProvider basename="https://cartrust.tech" router={router} />
   

      </Provider>
    </div >
  );
}

