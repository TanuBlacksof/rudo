import React, { useEffect } from "react";
import "./style.css";
// import { Button } from "../../../Atoms";

export const HomeSlider = ({ openModel }) => {
  const changeControlSectionOnClick = () => {
    document.getElementById("forvard").click();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("forvard").click();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="carosul-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="sliderSection">
              <div class="slider">
                <div
                  class="slide slide--active blue-slide"
                  data-slide="1"
                  onClick={changeControlSectionOnClick}
                >
                  <h4>
                    Saving and investing was never so fun and breeeezyyyy!
                  </h4>
                  <p>Invest to load your treasure chest in a fun way!</p>
                  {/*<Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel} />*/}
                  <div data-vl-widget="popupTrigger" className="make-left"></div>

                  <span class="number-section">01</span>
                </div>
                <div
                  class="slide green-slide"
                  data-slide="2"
                  onClick={changeControlSectionOnClick}
                >
                  <h4>Invest small, earn big!</h4>
                  <p>
                    Invest smartly in your best-fit portfolios and earn exciting
                    rewards for it!
                  </p>
                  {/*<Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel} />*/}
                  <div
                    data-vl-widget="popupTrigger"
                    className="make-left"
                  ></div>
                  <span class="number-section">02</span>
                </div>
                <div
                  class="slide red-slide"
                  data-slide="3"
                  onClick={changeControlSectionOnClick}
                >
                  <h4>
                    Binge-investing! <br />
                    Yes, we are making it a norm!
                  </h4>
                  <p>
                    Explore fun experiences that set you out to start building
                    your wealth!
                  </p>
                  {/*<Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel} />*/}
                  <div
                    data-vl-widget="popupTrigger"
                    className="make-left"
                  ></div>
                  <span class="number-section">03</span>
                </div>
              </div>
              <div class="controls">
                <div id="back">Back</div>
                <div id="forvard">Forward</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

