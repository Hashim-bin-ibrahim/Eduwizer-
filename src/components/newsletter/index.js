import React from "react";
import "./style.css";
export default function Newsletter() {
  return (
    <div className="news_wrapper">
      <img className="news_img" src="../../5.png" alt="" />
      <div style={{ fontSize: "20px", fontWeight: "800" }}>
        <h1>Subscribe to our Newsletter</h1>
      </div>
      <div style={{ fontSize: "50px" }}>
        <p>if you want to recieve new offers and notifications from us</p>
      </div>

      <div className="input">
        <input type="text" name="" id="" placeholder="hashimam1323@gmail.com" />
        <button className="primary_btn bts">Subcribe</button>
      </div>
    </div>
  );
}
