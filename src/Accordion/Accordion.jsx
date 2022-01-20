import React, { useState } from "react";
import MyAccordion from "./MyAccordion";
import { questions } from './api';


const Accordion = () => {
    const [ques, setQues] = useState(questions);
    return (
        <>
            <section className="main-div">
            <h1>React Interview Question</h1>
                {ques.map((curEle) => {
                    const { id } = curEle;
                    return (
                        <MyAccordion key={id} {...curEle} />
                    );
                })}
            </section>
        </>
    );
};
export default Accordion;
