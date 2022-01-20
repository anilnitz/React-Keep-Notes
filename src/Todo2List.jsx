import React,{useState} from "react";

const Todo2List = (props) => {
    const[line,setItem]=useState(false);
    const cutit=()=>{
        setItem(true);
    };
    return (
        <><div>
            <i className="fa fa-trash" aria-hidden="true" onClick={cutit}></i>
            <li style={{textDecoration: line ? 'line-through' : 'none'}}>{props.inputval}</li>
        </div>
        </>
    );

};
export default Todo2List;