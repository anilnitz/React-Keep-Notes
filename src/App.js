import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import './App.css';

function App() {
  const [item,setItem]=useState('');
  const [itemLIst,setItemList]=useState([]);

  const inputValSet=(event)=>{
    setItem(event.target.value);
  };

  const itemAdd=()=>{
    setItemList((oldItems)=>{
      return [...oldItems, item];
    });
    setItem('');

  };

  const deleteItems=(id)=>{
    setItemList((oldItems)=>{
      return oldItems.filter((arrEle,arrIndex)=>{
        return arrIndex !==id;

      })
    });
    console.log('deleteitem');
};

  return (
    <div className="App">
      <input type='text' placeholder='Enter Value' name='title' value={item} onChange={inputValSet} />
      <button type='submit' onClick={itemAdd}>Add</button>
      {itemLIst.map((itemval,index,indexarray)=>{
        {/* return <li>{itemval}</li>; */}
        return <Todolist key={index} id={index} items={itemval} onSelect={deleteItems}/>;
      }
      )}
      
    </div>
  );
}

export default App;
