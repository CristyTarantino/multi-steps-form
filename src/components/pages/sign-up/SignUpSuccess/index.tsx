import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Done from '@material-ui/icons/Done';

const SignUpSuccess: React.FC = (): JSX.Element => (
  <>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Done fontSize="large" style={{ color: green[500] }} />
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant="subtitle1">
        Please verify your email address.
      </Typography>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant="subtitle1">
        You should have received an email from us already!
      </Typography>
    </Box>
  </>
);

export default SignUpSuccess;
