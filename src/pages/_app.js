import React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeContextProvider from '../contexts/theme-context';
import '../styles/globals.css';

const muiTheme = createTheme();

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeContextProvider>
        <Head>
          <title>Portfolio of ABU SAID</title>
        </Head>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ThemeProvider>
  );
};

export default App;