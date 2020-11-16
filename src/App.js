import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import { lightTheme } from './theme/themes';
import { AvatarProvider } from './components/AvatarContext';
import Logo from './components/Logo';
import AvatarContent from './components/AvatarContent';


function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <AvatarProvider>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>archaeopteryx</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" /> 
          </Helmet>
          <GlobalStyle />
          <Logo />
          <AvatarContent />
        </div>
      </AvatarProvider>
    </ThemeProvider>
  );
}

export default App;
