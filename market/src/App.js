import './App.css';
 import { Routes, Route } from 'react-router-dom';
 import { Home } from "./pages/home/Home"
 import { About } from './pages/about/About';
 import { Contact } from './pages/contact/Contact';
 import { Products } from './pages/products/Products';
 import Layout from './layout/Layout';
 
 function App() {
   return (
     <>
       <Layout />
       <Routes>
         <Route path='/' element= { <Home /> } />
         <Route path='/about' element= { <About /> } />
         <Route path='/contact' element= { <Contact /> } />
         <Route path='/products' element= { <Products /> } />
       </Routes>
     </>
   );
 }
 
 export default App;