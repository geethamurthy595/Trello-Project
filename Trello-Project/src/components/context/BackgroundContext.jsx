// src/components/context/BackgroundContext.jsx
import React, { createContext, useContext, useState } from "react";
import defaultBackground from "../../assets/myboardbg.svg"; // initial image

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState({
    type: "image",
    value: defaultBackground,
  });
  const [showChangeBackground, setShowChangeBackground] = useState(false);

  return (
    <BackgroundContext.Provider
      value={{
        background,
        setBackground,
        showChangeBackground,
        setShowChangeBackground,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
