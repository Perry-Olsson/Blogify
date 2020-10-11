import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width ${props => props.iconSize};
height: ${props => props.iconSize};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
cursor: pointer;
`

const Dot = styled.div`
width: ${props => props.dotSize};
height: ${props => props.dotSize};
border-radius: 50%;
margin: 1px 0;
background: ${({ variant, theme }) => setBackground(variant, theme)};
${Container}:hover & {
  background: ${({ variant, theme }) => setHover(variant, theme)};
}`


const OptionsIcon = (props) => {
  let iconSize = null;
  let dotSize = null;
  switch (props.size) {
    case 'sm': iconSize = '2em'; dotSize = '6px'; break;
    case 'md': iconSize = '2.5em'; dotSize ='8px'; break;
    case 'lg': iconSize = '3em'; dotSize = '10px'; break;
    default: iconSize = '2em';
  }



  return (
  <Container {...props} iconSize={iconSize}>
    <Dot {...props} dotSize={dotSize} />
    <Dot {...props} dotSize={dotSize} />
    <Dot {...props} dotSize={dotSize} />
  </Container>
)
  }

  const setBackground = (variant, theme) => {
    switch(variant){
      case 'light': return '#FFF'; 
      case 'dark': return '#363537';
      case 'theme': return theme.text; 
      default: return '#FFF';
    }
  };
  
  const setHover = (variant, theme) => {
    switch (variant) {
      case 'light': return '#aaaaaa';
      case 'dark': return '#555555';
      case 'theme': return theme.hover;
      default: return '#AAA'
    }
  }

export default OptionsIcon