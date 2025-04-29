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
import Class6 from '../components/class6/Class6';
import Class7 from '../components/class7/Class8';
import Class8 from '../components/class8/Class8';
import Class9 from '../components/class9/Cass9';
import Class10 from '../components/class10/Class10';

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/humayun" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/shope" element={<Shope />}></Route>
          <Route path="/sport" element={<Sport />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/class6" element={<Class6 />}></Route>
          <Route path="/class7" element={<Class7 />}></Route>
          <Route path="/class8" element={<Class8 />}></Route>
          <Route path="/class9" element={<Class9 />}></Route>
          <Route path="/class10" element={<Class10 />}></Route>
          <Route path="/contact" element={<Contaxt />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
