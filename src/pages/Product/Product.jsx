import React, { useState } from 'react'
import "./Product.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
    const[selectedImg,setSelectedImg]= useState(0);
    const[quantity,setQuantity]= useState(0);

    const images=[
        "../img/saree4.2.jpg",
        "../img/saree4.3.jpg",

    ];
return (
<div className='Product'>
 
    <div className="left">
        <div className="images">
            <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
        <img src={images[selectedImg]} alt="" />

        </div>
    </div>
<div className="right">
    <h1>Title</h1>
    <span className='Price'>Rs.4500</span>
    <p>the product content goes here</p>
    <div className="quantity">
        <button className="subPdt" onClick={()=> setQuantity((prev)=>prev===1?1:prev-1)}>-</button>
        {quantity}
        <button className="addPdt" onClick={()=> setQuantity(prev=>prev+1)}>+</button>
    </div>
    <button className="add">
        <AddShoppingCartIcon/>ADD TO CART
    </button>
    <div className="link">
        <div className="item">
             <FavoriteBorderIcon/>ADD TO WISHLIST
             </div>
        <div className="item"> 
        <BalanceIcon/>ADD TO COMPARE 
        </div>
    </div>
    <div className="info">
        <span>Product Type: Saree</span>
        <span>Tag: Women, Indian,Saree</span>
    </div>
    <hr/>
    <div className="details info ">
    <span>DESCRIPTION</span>
    <hr />
    <span>ADDITIONAL INFORMATION</span>
    <hr />
    <span>FAQ</span>
    </div>
</div>
</div>
)
}

export default Product