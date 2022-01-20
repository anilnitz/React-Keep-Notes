import React from 'react';

const Footer=()=>{
    const years=new Date().getFullYear();
    return (
        <div>
        <p>copyright © {years}</p>
        </div>
    );

}
export default Footer;