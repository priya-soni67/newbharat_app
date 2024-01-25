import React, { lazy, Suspense ,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './screen/Home';
import Products from './component/Product';
import Services from './component/Service';
import AboutUs from './component/About';
import ContactUs from './component/Footer';

// Lazy-loaded components
// const Home = lazy(() => import('./screen/Home'));
// const Products = lazy(() => import('./component/Product'));
// const Services = lazy(() => import('./component/Service'));
// const AboutUs = lazy(() => import('./component/About'));
// const ContactUs = lazy(() => import('./component/Footer'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>
          } />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;


