import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.50s linear;
}

.navBar {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.navBar.text};
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus{
  box-shadow: none;
  border: 1px solid inherit;
  -webkit-text-fill-color: ${({ theme }) => theme.text};
  -webkit-box-shadow: 0 0 0px 1000px inherit inset;
  transition: background-color 5000s ease-in-out 0s;
}
`;
