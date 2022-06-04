import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../Assets/Logo.svg";
import Menu from "../../Assets/menu.png";
import { Button } from "../../Atoms";

export const Navbar = ({ handleOpen }) => {
  const [sticke, setSticke] = useState("");
  const [mobileIsTrue, setMobileIsTrue] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      let top = window.scrollY;
      if (top > 100) {
        setSticke(0);
      }
    };
  }, []);
  return (
    <div className="head" style={{ top: sticke }}>
      <div className="navbar_width">
        <img className="img_logo" src={Logo} alt="lOGO" />
        {/* <Button color={"#4abe9b"} lable={"Sign Up Now"} handleOpen={handleOpen} />
       <div data-vl-widget="popupTrigger">
         
        </div>*/}
        {/* <div className="right_flex">
          <h1>Blogs</h1>
          <button>#Financial Wellness Test</button>
        </div> */}

        <img className="Mobile_Menu" src={Menu} alt="logo" onClick={() => { mobileIsTrue === false ? setMobileIsTrue(true) : setMobileIsTrue(false) }} />

      </div>


      {
        mobileIsTrue ?
          <div className="mobile_scroll">
            {/* <h1>Blogs</h1>
            <button>#Financial Wellness Test</button> */}
          </div>
          :
          null
      }



    </div>
  );
};
