import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const AllFourComAddInOne = () => {
  const [item, setItem] = useState([])

  const addEvent=(note)=>{
      setItem((preValue) =>{
        return [...preValue, note]
      })
      
  }

  const onDelete = (id)=> {
    setItem((preValue)=>{
      return preValue.filter((val,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <Header />
      <CreateNote addEvent={addEvent} />
      {item.map((items,index) => {
        return(
          <Note
            key = {index}
            id={index}
            title={items.title}
            textarea = {items.textarea}
            onSelect = {onDelete}
          />
        )
      })}
      
      <Footer />
    </>

  )
}

export default AllFourComAddInOne;