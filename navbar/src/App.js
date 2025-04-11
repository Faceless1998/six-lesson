import React from "react";
import {Routes, Route}  from "react-router-dom"
import {Home} from "./pages/home/Home.js"
import {About} from "./pages/about/About.js"
import {Contact} from "./pages/contact/Contact.js";
import {Registration} from "./pages/registration/Registration.js"
import Layout from "./layout/Layout.js";
function App() {
  return (
    <>
    <Layout />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> }/>
      <Route path="/registration" element={ <Registration /> }/>
    </Routes>
    </>
  );
}

export default App;
