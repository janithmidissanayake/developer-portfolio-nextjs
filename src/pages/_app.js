import React from 'react';
import ThemeContextProvider from '../contexts/theme-context';
import '../styles/globals.css';
import Navbar from '../components/navbar/navbar';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
         <Navbar />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;