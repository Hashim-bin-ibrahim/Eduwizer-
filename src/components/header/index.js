import React from "react";
import "./style.css";
export default function Header() {
  const headerMenus = [
    "Home",
    "Candidate",
    "Recruiter",
    "Infrastructure",
    "Career Counselling",
    "Events",
    "Blogs",
    "Contact Us",
  ];
  return (
    <div className="headerWrapper">
      <div className="right_header">
        <img src="../../logo 3.png" alt="" width={75} />
      </div>
      <div className="mid_header">
        {headerMenus.map((item, index) => {
          return <h4 key={index}>{item}</h4>;
        })}
      </div>
      <div className="left_header">
        <button className="primary_btn">My Profile</button>
        <button className="primary_btn">Log Out</button>
      </div>
    </div>
  );
}
