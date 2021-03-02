import React from "react";
import { NavLink } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Img0 from "./images/tanmay1.jpg";

const Home = () => {
  return (
    <>
       <section id="header" className="d-flex align-item-center">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <Zoom>
                <div className="col-md-6 pt-4 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Hi, <br /> I am
                    <strong className="brand-name"> Tanmay Chandan</strong>
                  </h1>
                  <h2 className="homeH2 my-3 size-10">I am currently pursuing B.tech final year in E&TC stream at VIT,Pune.</h2>
                  <div className="mt-3">
                    <NavLink to="/Resume" className="button1 btn-get-started">
                    Resume
                    </NavLink>
                  </div>
                </div>
                </Zoom>
                <Slide right >
                <div className="col-lg-5 order-2 order-lg-2 header-imgHome">
                  <img
                    id="img1"
                    src={Img0}
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

export default Home;
