import React, { useState } from 'react'
import '../App.css';
import Gallery from './Gallery';
import Buttons from './Button';

const Sdata = [
    {
        id: 1,
        image: "images/break-1.jpg",
        name: 'Boiled Eggs',
        Price: '10₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'breakfast'
    },
    {
        id: 2,
        image: "images/break-2.jpg",
        name: 'Sandwich + Salad',
        Price: '100₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'breakfast'
    },
    {
        id: 3,
        image: "images/break-3.jpg",
        name: 'Sandwich',
        Price: '80₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'breakfast'
    },
    {
        id: 4,
        image: "images/lunch-1.jpg",
        name: 'Nonveg Thali',
        Price: '160₹/300₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'lunch'
    },
    {
        id: 5,
        image: "images/lunch-2.jpg",
        name: 'Veg Thali',
        Price: '100₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'lunch'
    },
    {
        id: 6,
        image: "images/lunch-3.jpg",
        name: 'Falafal',
        Price: '160₹/300₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'lunch'
    },
    {
        id: 7,
        image: "images/snack-1.jpg",
        name: 'Samosa',
        Price: '15₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'snack'
    },
    {
        id: 8,
        image: "images/snack-2.jpg",
        name: 'Chaat',
        Price: '20₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'snack'
    },
    {
        id: 9,
        image: "images/snack-3.jpg",
        name: 'Bread Pakoda',
        Price: '20₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'snack'
    },
    {
        id: 10,
        image: "images/dinner-1.jpg",
        name: 'Paneer',
        Price: '160₹/300₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'dinner'
    },
    {
        id: 11,
        image: "images/dinner-2.jpg",
        name: 'Rajma',
        Price: '160₹/300₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'dinner'
    },
    {
        id: 12,
        image: "images/dinner-3.jpg",
        name: 'Chaap',
        Price: '160₹/ 300₹',
        description: 'Food is any substance consumed by an organism for nutritional support.',
        category:'dinner'
    }
]
const unique =[...new Set(Sdata.map(data=>data.category)),'ALL']

const ReactGallery = () => {
    const [categoryItems,setCatItems] = useState(unique)
    const [items, setItems] = useState(Sdata)

    const itemFilter = (items) => {
        if(items ==='ALL'){
            setItems(Sdata)
            return;
        }
        console.log(items)

        const filterData = Sdata.filter((elem)=>{
           return elem.category === items
            })
        setItems(filterData)
    }


    return (<>
      <h1 className='text-center mt-5 text-danger text-decoration-underline text-uppercase'>Order Your Favourite Dish</h1>
        <Buttons itemFilter={itemFilter} categoryItems={categoryItems}/>
        <Gallery items={items}/>
    </>
    )
}

export default ReactGallery