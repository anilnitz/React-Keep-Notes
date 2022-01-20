import React from 'react';

const Todolist=(props)=>{
    
return (<>
<div>
<i className="fa fa-trash" aria-hidden="true" onClick={()=>{
props.onSelect(props.id);
}}></i>
    <li>{props.items}</li>
 </div>
</>);
};
export default Todolist;