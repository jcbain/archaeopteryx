import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import { lightTheme } from './theme/themes';
import { AvatarProvider } from './components/AvatarContext';
import Logo from './components/Logo';
import AvatarContent from './components/AvatarContent';

const Wrapper = styled.div`
  padding-left: ${({ theme }) => theme.paddingHorizontalMobile};
  padding-right: ${({ theme }) => theme.paddingHorizontalMobile};
  padding-top: 5vh;
`;

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <AvatarProvider>
        <Wrapper className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>archaeopteryx</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" /> 
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" /> 
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet" /> 
          </Helmet>
          <GlobalStyle />
          <Logo />
          <AvatarContent />
        </Wrapper>
      </AvatarProvider>
    </ThemeProvider>
  );
}

export default App;
