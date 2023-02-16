import React from 'react'
import "./List.css"
import Card from "../Card/Card"


const List = () => {
    const data=[

        {
            id:1,
            img: "../img/featured1.1.jpg",
            img2: "../img/featured1.2.jpg",

            title:"kurta",

            oldPrice: 4500,
            price: 2500,


        },

        {
            id:2,
            img: "../img/featured2.1.jpg",
            img2: "../img/featured2.2.jpg",

            title:"suit red",

            oldPrice: 4500,
            price: 2500,


        },

        {
            id:3,
            img: "../img/featured3.1.jpg",
            img2: "../img/featured3.2.jpg",

            title:"suit orange",

            oldPrice: 4500,
            price: 2500,


        },

        {
            id:4,
            img: "../img/featured4.1.jpg",
            img2: "../img/featured4.3.jpg",

            title:"kurta blue ",

            oldPrice: 4500,
            price: 2500,


        },
    ]

return (
<div className='List'>{data?.map(item=>(
    <Card item={item} key={item.id}/>
    
))}
</div>
)
}

export default List