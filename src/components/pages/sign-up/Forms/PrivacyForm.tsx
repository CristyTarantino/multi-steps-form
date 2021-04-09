import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CheckboxField } from 'components/form-fields';

type PrivacyFormProps = {
  formField: {
    useEmailForUpdates: {
      name: string;
      label: string;
    };
    useEmailForCommunication: {
      name: string;
      label: string;
    };
  };
};

const PrivacyForm: React.FC<PrivacyFormProps> = ({
  formField,
}): JSX.Element => {
  const { useEmailForUpdates, useEmailForCommunication } = formField;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Privacy
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CheckboxField
            name={useEmailForUpdates.name}
            label={useEmailForUpdates.label}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckboxField
            name={useEmailForCommunication.name}
            label={useEmailForCommunication.label}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PrivacyForm;
