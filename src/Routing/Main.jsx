import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from "./NotFound";
import './custom.css';


const Main = () => {
    return (<>

        <nav>
            <ul>
                <li>
                    <Link className='active_class' to="/">Home</Link>
                </li>
                <li>
                    <Link className='active_class' to="/about">About</Link>
                </li>
                <li>
                    <Link className='active_class' to="/users">Users</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/contact/a" element={<About />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>

    </>);

};
export default Main;