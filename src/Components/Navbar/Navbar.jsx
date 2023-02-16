import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import Cart from '../../Components/Cart/Cart'

import "./Navbar.css";


const Navbar = () => {
  const[open,setOpen]= useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src=" /img/in.png" width="28px" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
          <span>INR</span>
          <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="products/2">Men</Link>
          </div>

          <div className="item">
            <Link className="link" to="products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/" id="name" >Tarang</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Store</Link>
          </div>
          <div className="icons">
          <SearchIcon />
          <FavoriteBorderOutlinedIcon />
          <PersonOutlineIcon />
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
          <ShoppingCartOutlinedIcon />
          <span>1</span>

          </div>
        </div>
        </div>
        
       
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
