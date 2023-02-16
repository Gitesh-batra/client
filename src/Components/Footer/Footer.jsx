import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
return (
<div className="footer">
    <div className="top">
        <div className="item"> 
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
        </div>
        <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
        </div>
        <div className="item">
            <h1>About</h1> 
             <span>
             Tarang is a luxury apparel brand that celebrates the vibrant colors, 
             styles, and diversity of India. The brand's name, "Tarang," means "waves" in Hindi, 
             and is inspired by the energy and movement of India's rich culture. Tarang offers a range 
             of high-quality garments and accessories, all designed to reflect the beauty and 
             richness of Indian culture. Whether you're looking for traditional Indian wear or more modern,
              contemporary styles, Tarang has something for everyone. So come and discover the magic of 
              Tarang, and let the waves of Indian culture inspire you.
            </span>
         </div> 

         <div className="item">
            <h1>Reach Out To Us</h1> 
             <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
            sed do elusmod tempor incididunt ut labore et dolore. Lorem 
            ipsum dolor sit amet conse ctetur adipisicing elit, seddo 
            eiusmod tempor incididunt ut labore etdolore.
            </span>
         </div> 
    </div>

    <div className="Bottom">
        <div className="left">
          <Link className="logo" to="/" id="name" >Tarang</Link>

            <span className="copyright">
            © Tarang 2022. All rights reserved.
            </span>
        </div>
        <div className="right">
            <img src="/img/payment.png" alt="" />
        </div>
    </div>
</div>
  );
}

export default Footer