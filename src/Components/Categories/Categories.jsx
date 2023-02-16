import React from 'react';
import "./Categories.css";
import {Link} from 'react-router-dom';

const Categories = () => {
return (
<div className='Categories'>
    <div className="col">
        <div className="row">
            <img src="./img/featured1.1.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">men</Link>
            </button>
        </div>
        <div className="row">
        <img src="./img/category1.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">women</Link>
            </button>
        </div>
    </div>
    <div className="col">
        <div className="row">
        <img src="./img/featured4.2.jpg" alt="" />
            <button>
                <Link className='link' to="/products/4">Festive</Link>
            </button>
        </div>
    </div>
    <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="./img/c2.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">bridal</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="./img/saree4.3.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">sarees</Link>
            </button>
                </div>
            </div>

        </div>
        <div className="row">
        <img src="./img/scrool6.jpg" alt="" />
            <button>
                <Link className='link' to="/products/1">Kurtas</Link>
            </button>
        </div>
    </div>

</div>
)
}

export default Categories