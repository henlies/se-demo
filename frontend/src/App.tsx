import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import ServiceShow from "./components/Service/ServiceShow"
import ServiceAdd from "./components/Service/ServiceAdd"
import ServiceUpdate from "./components/Service/ServiceUpdate"
import ServiceDelete from "./components/Service/ServiceDelete"
import PaymentShow from "./components/Payment/PaymentShow";
import PaymentAdd from "./components/Payment/PaymentAdd";
import Login from "./components/Login";


export default function App() {
  const [token, setToken] = useState<String>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  if (!token) {
    return <Login />;
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serviceshow" element={<ServiceShow />} />
          <Route path="/serviceadd" element={<ServiceAdd />} />
          <Route path="/serviceupdate/:id" element={<ServiceUpdate />} />
          <Route path="/servicedelete" element={<ServiceDelete />} />
          <Route path="/paymentshow" element={<PaymentShow />} />
          <Route path="/paymentadd" element={<PaymentAdd />} />
        </Routes>
      </div>
    </Router>
  );
}