import React from "react";
import {Routes, Route} from "react-router-dom"

import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Registration } from "./pages/registration/Registration";

import Layout from "./layout/Layout"
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Layout />
      
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/sign-in" element={ <Registration /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
