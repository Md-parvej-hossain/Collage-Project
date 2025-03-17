import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Men from '../pages/men/Men';
import Women from '../pages/women/Women';
import Shope from '../pages/shope/Shope';
import Sport from '../pages/sport/Sport';
import About from './../components/about/About';
import Contaxt from './../components/contact/Contaxt';

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/shope" element={<Shope />}></Route>
          <Route path="/sport" element={<Sport />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contaxt />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
