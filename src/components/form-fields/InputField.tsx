import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import at from 'lodash/at';
import { TextField } from '@material-ui/core';

const InputField: React.FC<any> = (props): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { errorText, type, ...rest } = props;
  const [field, meta] = useField(props);

  const renderHelperText = (): string | null => {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }

    return null;
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
      type={type || 'text'}
      error={handleError(meta.touched, meta.error)}
      helperText={renderHelperText()}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...field}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
};

export default InputField;
