import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Button)`
color: ${({ theme }) => theme.body};
background: ${({ theme }) => theme.button.background};
border-color: ${({ theme }) => theme.button.background};
&:hover {
  background: ${({ theme }) => theme.button.hover};
  border-color: ${({ theme }) => theme.button.hover};
  color: ${({ theme }) => theme.body};
}`;

export const StyledButtonOutline = styled(Button)`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border-color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.text};
  }
`;

export const StyledButtonMinimal = styled(Button)`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border-color: ${({ theme }) => theme.body};
  &:hover {
    border-color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.body};
  }`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.input.background};
  border: solid 1px ${({ theme }) => theme.background};
  &:focus,
  &:focus:hover {
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.navBar.text};
  padding: 0.4em 1em;
  border: solid 1px ${({ theme }) => theme.background};
  border-radius: 3px;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.navBar.text};
    border-color: ${({ theme }) => theme.navBar.border};
    transition: 0.3s;
  }
`;

