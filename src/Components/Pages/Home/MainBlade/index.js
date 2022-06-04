import React from "react";
import "./style.css";
// import { Button } from '../../../Atoms'

import ReactPlayer from "react-player";

export const MainBlade = () => {
  return (
    <div className="top_container">
      <div className="main_Blade">

        <div className="w2">
          <div className="float_text">
            <h1 className="blade_text">
              Got Spare Change?
              <br />
              Let’s grow it
              <span style={{ color: "#e75553" }}>
                &#160; automatically!
              </span>
            </h1>
          </div>

          <div className="content_text">
            <p>
              Start small but steady! With RuDo, build a Global ETF portfolio and let us grow your
              spare change into a million bucks in a fun and rewarding way.
            </p>
          </div>

          <div className="Input_Form">

            <input
              className="inputFieldname"
              placeholder="Name"
            />

            <input
              className="inputFieldemail"
              placeholder="Enter your email id"
            />

            <button className='button_new'>
              Start today!
            </button>
          </div>
        </div>

        <div className="w2 right-element">
          <div className="row">
            <ReactPlayer
              url="https://youtu.be/fE-2h3stIhw"
              muted={true}
              loop={true}
              playing={true}
              width={498}
              height={490}
              controls={true}
            />
          </div>
        </div>

      </div>



      {/*Mobil view*/}
      <div className="main_mobile">
        <div className="float_text">
          <h1 className="blade_text">
            Got Spare Change?
            Let’s grow it
            <br />
            <span style={{ color: "#4abe9b" }}>
              automatically!
            </span>
          </h1>
        </div>

        <ReactPlayer
          url="https://youtu.be/fE-2h3stIhw"
          muted={true}
          loop={true}
          playing={true}
          width={350}
          height={350}
          controls={true}
          className="react-player"
        />

        <div className="content_text">
          <p>
            Start small but steady! With RuDo, build a Global ETF portfolio and let us grow your
            spare change into a million bucks in a fun and rewarding way.
          </p>
        </div>

        <div className="Input_Form">

          <input
            className="inputFieldname"
            placeholder="Name"
          />

          <input
            className="inputFieldemail"
            placeholder="Enter your email id"
          />

          <button className='button_new'>
            Join waitlist
          </button>
        </div>

      </div>
      {/*Mobil view*/}

    </div>
  );
};
