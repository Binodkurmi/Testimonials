import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer />
  </>
);
