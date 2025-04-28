import React from 'react';
import Carosol from '../../components/carosol/carosol';
import Card from '../../components/card/Card';
import Card1 from '../../components/card/Card1';
import Card2 from '../../components/card/Card2';
import Card3 from '../../components/card/Card3';
function Home() {
  return (
    <div className="">
      <Carosol />
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center py-14 text-gray-500">
        The Bast Book
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-10">
        <Card />
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default Home;
