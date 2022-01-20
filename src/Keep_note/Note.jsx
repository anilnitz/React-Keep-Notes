import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Notelist from './Notelist';

const Note = () => {
    const [addItem1, setaddItem] = useState([]);
    const addNote = (note) => {
        setaddItem((oldData) => {
            return ([...oldData, note]);
        });
        console.log(note);
    };

    const onDelete = (id) => {
        setaddItem((oldItedz) =>
            oldItedz.filter((currdata, indx) => {
                return indx !== id;
            })
        );

    };


    return (<>
        <Header />
        <div>
            <p>Hello</p><br />
            <Createnote passNote={addNote} />
        </div>

        <br />
        <br />
        <br />

        {addItem1.map((val, index) => {

            return (<Notelist key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />);
        })}
        <Footer />

    </>);
};
export default Note;