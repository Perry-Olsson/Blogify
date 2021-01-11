import React from "react";
import { getLocalTheme } from "../../utils/misc";
import styled from "styled-components";
import "./optionsIcon.css";

const Container = styled.div`
width ${props => props.iconSize};
height: ${props => props.iconSize};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
cursor: pointer;
`;


const Dot = styled.div`
width: ${props => props.dotSize};
height: ${props => props.dotSize};
border-radius: 50%;
margin: 1px 0;
background: ${({ className, theme }) => setBackground(className, theme)};
}`;


const OptionsIcon = (props) => {
  let iconSize = null;
  let dotSize = null;
  switch (props.size) {
  case "sm": iconSize = "2em"; dotSize = "6px"; break;
  case "md": iconSize = "2.5em"; dotSize ="8px"; break;
  case "lg": iconSize = "3em"; dotSize = "10px"; break;
  default: iconSize = "2em";
  }


  let theme = getLocalTheme();
  if (props.variant) theme = props.variant;

  return (
    <Container {...props} className={`${props.className || ""} ${theme}Container`}iconSize={iconSize}>
      <Dot className={theme} dotSize={dotSize} />
      <Dot className={theme} dotSize={dotSize} />
      <Dot className={theme} dotSize={dotSize} />
    </Container>
  );
};

const setBackground = (variant, theme) => {
  if (variant === "dark") return "#FFF";
  else if (variant === "light") return "#363537";
  else return theme.text;
};

export default OptionsIcon;