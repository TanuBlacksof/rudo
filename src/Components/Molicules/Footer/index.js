import React from "react";
import "./style.css";
import Logo from "../../Assets/Logo.svg";
import Instagram from "../../Assets/Instagram.png";
import Twitter from "../../Assets/Twitter.png";
import Linkdin from "../../Assets/Linkdin.png";
import facebook from "../../Assets/facebook.png";
// import { Button } from "../../Atoms";

export const Footer = ({ handleOpen }) => {
  return (
    <div className="main_footer">
      <div className="footer_logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="box_button">
        {/* <Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={handleOpen} />*/}
        {/* <div data-vl-widget="popupTrigger"></div>*/}
      </div>

      <div className="social_footer">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="logo" />
        </a>
        <a
          href="https://www.instagram.com/rudowealth/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="logo" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="logo" />
        </a>
        <a
          href="https://www.linkedin.com/company/rudo-wealth-financial-services-and-investment/about/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkdin} alt="logo" />
        </a>

      </div>

      <div className="copyright_footer">
        <h1>Copyrights © 2022. RuDo Wealth. All rights reserved.</h1>
      </div>
    </div>
  );
};
