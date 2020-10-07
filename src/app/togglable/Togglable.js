import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../../components/StyledButton';

const Togglable = props => {
  const [visible, setVisible] = useState(props.visible);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <div style={showWhenVisible}>
        {React.cloneElement(props.children, { toggleVisibility })}
        <StyledButton
          onClick={toggleVisibility}
          variant="outline-secondary"
          size={props.size || 'md'}
        >
          cancel
        </StyledButton>
      </div>
      <div style={hideWhenVisible} className="togglableContent">
        <StyledButton
          onClick={toggleVisibility}
          variant="outline-dark"
          size={props.size || 'md'}
        >
          {props.buttonLabel}
        </StyledButton>
      </div>
    </>
  );
};

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

Togglable.displayName = 'Togglable';

export default Togglable;
