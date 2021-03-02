import React from 'react'
//import { NavLink } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Img1 from "./images/img1.jpg";

const About = () => {

   
    return (
        <>
        <section id="header" className="d-flex align-item-center">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto ">
                <div className="row my-4 ">
                  <Zoom >
                  <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                  <h1>
                      <strong className="brand-name mr-4">About Me</strong>
                    </h1>
                    <h2 className="aboutH2 my-3 ml-4 text-left">I am currently enrolled in 8th semester of E&TC Engineering(B.Tech)
                                          degree at VIT,Pune. I love to explore new things, coming up with
                                          problems and solving them. From Software development perspective, I
                                          love to work on Website development. I recently started learning
                                          ReactJS and i am loving it.
                                        <br />
                                          Apart from this I love Playing cricket, Mobile games, Listening songs
                                          and Watching movies.
                    </h2>
                    
                  </div>
                  </Zoom>
                  <Slide left>
                  <div className="col-lg-6  order-1 order-lg-1 header-imgAbout">
                    <img
                      id="imgAbout"
                      src={Img1}
                      className="img-fluid animated"
                      alt="home image"
                    />
                  </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default About;
