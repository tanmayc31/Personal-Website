import React from 'react';
import { NavLink } from "react-router-dom";
import resumeTanmay from "./images/Tanmay_Chandan_Resume.pdf";
const Resume = () => {
    return (
        <div className=" text-center">
          
                <h1 className= "mb-5">My Resume</h1>
                <embed src={resumeTanmay} width="900px" height="1250px" />
           
        </div>
    );
};

export default Resume;
