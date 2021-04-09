import React from 'react';
import { Link, Typography } from '@material-ui/core/';

const Footer: React.FC = (): JSX.Element => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://tray.io/">
      Tray.io
    </Link>
    {` ${new Date().getFullYear()}`}
  </Typography>
);

export default Footer;
