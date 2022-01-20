import React, { useState } from 'react';

const Createnote = (props) => {
    const [expend, setexpend]=useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const inputEvent = (event) => {
        // const value=event.target.value;
        // const name=event.target.name
        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData, [name]: value,
            }
        });
        console.log(note);

    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        });

    };

    const expendIt=()=>{
        setexpend(true);
    };
    const backtoNormal=()=>{
        setexpend(false);
    };


    return (<>
        <div className='main_div' onDoubleClick={backtoNormal}>
            <h1>Notes</h1>
            {expend?
            <input type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Enter the tile' autoComplete='off' />
            :null}
            <br />
            <textarea rows='' column='' name='content' value={note.content} onChange={inputEvent} placeholder='Enter Text' onClick={expendIt}></textarea><br />
            {expend?<button onClick={addEvent}>Add Note</button>:null}

        </div>

    </>);
};
export default Createnote;