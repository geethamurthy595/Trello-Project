import React from "react";
import NavBar from "./components/NavBar";
import MsgtoAction from "./components/MsgtoAction";
import Capture from "./components/Capture";
import DoWithTrello from "./components/do_with_trello.jsx";
import Ptccard from "./components/Ptccard.jsx";
import CardSlider from "./components/CardSlider.jsx";
import Footer from "./components/Footer";
import Productivity from "./components/Productivity";
import UniversalFooter from "./components/UniversalFooter.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Capture />
      <Productivity />
      <MsgtoAction />
      <DoWithTrello />
      <CardSlider />
      <Ptccard />
      <Footer />
      <UniversalFooter />
    </>
  );
};

export default App;
