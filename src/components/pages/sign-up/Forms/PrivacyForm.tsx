import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CheckboxField } from 'components/form-fields';

type PrivacyFormProps = {
  formField: {
    useEmailForUpdates: {
      name: string;
      label: string;
      checked: boolean;
    };
    useEmailForCommunication: {
      name: string;
      label: string;
      checked: boolean;
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
            checked={useEmailForUpdates.checked}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckboxField
            name={useEmailForCommunication.name}
            label={useEmailForCommunication.label}
            checked={useEmailForCommunication.checked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PrivacyForm;
