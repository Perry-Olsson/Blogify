// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import { useInterval } from './hooks'

// const size = '30px'

// const circleSize = '30px'

// const Style = styled.div`
// position: absolute;
// top: 50%;
// bottom: 50%;
// width: ${size};
// height: ${size};
// border: solid 3px;
// border-radius: 50%;`

// const Circle = styled.div`
// position: absolute;
// background-color: green;
// width: ${circleSize};
// height: ${circleSize};
// `

// const Dot = styled.div`
// position: absolute;
// top: 310px;
// left: 1440px;
// background-color: white;
// width: 3px;
// height: 3px;
// border-radius: 50%;`

// const CenterCircle = styled.div`
// position: absolute;
// top: 325px;
// left: 1440px;
// background-color: white;
// width: 3px;
// height: 3px;
// border-radius: 50%;
// `
// //circle center = left 970, top 270
//     // const icon = document.getElementsByClassName("myIcon")
//     // const circle = document.getElementById('circle')
//     // console.log(icon[0].offsetLeft)
//     // console.log(icon[0].offsetTop)
//     // circle.style.left = `${icon[0].offsetLeft - 15}px`

//     // console.log(dot, dot[0].offsetLeft, dot[0].offsetTop)

// const calculateCircleCoords = () => {

// }
// const TestComponent = () => {
//   const [pos, setPos] = useState([1440, 310])
//   const [done, setDone] = useState(false)

//   useInterval(() => {
//     if (pos[0] === 1700) setDone(true)
//     setPos([pos[0] + 1, pos[1]])
//   }, done ? null : 10)

//   return (
//       <div style={{ display: 'flex', justifyContent: 'center'}}>
//         {/* <Style className="myIcon"></Style>
//         <Circle id="circle" /> */}
//         <Dot style={{left: pos[0]}} className='myDot'/>
//         <CenterCircle />
//         {pos[0]}
//       </div>
//       )
// }

// export default TestComponent;