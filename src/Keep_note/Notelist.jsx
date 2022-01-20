import React from 'react';

const Notelist = (props) => {
    const deleteNote=()=>{
        props.deleteItem(props.id);
    };
    return (<>
        <div className='note'>
            <h2>{props.title}</h2><br />
            <p>{props.content}</p> <br />
            <button onClick={deleteNote}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
    </>);
};
export default Notelist;