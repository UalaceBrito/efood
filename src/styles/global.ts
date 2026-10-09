import { createGlobalStyle } from 'styled-components'

export const colors = {
  accent: '#E66767',
  cream: '#FFF8F2',
  peach: '#FFEBD9',
  white: '#FFFFFF',
}

export const breakpoints = { tablet: '1024px', mobile: '768px' }

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.cream};
    color: ${colors.accent};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`
