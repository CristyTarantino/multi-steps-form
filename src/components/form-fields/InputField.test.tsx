import React from 'react';
import { render, screen } from '@testing-library/react';
import formik from 'formik'; // package will be auto mocked
import InputField from './InputField';

jest.mock('formik', () => ({
  useField: jest.fn(),
}));

describe('<TextInput/>', () => {
  it('renders the input with empty value', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'firstName',
    };
    (formik.useField as jest.Mock).mockReturnValue([mockField, mockMeta]);

    const mockProps = { ...mockField, label: 'First Name', fullWidth: true };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<InputField {...mockProps} />);
    expect(screen.getByLabelText('First Name')).toHaveValue('');
  });

  it('renders the input with type text', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'firstName',
    };
    (formik.useField as jest.Mock).mockReturnValue([mockField, mockMeta]);

    const mockProps = { ...mockField, label: 'First Name', fullWidth: true };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<InputField {...mockProps} />);
    expect(screen.getByLabelText('First Name')).toHaveProperty('type', 'text');
  });

  it('renders the input with type password', () => {
    const mockMeta = {
      touched: false,
      error: '',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'firstName',
      type: 'password',
    };
    (formik.useField as jest.Mock).mockReturnValue([mockField, mockMeta]);

    const mockProps = { ...mockField, label: 'First Name', fullWidth: true };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<InputField {...mockProps} />);
    expect(screen.getByLabelText('First Name')).toHaveProperty(
      'type',
      'password',
    );
  });
  it('renders the input with error', () => {
    const mockMeta = {
      touched: true,
      error: 'Error Message',
      initialError: '',
      initialTouched: false,
      initialValue: '',
      value: '',
    };
    const mockField = {
      value: '',
      checked: false,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'firstName',
    };
    (formik.useField as jest.Mock).mockReturnValue([mockField, mockMeta]);

    const mockProps = { ...mockField, label: 'First Name', fullWidth: true };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<InputField {...mockProps} />);
    expect(document.getElementById('firstName-helper-text')).toHaveTextContent(
      'Error Message',
    );
  });
});
