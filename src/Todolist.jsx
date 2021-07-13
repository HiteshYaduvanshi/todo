import React from 'react';

const Todolist = (props)=>{

    return(<>
    <div className="todostyle">
    <i class="fa fa-times" aria-hidden="true" onClick={()=>{
    props.onselect(props.id)
    }} ></i>
    <li>{props.item}</li>
    </div>
    </>) 
}

export default Todolist;

