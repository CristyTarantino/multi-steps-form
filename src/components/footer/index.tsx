import React from 'react';
import { Link, Typography } from '@material-ui/core/';

const Footer: React.FC = (): JSX.Element => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://google.co.uk/">
      Company Name
    </Link>
    {` ${new Date().getFullYear()}`}
  </Typography>
);

export default Footer;
