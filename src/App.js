import React, { useState } from 'react'
import Todolist from './Todolist'

const App= ()=>{
  // creating a state which takes data from input
  const [listitems,setlistitems] = useState('');
  // creating a state who store data in array
  const [items,setitems] = useState([]);
  //cearting a function which take data from input
  const itemsevent = (event)=>{
    setlistitems(event.target.value) //input data store in state 
  }
  //data display only when we click on button
  const listofitems =()=>{
    setitems((olditems)=>{
      return [...olditems,listitems];
    });
    //delete data item in input after add item 
    setlistitems('');
  }
  //delete item wich already in list
  const deleteitem = (id)=>{
    // alert('itemdelete')
    setitems((olditems)=>{
      return olditems.filter((arrelement,index)=>{
        return index !== id;
      })
    })
}
return(<>
    <div className='maindiv'>
    <div className='centerdiv'>
    <h1>ToDo Lists</h1><br />
    <input 
      type='text' 
      placeholder='Add items' 
      value = {listitems}
      // onchange fatch the data from input
      onChange = {itemsevent} 
    />
    <button onClick={listofitems}>+</button>
    <ol>
      {/* <li>{items}</li> */}
      {items.map((itemval, index)=>{
        return (
        <Todolist
        key ={index}
        id = {index}
        item={itemval}
        onselect={deleteitem}
         />)
      }
      )}
    </ol>
    </div>
    </div>
  </>)
}

export default App;