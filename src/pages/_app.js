import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeContextProvider from '../contexts/theme-context';
import '../styles/globals.css';
import Navbar from '../components/navbar/navbar';

const muiTheme = createTheme();

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ThemeProvider>
  );
};

export default App;