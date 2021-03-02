import React from "react";
//import { Link, NavLink } from "react-router-dom";

const Card = (props) => {

 
  return (
    <>
      <div className="col-md-3 col-10 mx-auto">
        <div id="card" className="text-center" >
          <img id="card_img" src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            {//<p className="card-text">{props.information}</p>
            }
             
            <button type="button" onClick={props.projectlink} className=" cardBtn btn  ">
              Go To Project
            </button>
        
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
