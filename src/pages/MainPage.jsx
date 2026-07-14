import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Products from './Products.jsx';

function MainPage() {
  return (
    <div>
      <div id="home"><Home /></div>
      <div id="about" className="py-5"><About /></div>
      <div id="products" className="py-5"><Products /></div>
    </div>
  );
}

export default MainPage;