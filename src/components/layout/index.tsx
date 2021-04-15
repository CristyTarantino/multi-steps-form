import React, { useState, useEffect } from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  ThemeProvider,
  responsiveFontSizes,
  createMuiTheme,
} from '@material-ui/core/styles';

import Header from 'components/header';
import Footer from 'components/footer';

import useStyle from './styles';

type Props = {
  children: React.ReactChild;
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const themePallette = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const theme = responsiveFontSizes(themePallette);
  const classes = useStyle(theme);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  useEffect(() => setDarkState(prefersDarkMode), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header themeState={darkState} onThemeChange={handleThemeChange} />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
