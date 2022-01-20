import React, { useState } from 'react';

const Createnote = (props) => {
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


    return (<>
        <div className='main_div'>
            <h1>Notes</h1>
            <input type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Enter the tile' autoComplete='off' /><br />
            <textarea rows='' column='' name='content' value={note.content} onChange={inputEvent} placeholder='Enter Text'></textarea><br />
            <button onClick={addEvent}>Add Note</button>

        </div>

    </>);
};
export default Createnote;