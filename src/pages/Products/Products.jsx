import List from '../../Components/List/List';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Products.css";
const Products = () => {

    const catId = parseInt(useParams().id)
        const [maxPrice,setMaxPrice] = useState(100000)
    const [sort,setSort]=useState(null)
return (
<div className='Products'>
    <div className="left">
        <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
                <input type="checkbox" id='1' value={1} />
                <label htmlFor="1">Traditional</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='2' value={2} />
                <label htmlFor="2">Wedding</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='3' value={3} />
                <label htmlFor="3">Casual</label>
            </div>
        </div>
        <div className="filterItem">
            <h2>filter by price</h2>
            <div className="inputItem">
                <span>0</span>
                <input className='Range' type="range" min={0} max={100000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
                
            </div>
        </div>
        <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
                <input type="radio" id='asc' value="asc" name="price" onChange={e=> setSort("asc")}/>
                <label htmlFor="asc">Price (Lowest First)</label>
            </div>
            <div className="inputItem">
                <input type="radio" id='desc' value="desc" name="price"onChange={e=> setSort("desc")}/>
                <label htmlFor="desc">Price (Highest First)</label>
            </div>
        </div>
    </div>
    <div className="right">
        <img 
        className="catImg"
        src="../img/scrool1.jpg" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
    </div>
</div>
)
}

export default Products