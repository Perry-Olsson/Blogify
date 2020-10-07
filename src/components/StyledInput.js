import styled from 'styled-components';

const StyledInput = styled.input`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.input.background};
  border: solid 1px ${({ theme }) => theme.background};
  transition: background 0.5s linear;
  &:focus,
  &:focus:hover {
    outline: none;
  }
`;

export default StyledInput;
