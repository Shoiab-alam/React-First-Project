import React from "react";
import Button from '@material-ui/core/Button'; 
import Tooltip from '@material-ui/core/Tooltip';

const Note = (props) => {

    return(<>
        <div className="flex">
        <div className="grid border-2 w-60 m-5 rounded-2xl shadow-lg p-3">
            <h1>{props.title}</h1>
            <br />
            <p>{props.textarea}</p>
            <div className="flex justify-end">
                <Tooltip title='Delete'>
                <Button onClick={()=> props.onSelect(props.id)} className='w-10 h-10' style={{fontSize:'18px'}}    variant="contained"  size="large"><i className="fa-solid fa-trash"></i></Button>
                </Tooltip>
            </div>
        </div>
        </div>
        
    </>)
}

export default Note;


