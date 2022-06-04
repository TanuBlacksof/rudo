import React from "react";
import "./style.css";
import Cancel from "../../Assets/Cancel.png";
import Vector2 from "../../Assets/Vector2.svg";
import { Button } from "../../Atoms";

export const SignUpModel = ({ close, handleClose, hrefID }) => {
  return (
    <>
      {close && (
        <div className="sign_up_model">
          <div className="sign_up_center">
            <img
              src={Cancel}
              className="sign_up_btn_cencle"
              alt="cencle"
              onClick={() => handleClose()}
            />

            {/* <p className="sign_up_center_text">RuDo Wealth!</p> */}

            <div className="sign_up_center_para">
              <h3>Terms & Conditions</h3>
              <img src={Vector2} alt="img" />
            </div>

            <ul>
              <li>
                Every time your family/ friends sign up with your shared
                referral link and becomes a new RuDo subscriber by setting up a
                RuDo Wealth account in accordance with the eligibility criteria
                below, you and your friend will receive AED50 investment by RuDo
                in your RuDo Wealth accounts.
              </li>
              <li>
                <h5>Special Referral Bonus - </h5>
                Refer 5 friends and get AED500 into your RuDo account. *
              </li>
            </ul>

            <br />
            <div className="sign_up_center_para">
              <h4>Eligibility</h4>
              <img src={Vector2} alt="img" />
            </div>
            <ul>
              <li>
                Referral codes must be used during the early sign up and
                on-boarding process, and cannot be added retroactively.
              </li>
              <li>
                Only when your friend funds his/her account with the initial
                investment of AED20 into their portfolio, the referral amount
                will be added to both of your accounts within 30 days.
              </li>
              <li>
                Clients who receive a referral bonus must keep it in their
                account for 90 days, otherwise it may be deducted from their
                final withdrawal amount.
              </li>
              <li>
                The referral program is available exclusively to those who
                residing in MENA.
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
