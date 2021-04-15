import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from 'components/form-fields';

type UserFormProps = {
  formField: {
    firstName: {
      name: string;
      label: string;
    };
    role: {
      name: string;
      label: string;
    };
    email: {
      name: string;
      label: string;
    };
    password: {
      name: string;
      label: string;
    };
  };
};

const UserForm: React.FC<UserFormProps> = ({ formField }): JSX.Element => {
  const { firstName, role, email, password } = formField;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        User
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={role.name} label={role.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={password.name}
            label={password.label}
            type="password"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserForm;
