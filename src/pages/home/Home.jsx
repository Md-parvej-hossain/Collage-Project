import React from 'react';
import Carosol from '../../components/carosol/carosol';
import Card from '../../components/card/Card';
function Home() {
  return (
    <div className="">
      <Carosol />
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center py-10 text-gray-500">
        The Bast Book
      </h1>
      <div className="text-center space-x-10 my-5">
        <button className="btn btn-neutral">Pant</button>
        <button className="btn btn-primary">Shart</button>
        <button className="btn btn-secondary">Sare</button>
        <button className="btn btn-accent">Hapen</button>
        <button className="btn btn-info">Longe</button>
        <button className="btn btn-success">Fant</button>
        <button className="btn btn-warning">haha</button>
        <button className="btn btn-error">Error</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
