import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Incdec from './Incdec';
import Todo2 from './Todo2';
import Accordion from './Accordion/Accordion';
import reportWebVitals from './reportWebVitals';
import Note from './Keep_note/Note';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Incdec /> */}
    {/* <Todo2 /> */}
    {/* <Accordion /> */}
    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
