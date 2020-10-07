import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.text};
  }
`;

export default StyledButton;
