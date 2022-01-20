import React, { useState } from "react";
import Todo2List from "./Todo2List";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Todo2 = () => {
    const [inputItem, setInputItem] = useState('');
    const [itemList, setItemList] = useState([]);

    const item = (event) => {
        setInputItem(event.target.value);
    };

    const addList = () => {
        setItemList((prevItems) => {
            return [...prevItems, inputItem];
        });
        setInputItem('');

    };

    return (
        <>
        <div className="text-center">Hello React

        </div>
            
            <div className="App" >
                <input type='text' placeholder='enter value' value={inputItem} onChange={item} />
                <button className="btn btn-success" type='submit' onClick={addList}>Add</button>
            </div>
            <div className="App">
                {itemList.map((itemVal, index) => {
                    return (
                        <>
                            <Todo2List key={index} id={index} inputval={itemVal} />
                        </>
                    );
                })}

            </div>
        </>
    );
};

export default Todo2;