import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import { lightTheme } from './theme/themes';
import useJobData from './hooks/useJobData';
// import { AvatarProvider } from './components/AvatarContext';
import Logo from './components/Logo';
import Avatars from './components/Avatars';


function App() {
  const { loaded, data } = useJobData();


  return (
    <ThemeProvider theme={lightTheme}>
      {/* <AvatarProvider> */}
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>archaeopteryx</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" /> 
          </Helmet>
          <GlobalStyle />
          <Logo />
          {loaded && <Avatars data={data}/>}
        </div>
      {/* </AvatarProvider> */}
    </ThemeProvider>
  );
}

export default App;
