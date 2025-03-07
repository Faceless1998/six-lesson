import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import { Products } from './pages/products/Products';
import { Contact } from './pages/contact/Contact';
import Layout from './layout/Layout';
import Footer from './layout/Footer';

function App() {
  return (
    <>
    <Layout />

    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path='/product' element={ <Products /> } /> 
        <Route path='/contact' element={ <Contact /> } />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
