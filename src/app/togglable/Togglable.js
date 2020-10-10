import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButtonOutline } from '../../components/styledComponents';

const Togglable = props => {
  const [visible, setVisible] = useState(props.visible);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <div style={showWhenVisible}>
        {React.cloneElement(props.children, { toggleVisibility })}
        <StyledButtonOutline
          onClick={toggleVisibility}
          variant="outline-secondary"
          size={props.size || 'md'}
        >
          cancel
        </StyledButtonOutline>
      </div>
      <div style={hideWhenVisible} className="togglableContent">
        <StyledButtonOutline
          onClick={toggleVisibility}
          variant="outline-dark"
          size={props.size || 'md'}
        >
          {props.buttonLabel}
        </StyledButtonOutline>
      </div>
    </>
  );
};

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

Togglable.displayName = 'Togglable';

export default Togglable;
