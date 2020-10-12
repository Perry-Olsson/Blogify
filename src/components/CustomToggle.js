import React from 'react'
import OptionsIcon from './optionsIcon/OptionsIcon'

const CustomToggle = React.forwardRef(({ children, onClick, ...restProps }, ref) => {
  return (
  <div ref={ref}>
    <OptionsIcon onClick={(e) => {
        e.preventDefault()
        onClick(e);
      }} 
      {...restProps}
      >
        {children}
    </OptionsIcon>
  </div>
)})
    

export default CustomToggle