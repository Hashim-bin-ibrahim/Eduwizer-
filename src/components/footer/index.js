import React from "react";
import "./style.css";
import {AiFillInstagram,AiOutlineYoutube} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

export default function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer imgs">
        <img src="../../logo 3.png" alt="" width={300}/>
        <p>Millions of jobs. Search by what matters to</p>
        <p>you and find the one that's right for you.</p>
      </div>
      <div className="footer">
        <p>Quick Links</p>
        <p>Infrastructure</p>
        <p>Career Counselling</p>
        <p>Blog</p>
        <p>Events</p>
      </div>
      <div className="footer">
        <p>Other Menus</p>
        <p>Terms And Conditions</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer">
        <p>More</p>
        <p>Terms Of Use</p>
        <p>Awards And Events</p>
      </div>
      <div className="footer">
        <p>Follow us</p>
       <div className="social_media">
       <AiFillInstagram/>
       <BsFacebook/>
       <AiOutlineYoutube/>
       <FiTwitter/>
       </div>
      </div>
      <h5 className="cin_number">
      CIN Number - U74999-MOBNO-96338_02594
      </h5>
    </div>
  );
}
