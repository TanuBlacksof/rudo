import React from "react";
import "./style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Button } from "../../../Atoms";
import Banner1 from "../../../Assets/Banner illustration01.svg";
import Banner2 from "../../../Assets/Banner illustration02.svg";
import Banner3 from "../../../Assets/Banner illustration03.svg";

export const Slide = ({ openModel }) => {
  return (
    <div className="main_slider_div">
      <Splide
        className="vertical_Scroll_slider"
        options={{
          height: "65vh",
          rewind: true,
          wheel: true,
          pagination: true,
          arrows: false,
          direction: "ttb",
        }}
      >
        <SplideSlide>
          <div className="slide_div" style={{ backgroundColor: "#173588" }}>
            <div className="slide_div_inner">
              <h1>Saving and investing was never so fun and breeeezyyyy!</h1>
              <p>Invest to load your treasure chest in a fun way!</p>
              {/* <Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel}/> */}
              <div data-vl-widget="popupTrigger"></div>
            </div>
            <h1 className="slider_id">01</h1>
            <img className="slide_image" src={Banner1} alt="Bannre" />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide_div" style={{ backgroundColor: "#54BF9B" }}>
            <div className="slide_div_inner">
              <h1>Invest small, earn big!</h1>
              <p>
                Invest smartly in your best-fit portfolios and earn exciting
                rewards for it!
              </p>
              {/* <Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel}/> */}
              <div data-vl-widget="popupTrigger"></div>
            </div>
            <h1 className="slider_id">02</h1>
            <img className="slide_image" src={Banner2} alt="Bannre" />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide_div" style={{ backgroundColor: "#F17E7E" }}>
            <div className="slide_div_inner">
              <h1>Binge-investing! Yes, we are making it a norm!</h1>
              <p>
                Explore fun experiences that set you out to start building your
                wealth!
              </p>
              {/* <Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel}/> */}
              <div data-vl-widget="popupTrigger"></div>
            </div>
            <h1 className="slider_id">03</h1>
            <img className="slide_image" src={Banner3} alt="Bannre" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};
