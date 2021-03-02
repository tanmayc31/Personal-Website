import React, { useState } from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const [data, setdata] = useState({
        fullname:"",
        mobilenumber:"",
        email:"",
        message:"",
    });

    const InputEvent=(event)=>{
        const{name,value}= event.target;

        setdata((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            }
        })
    };
const formSubmit =(e)=>{
e.preventDefault();
alert(`My name is ${data.fullname}. My Mobile Number is ${data.mobilenumber}. My email id is ${data.email}. My message fo you is ${data.message}`)

}

  return (
    <>
    <Fade>
     <section id="header" className="d-flex align-item-center">
     <div className="container-fluid mt-4 ">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
      <div id="contact" className=" col-md-6 pt-4 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
        <h1 className="text-center"> Contact </h1>
      
      <div className="container contact_div">
        <div className="row">
          <div className=" col-md-9 mx-auto ">
            <form onSubmit={formSubmit}>
              <div className="mb-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="mobilenumber"
                  value={data.mobilenumber}
                  onChange={InputEvent}
                  placeholder="Enter Your Mobile Number "
                />
              </div>
              <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-2">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="button1 btn  ">
                  Confirm identity
                </button>
              </div>
            </form>
          </div> 
        </div>
      </div>
      </div>
    
    <div id="contactMe" className="col-lg-6 order-2 order-lg-2 d-flex justify-content-center flex-column ">
    <h1 className="font-weight-lighter">
      <LocationOnIcon onClick={() => window.open('https://goo.gl/maps/BMUSoKbKjeTQJgUu7',"_blank")} className="icons" fontSize="large" />
        Pune | India
      </h1> 
      <br />
     
      <h3> <CallIcon className="icons" fontSize="large"/>+91 9028800902
      <br />
      <br /><EmailIcon onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox',"_blank")} className="icons" fontSize="large" />
      tanmaychandan31@gmail.com
      <br />
      <br />
      </h3>
      <div className="font-weight-bold">
    <InstagramIcon onClick={() => window.open('https://www.instagram.com/tanmay_chandan/',"_blank")} className="icons" fontSize="large"/> 
    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/tanmay-chandan-a45a9115a/',"_blank")} className="icons" fontSize="large" /> 
    <GitHubIcon onClick={() => window.open('https://github.com/tanmayc31',"_blank")} className="icons" fontSize="large"/>
    </div>
    </div>
    
  </div>
  </div>
  </div>
  </div>
  </section>
  </Fade>
   </>
  );
};

export default Contact;
