// import { Card } from '@mui/material'
import React from 'react'
import "./FeaturedProducts.css"
import Card from '../../Components/Card/Card'

const FeaturedProducts = ({type}) => {

    const data=[

        {
            id:1,
            img: "./img/featured1.1.jpg",
            img2: "./img/featured1.2.jpg",
            title:"kurta",
            isNew: true,
            oldPrice: 4500,
            price: 2500,


        },

        {
            id:2,
            img: "./img/featured2.1.jpg",
            img2: "./img/featured2.2.jpg",
            title:"suit red",
            isNew: true,
            oldPrice: 4500,
            price: 2500,


        },

        {
            id:3,
            img: "./img/featured3.1.jpg",
            img2: "./img/featured3.2.jpg",
            title:"suit orange",
            isNew: true,
            oldPrice: 4500,
            price: 2500,


        },

        {
            id:4,
            img: "./img/featured4.1.jpg",
            img2: "./img/featured4.3.jpg",
            title:"kurta blue ",
            isNew: true,
            oldPrice: 4500,
            price: 2500,


        },
    ]

return (
<div className='FeaturedProducts'>

<div className="top">
    <h1>{type} products</h1>
    <p>
    Tarang is a brand that specializes in providing premium traditional Indian apparels such as sarees and kurtas. Their products
     are made with high-quality materials and attention to detail, ensuring that you look and feel your best in traditional Indian 
      attire. Whether you're attending a wedding or a special event, Tarang has something for every occasion.



    </p>
</div>
<div className="bottom">
{data.map(item => (
    <Card item={item} key={item.id}/>
))}
</div>
</div>
)
}

export default FeaturedProducts