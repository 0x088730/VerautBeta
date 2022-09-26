import { css } from "emotion";
import "./style.scss";
export const colors = {
  black: "#000",
  white: "#fff",
  lightGray: "#ccc",
  lighterGray: "#ddd",
  text: "black",
  textDark: "#ddd",
  error: "#500",
  errorLight: "#682A2F",
  success: "#050",
  successLight: "#246E2F",
  background: "#151922",
  primary: "#27333f",
  primaryDark: "#1E2631",
  primaryTrans: "rgba(39, 51, 63, 0.5)",
  secondary: "#b5d2ea",
  secondaryDark: "#556472",
  secondaryDarker: "#3D4854",
  secondaryDarkest: "#3C4856",
  secondaryTrans: "rgba(181, 210, 234, 0.3)",
  darken: "rgba(0, 0, 0, .3)",
  transparent: "rgba(0, 0, 0, 0)",
  resumePrimary: "#373d48",
  resumeSecondary: "#252932"
};

export const breakpoints = {
  large: "840px",
  medium: "700px",
  small: "580px",
  extraSmall: "450px"
};

export const styles = {
  buttonPrimary: css`
    display: inline-block;
    border: 2px solid ${colors.secondaryTrans};
    background-color: ${colors.primaryTrans};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    color: ${colors.text};
    &:hover,
    &:active {
      background-color: ${colors.secondaryDarker};
      color: ${colors.white};
    }
    &:active {
      border-color: ${colors.secondary};
      box-shadow: inset 0 0 8px ${colors.secondary};
    }
    &:disabled {
      cursor: not-allowed;
      background-color: ${colors.secondaryDarker};
    }
  `,
  blankButton: css`
    padding: 0;
    background-color: ${colors.background};
    border: none;
  `,
  family: css`
    'Sui Generis'!important;
  `
};
