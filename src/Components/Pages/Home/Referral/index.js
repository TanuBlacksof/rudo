import React from "react";
import "./style.css";
import Dollar from "../../../Assets/dollar.png";
import Heighlight1 from "../../../Assets/Heighlight01.svg";
import Heighlight2 from "../../../Assets/Heighlight02.svg";
import { Button } from "../../../Atoms";

export const Referral = ({ openModel, hrefID }) => {
  console.log(hrefID);
  return (
    <div className="main_referral" id={hrefID}>
      <div className="image_referral">
        <h1 className="text_Referral">Referral Offers</h1>
      </div>

      <div className="box_referral">
        <div className="box_referral_flex">
          <div className="box_referral_flex_left">
            <span className="refbox_header_sec">
              <h5>Refer & Earn AED50.</h5>

              <img className="refbox_top_img" src={Heighlight2} alt="" />

              <img className="refbox_bottom_img" src={Heighlight1} alt="" />
            </span>

            <p>
              Refer a friend and get AED50 added in your and your friend's RuDo
              Account!
            </p>

            <Button color={"#e75553"} lable={"Refer Now"} handleOpen={openModel} />
            {/* <div data-vl-widget="popupTrigger"></div>*/}

            <br />

            <Button
              color={"#e75553"}
              handleOpen={openModel}
              lable={"*Terms & Privacy Policy"}
              className="terms_condition"
            />
          </div>

          <div className="box_referral_flex_right">
            <img src={Dollar} alt="Dollar" />
          </div>
        </div>
      </div>
    </div>
  );
};
