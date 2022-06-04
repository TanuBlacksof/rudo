import React, { useState } from "react";
import "./style.css";
import { Navbar, NewsAlert, Footer } from "./Components/Molicules";
import { Home, IntroModel, SignUpModel } from "./Components/Pages";

function App() {
  const [closeSignup, setCloseSignup] = useState(false);

  const handleCloseSignup = () => {
    setCloseSignup(false);
  };

  const handleOpenSignup = () => {
    setCloseSignup(true);
  };
  return (
    <div className="app">
      {/* <IntroModel open={closeSignup} handleOpen={handleOpenSignup} /> */}
      <SignUpModel
        close={closeSignup}
        handleClose={handleCloseSignup}
        hrefID={"#ref"}
      />
      <NewsAlert />
      <Navbar handleOpen={handleOpenSignup} />
      <Home handleOpen={handleOpenSignup} hrefID="ref" />
      <Footer handleOpen={handleOpenSignup} />
    </div>
  );
}

export default App;