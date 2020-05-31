import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const themes = {
  light: {
    colors: {
      primary: "#667eea",
      primaryDark: "#5a67d8",
      primaryText: "#2d3748",
      secondaryText: "#718096",
      controlBorder: "#718096",
      lightBackground: "#edf2f7",
      negative: "#EF5753",
      white: "#FFF",
      black: "#000",
    },
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.2s;
    box-sizing: border-box;    
  }
`;

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Theme;
