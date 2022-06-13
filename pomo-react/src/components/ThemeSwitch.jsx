import { useState } from "react";

// image asset
import lightBulb from "../assets/cuteBulb.png";

export default function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState("cute");

  const themes = {
    cute: {
      navBar: "#ddbbd5",
      navMainLink: "#000000", // black
      navOtherLink: "rgba(0,0,0,.55)", // light grey
      backgroundColor: "#feded7",
      loginButton: "#453750",
      registerButtonColor: "#4D90CC",
      progressBarColor: "#3e98c7",
      textColor: "#000000", // black
      glow: "none",
      lightsOut: "none",
    },
    dark: {
      navBar: "#151010",
      navMainLink: "#FFFFFF", // white
      navOtherLink: "#FFFFFF", // light grey
      backgroundColor: "#302A2A",
      loginButton: "#453750",
      registerButtonColor: "#4D90CC",
      progressBarColor: "#FFFFFF", // white
      textColor: "#FFFFFF", // white
      glow: "drop-shadow(0px 0px 3px pink) brightness(375%)",
      lightsOut: "saturate(40%) brightness(30%)",
    },
  };

  const theme = themes[currentTheme];

  return (
    <>
      <style>
        {` :root {

        --navBar: ${theme.navBar}; 
        --navMainLink:${theme.navMainLink};
        --navOtherLink:${theme.navOtherLink};
        --backgroundColor: ${theme.backgroundColor};
        --loginButton:${theme.loginButton};
        --registerButtonColor: ${theme.registerButtonColor};
        --progressBarColor: ${theme.progressBarColor};
        --textColor: ${theme.textColor};
        --glow: ${theme.glow};
        --lightsOut: ${theme.lightsOut};

        }

        .light-bulb {
          filter: var(--glow);
          transition: 1000ms;
        }

      `}
      </style>
      <div
        onClick={() => {
          currentTheme === "cute"
            ? setCurrentTheme("dark")
            : setCurrentTheme("cute");
        }}
      >
        <img alt="lightBulb" className="light-bulb" src={lightBulb}></img>
      </div>
    </>
  );
}
