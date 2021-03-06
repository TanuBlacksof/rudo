import React from "react";
import "./style.css"
import feature1 from '../../../Assets/feature1.png'
import feature2 from '../../../Assets/feature2.png'
import feature3 from '../../../Assets/feature3.png'
import feature4 from '../../../Assets/featurebg1.png'
import feature5 from '../../../Assets/featurebg2.png'


import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';


export const HomeCard = () => {

  return (
    <div className="Home_container">
      <div className="feature-section">
        <img
          src={feature4}
          className="top-bg" alt="img4"
        />
        <img
          src={feature4}
          className="bottom-bg" alt="img4"
        />
        <div className="row">
          <div className="col-12">
            <div className="feature-wrapper">
              <div
                className="feature-card card-one"
              >
                <ul className="p-0">
                  <li>
                    <h4>Keep that change. No, literally! </h4>
                    <span className="arrow-vertical" style={{ left: "80px" }}>
                      ↑
                    </span>
                    <p>
                      As they say, “starting small helps you gain big”
                    </p>
                    <img
                      src={feature1}
                      className="img-fluid" alt="img"
                    />
                  </li>
                </ul>
              </div>
              <div
                className="feature-card card-two"
              >
                <ul className="p-0">
                  <li>
                    <h4>Invest Smart!</h4>
                    <span className="arrow-vertical" style={{ left: "80px" }}>
                      ↑
                    </span>
                    <p>
                      Your money, our brains! Choose a portfolio strategy
                      tailored just for you!
                    </p>
                    <img
                      src={feature2}
                      className="img-fluid" alt="img1"
                    />
                  </li>
                </ul>
              </div>
              <div
                className="feature-card card-three"
              >
                <ul className="p-0">
                  <li>
                    <h4>
                      Salary Credited! <br />
                      Salary Debited!
                    </h4>
                    <span className="arrow-vertical" style={{ left: "120px" }}>
                      ↑
                    </span>
                    <p>
                      That was fast! Wondering what happened to all that money?
                    </p>
                    <img
                      src={feature3}
                      className="img-fluid" alt="img2"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_card_slider">
        <Splide
          options={{
            height: '50vh',
            rewind: true,
            wheel: true,
            pagination: true,
            arrows: false,
            autoplay: 'playing'
          }}
        >

          <SplideSlide data-splide-interval="3000">
            <div className="home_card_slider_inner" style={{ backgroundColor: '#FDE4B6' }}>
              <h4>Keep that change. No, literally! </h4>
              <p>
                As they say, “starting small helps you gain big”
              </p>
              <img
                src={feature1}
                className="img-fluid" alt="img"
              />
            </div>
          </SplideSlide>

          <SplideSlide data-splide-interval="3000">
            <div className="home_card_slider_inner" style={{ backgroundColor: '#F17E7E' }}>
              <h4>Invest Smart!</h4>
              <p>
                Your money, our brains! Choose a portfolio strategy
                tailored just for you!
              </p>
              <img
                src={feature2}
                className="img-fluid" alt="img1"
              />
            </div>
          </SplideSlide>

          <SplideSlide data-splide-interval="3000">
            <div className="home_card_slider_inner" style={{ backgroundColor: '#7CC8C2' }}>
              <h4>
                Salary Credited! <br />
                Salary Debited!
              </h4>

              <p>
                That was fast! Wondering what happened to all that money?
              </p>
              <img
                src={feature3}
                className="img-fluid" alt="img2"
              />
            </div>
          </SplideSlide>

        </Splide>

      </div>
    </div>
  );
};
