import React from 'react'
import "./App.css";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
          OURSHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
          OUR SHOES
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className='category'>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="../assets/flipkart.png" alt="flipkart" />
            <img src="../assets/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
            <img src="../assets/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
}

export default Hero