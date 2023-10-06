import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Blogs from './Blogs';
import Services from './Services';
import Commerce from './Commerce';
import Shopify from './Shopify';
import Navbar from './Navbar';
import Culture from './Culture';
import Portfolio from './Portfolio';
import Solutions from './Solutions';
import Home from './Home';
import Footer from './Footer';
import Wordpress from './Wordpress';
import Learndash from './Learndash';
import Speed from './Speed';


import FrontEndDevelopment from "./Frontend"
import Markting from './Markting';
import Ui from './Ui';
import Managed from './Managed';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/learndash" element={<Learndash />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/Frontend" element={<FrontEndDevelopment />} />
        <Route path="/Markting" element={<Markting />} />
        <Route path="/Ui" element={<Ui />} />
        <Route path="/Managed" element={<Managed />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
