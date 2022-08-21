import React from "react";

import "./App.css";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//component
import Pages from "./pages/Pages";

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Pages />
    </div>
  );
};

export default App;
