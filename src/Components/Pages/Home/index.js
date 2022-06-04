import React from "react";
import { MainBlade } from "./MainBlade";
import { NewsAlert } from "./NewsAlert";
import { Referral } from "./Referral";
import { LaunchSoon } from "./LaunchSoon";
import { FooterBlade } from "./FooterBlade";
import { HomeSlider } from "./HomeSlider";
import { HomeCard } from "./HomeCard";
import { FixedButton } from "./FixedButton";
import { ThreeFlex } from "./ThreeFlex";

export const Home = ({ handleOpen, hrefID }) => {
  return (
    <div className="main_home">
      <FixedButton hrefId="#lunch" />
      <MainBlade />
      {/*<NewsAlert />*/}
      <ThreeFlex />
      <HomeSlider openModel={handleOpen} />
      <HomeCard />
      {/*<Referral />*/}
      <LaunchSoon openModel={handleOpen} hrefId="lunch" />
      <FooterBlade openModel={handleOpen} />
    </div>
  );
};
