import React from 'react';
import at from 'lodash/at';
import { useField, FieldHookConfig } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

type CheckboxFieldProps = {
  label: string;
  checked: boolean;
};

const CheckboxField: React.FC<
  CheckboxFieldProps & FieldHookConfig<unknown>
> = ({ label, ...rest }): JSX.Element => {
  const [field, meta, helper] = useField(rest);
  const { setValue } = helper;

  const renderHelperText = (): JSX.Element | null => {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }

    return null;
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return (
    <FormControl>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={
          <Checkbox
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            onChange={handleOnChange}
            defaultChecked={rest.checked}
          />
        }
        label={label}
      />
      {renderHelperText()}
    </FormControl>
  );
};

export default CheckboxField;
