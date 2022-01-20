import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Incdec = () => {
    const [count, setCount]=useState(0);
    const incData=()=>{
        setCount(count + 1);
    };
    const decData=()=>{
        if(count > 0)
        {
            setCount(count - 1);
        }else{
            alert('limit set smallest value is 1');
            setCount(0);
        }
        
    };
    return (<>
        <div className='App'>
            <p>{count}</p>
            <br />
            <div>
                <button onClick={incData}>+</button>
                <button onClick={decData}>-</button>
            </div>
        </div>
    </>);

};
export default Incdec;