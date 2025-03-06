import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/home/Home"
import {About} from "./pages/about/About"
import Layout from "./layout/Layout";
import {Contact} from "./pages/contact/Contact"
import { Product } from "./pages/product/Product";
import Footer from "./layout/Footer"
//ელემენტი - გვერდის ცნება 
// კომპონენტი - გვერდის შემადგენელი ნაწილი
// 

function App() {
  return (
    <>
    <Layout />
      <Routes>
        <Route path="/" element={  <Home /> } />
        <Route path="/about" element= { <About /> } /> 
        <Route path="/ucnauri" element = { <Contact />} />
        <Route path="/product" element = {<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
