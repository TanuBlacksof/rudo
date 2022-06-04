import React from "react";
import "./style.css";
import Star from "../../../Assets/Star3.png";

export const NewsAlert = () => {
  return (
    <div className="main_alert">
      <marquee behavior="scroll" direction="left">
        <span>
          <img src={Star} alt="star" />
          &nbsp;&nbsp;&nbsp;
        </span>
        A chance to win up to
        <strong style={{ color: "#fec55e", fontWeight: "700" }}>
          {" "}
          AED 50,000{" "}
        </strong>
        Every Month post our launch!
        <span>
          &nbsp;&nbsp;&nbsp;
          <img src={Star} alt="star" />
        </span>
      </marquee>
    </div>
  );
};

