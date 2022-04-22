import React from 'react';
import Carosel from './Carosel';
import Card from './Card';
import Card1 from './Card1';
import Card2 from './Card2';
import makeup from '../images/makeup (1).jpeg'
import background from '../images/makeup (2).jpeg';
import Footer from './Footer';
import CartIcon from './CartIcon';

export default function Home1() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      {/* <div className="container my-5">
        <img src={makeup} alt="" />
      </div> */}
      <div className="container-fluid ">
        <div className="row">
            <div className="col-sm">
                <div className="row-sm">
                    <img src="https://images.indianexpress.com/2020/08/augmented-reality-for-lipstick-testing.jpg" className="mainimg img-fluid"></img>
                    <h2 className="carousel-caption1">Augmented Reality Platform</h2>
                    <p className="carousel-caption1">With mirrAR you can virtually try on fashion and beauty products and experience how it feels to own them before the actual purchase.</p>
                    <br/>
                    <h2 className="carousel-caption1">Our Products</h2>
                </div>
            </div>
            
        </div>
    
    </div>
      <div className="container my-3">
      <div class="row">
        <div class="col ml-5 mb-4">
        <Card/>
        </div>
        <div class="col mb-4">
        <Card1/>
        </div>
        <div class="col mb-4">
        <Card2/>
        </div>
      </div>        
      </div>
      {/* <Footer/> */}
      <CartIcon/>
      </div>
  );
}
