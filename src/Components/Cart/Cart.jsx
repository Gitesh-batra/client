import React from 'react'
import "./Cart.css"
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
    const data=[

        {
            id:1,
            img: "../img/featured1.1.jpg",
            img2: "../img/featured1.2.jpg",

            title:"kurta",
            desc:"High-quality brown Indian Kurta with collar and buttons. Knee-length, long sleeves. Versatile and stylish.",





            oldPrice: 4500,
            price: 2500,


        },

        {
            id:2,
            img: "../img/featured2.1.jpg",
            img2: "../img/featured2.2.jpg",

            title:"suit red",
            desc:"Luxurious red Indian suit with salvar and kameez. Embroidered and embellished attire for special occasions.",

            oldPrice: 4500,
            price: 2500,


        },
    ]
    return (<div className='Cart'>
        <h1>Your Cart</h1>
        <hr />
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className="price">1 x Rs.{item.price}</div>
                </div>
                <DeleteIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>Rs.4500</span>
        </div>
        <button>PROCEED TO CHECKOUT </button>
        <span className="reset">Empty Your Cart</span>
    </div>
  )
}
export default Cart