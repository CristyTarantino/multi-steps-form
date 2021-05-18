import React from 'react';
import { useField } from 'formik';
import at from 'lodash/at';
import { TextField } from '@material-ui/core';

type InputFieldProps = {
  fullWidth: boolean;
  label: string;
  name: string;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = (props): JSX.Element => {
  const { type, ...rest } = props;
  const [field, meta] = useField(props);

  const renderHelperText = (): string | undefined => {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }

    return undefined;
  };

  const handleError = (
    touched: string | boolean,
    error: string | undefined,
  ): boolean | undefined => {
    if (touched && touched !== '' && error && error !== '') {
      return true;
    }

    return undefined;
  };

  return (
    <TextField
      id={field.name}
      type={type || 'text'}
      error={handleError(meta.touched, meta.error)}
      helperText={renderHelperText()}
      {...field}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

export default InputField;
