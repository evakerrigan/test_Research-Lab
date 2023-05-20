// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ThemeProvider, createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontSize: 12,
  },
  palette: {
    primary: {
      main: '#0298A9',
      light: '#A8D3D6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#86BD24',
      light: '#CFDEAE',
      contrastText: '#fff',
    },
    info: {
      main: '#414549',
      light: '#B9B9B7',
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 1440,
      sm: 1440,
      md: 1440,
      lg: 1440,
      xl: 1440,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>,
)
