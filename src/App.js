import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle'
import { lightTheme } from './theme/themes'
import Logo from './components/Logo';
import Grabbers from './components/Grabbers';


function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => setData(res.data))
      .catch(err => err)
  }, [])

  console.log(data)

  return (
    <ThemeProvider theme={lightTheme} >
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>archaeopteryx</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" /> 
        </Helmet>
        <GlobalStyle />
        <Logo />
        <Grabbers data={data}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
