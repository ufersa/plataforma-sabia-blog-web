import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
  
	*:focus {
		outline: 0;
    box-shadow: 0px 0px 4px 2px hsla(29, 94%, 62%);
	}

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    :hover {
      cursor: pointer;
    }
	}

	ul {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyles;
