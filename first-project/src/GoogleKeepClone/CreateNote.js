import React, { useState } from "react";
import Button from '@material-ui/core/Button'; 
import Tooltip from '@material-ui/core/Tooltip'; 


const CreateNote = (props) => {
const [expand,setExpand] = useState(false)

const [note,setNote] = useState({
    title: '',
    textarea:''
})

const inputEvent =(event) => {
    const {name, value} = event.target;
    setNote((preValue)=>{
        return {
            ...preValue,
            [name]: value
        }
    })
}

const addEvent =(event)=>{
    event.preventDefault();
    props.addEvent(note)
    setNote({
        title: '',
        textarea:''
    })
}
const ExtendIt = () =>{
    setExpand(true)
}
    return(<>
        <div className="flex justify-center mt-20">
        <div className="border-2 rounded-2xl h-48 shadow-lg p-5">
            <form className="">
              {expand? <input name='title' type='text' value={note.title} placeholder="Title" className="w-full p-2 text-2xl" autoComplete="off" onChange={inputEvent} />: null}
                <textarea rows='' name='textarea' value={note.textarea} column='' placeholder="Write a Note" className="w-full p-2" onChange={inputEvent} onClick={ExtendIt} />
                <div className="flex justify-end">
                    <Tooltip title='Add'>
                 <Button className='w-10 h-10'
                  style={{background:'#EAB308',fontSize:'18px'}}
                  variant="contained"  size="large"
                  onClick={addEvent}>
                    <i className="fa-sharp fa-solid fa-plus"></i>
                    </Button>
                </Tooltip>
                </div>
            </form>
        </div>
        </div>
    </>)
}
export default CreateNote;