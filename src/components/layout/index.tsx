import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from 'components/header';
import Footer from 'components/footer';

import { theme, useStyle } from './styles';

type Props = {
  children: React.ReactChild;
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
