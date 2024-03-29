import React from "react";
import "./style.css";
export default function Midbody() {
  return (
    <div className="main_wrapper">
      <div className="wrapper">
        <div className="candidate div_one">
          <h3>12345+ Candidates</h3>
          <button className="primary_btn candi_btn ">Register</button>
        </div>
        <div className="candidate div_two">
          <h3>12345+ Candidates</h3>
          <button className="primary_btn candi_btn">Register</button>
        </div>
        <div className="candidate div_three">
          <h3>12345+ Candidates</h3>
          <button className="primary_btn candi_btn">Register</button>
        </div>
        <div className="candidate div_four">
          <h3>12345+ Candidates</h3>
          <button className="primary_btn candi_btn">Register</button>
        </div>
      </div>
      <div className="mid_second">
        <div>
          <h1>Want to get involved?</h1>
        </div>
        <div>
          <h3>
            Get in touch. Let's build your perfect team - or find your perfect
            job - today.
          </h3>
        </div>
        <div className="mid_buttons">
          <button className="primary_btn btns">Look For Candidates</button>
          <button className="primary_btn btns">Look For Jobs</button>
        </div>
      </div>
      <div className="package_plan">
        <div>
          <h1>Package Plans</h1>
        </div>
        <div className="plans">
          <img  className="ellipse1" src="../../Ellipse 1819.png" alt="" />
          <img className="ellipse2" src="../../Ellipse 1820.png" alt="" />

          <div className="plans_details">
            <h4>Job Seeker Package</h4>
            <h5>Plan Subtitle</h5>
            <h1>
              <span>Rs.4999</span> Rs.2999
            </h1>
            <h5>Per user per month</h5>
          </div>
          <div className="plans_details">
            <h4>Institution/Proffecionals Package</h4>
            <h5>Plan Subtitle</h5>
            <h1>
              <span>Rs.9999</span> Rs.4999
            </h1>
            <h5>Per user per month</h5>
          </div>
        </div>
      
      </div>
    </div>
  );
}
