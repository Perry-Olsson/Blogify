import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Style = styled(Link)`
  color: ${({ theme }) => theme.navBar.text};
  padding: 0.2em 1em;
  border: solid 1px ${({ theme }) => theme.background};
  border-radius: 3px;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.navBar.text};
    border-color: ${({ theme }) => theme.navBar.border};
    transition: 0.2s;
  }
`;

const StyledLink = ({ children, to }) => {
  return <Style to={to}>{children}</Style>;
};

export default StyledLink;
