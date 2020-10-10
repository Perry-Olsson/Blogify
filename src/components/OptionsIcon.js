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
background: ${({ theme }) => theme.text};
${Container}:hover & {
  background: ${({ theme }) => theme.hover}
}`

const OptionsIcon = ({style, size}) => {
  let iconSize = null;
  let dotSize = null;
  switch (size) {
    case 'sm': iconSize = '2em'; dotSize = '6px'; break;
    case 'md': iconSize = '2.5em'; dotSize ='8px'; break;
    case 'lg': iconSize = '3em'; dotSize = '10px'; break;
    default: iconSize = '2em';
  }



  return (
  <Container style={{...style}} iconSize={iconSize}>
    <Dot dotSize={dotSize} />
    <Dot dotSize={dotSize} />
    <Dot dotSize={dotSize} />
  </Container>
)
  }

export default OptionsIcon