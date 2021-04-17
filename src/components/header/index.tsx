import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import useStyles from './styles';

type HeaderProps = {
  themeState: boolean;
  onThemeChange: () => void;
};

const Header: React.FC<HeaderProps> = ({
  themeState,
  onThemeChange,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Company Name
        </Typography>
        <Switch checked={themeState} onChange={onThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
