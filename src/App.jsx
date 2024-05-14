import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Sign from "./pages/sign/Sign";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Single from "./pages/single/Single";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />

        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
