import React from "react";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Card from "./Card";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <>
      <Zoom>
      <div className="my-4  text-center">
        <h1 className="projectHeading col-10 mx-auto">My Projects</h1>
      </div>
      </Zoom>
      <Bounce bottom>
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {ProjectsData.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                   
                    projectlink={val.projectlink}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </Bounce>
    </>
  );
};

export default Projects;
