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
background: ${({ variant }) => variant === 'light' ? '#FFF' : '#363537'};
${Container}:hover & {
  background: ${({ variant }) => variant === 'light' ? '#aaaaaa' : '#555555'}
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

export default OptionsIcon