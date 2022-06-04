import React, { useState } from "react";
import "./style.css";
import Cancel from "../../Assets/Cancel.png";
import Vector from "../../Assets/VectorBlack.svg";
import Vector1 from "../../Assets/VectorBlack1.svg";
import Vector2 from "../../Assets/VectorBlack2.svg";
import Banner from "../../Assets/Banner2.png";
import { Button } from "../../Atoms";

export const IntroModel = ({ handleOpen }) => {
  const [close, setClose] = useState(true);
  const handleCloseiIntro = () => {
    setClose(false);
  };
  return (
    <>
      {close && (
        <div className="main_intro_model">
          <div className="intro_model_center">
            <img
              src={Cancel}
              className="model_btn_cencle"
              alt="cencle"
              onClick={() => setClose(false)}
            />
            <div class="intro_model_title">
              <img src={Vector} class="intro_model_img_one" />
              <img src={Vector1} class="intro_model_img_two" />
              <h1>
                LAUNCHING <br /> SOON!
              </h1>
              <img src={Vector2} />
            </div>
            <p className="intro_model_center_text">
              Join the waitlist and get 12 months of subscription on RuDo App
              Launch!*
            </p>
            {/* <Button
              color={"#e75553"}
              lable={"Sign Up Now"}
              handleOpen={handleCloseiIntro}
              closeIntro={handleCloseiIntro}
            /> */}
            <div data-vl-widget="popupTrigger" className="make-left"></div>
            <img src={Banner} class="intro_model_center_img" />
          </div>
        </div>
      )}
    </>
  );
};
