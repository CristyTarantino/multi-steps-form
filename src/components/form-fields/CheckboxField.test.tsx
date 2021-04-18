import React from 'react';
import { render, screen } from '@testing-library/react';
import formik from 'formik'; // package will be auto mocked
import CheckboxField from './CheckboxField';

jest.mock('formik', () => ({
  useField: jest.fn(),
}));

describe('<CheckboxField/>', () => {
  it('renders the input with type checkbox', () => {
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
    const helperMock = {};
    (formik.useField as jest.Mock).mockReturnValue([
      mockField,
      mockMeta,
      helperMock,
    ]);

    const mockProps = {
      ...mockField,
      label: 'Input Description',
      fullWidth: true,
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<CheckboxField {...mockProps} />);
    expect(screen.getByLabelText('Input Description')).toHaveProperty(
      'type',
      'checkbox',
    );
    expect(screen.getByLabelText('Input Description')).toHaveProperty(
      'checked',
      false,
    );
  });

  it('renders the input with description', () => {
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
    const helperMock = {};
    (formik.useField as jest.Mock).mockReturnValue([
      mockField,
      mockMeta,
      helperMock,
    ]);

    const mockProps = {
      ...mockField,
      label: 'Input Description',
      fullWidth: true,
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<CheckboxField {...mockProps} />);
    const checkBoxLabel = screen.getByText(/Input Description/i);
    expect(checkBoxLabel).toBeInTheDocument();
  });

  it('renders the input with checked true', () => {
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
      checked: true,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      multiple: undefined,
      name: 'firstName',
    };
    const helperMock = {};
    (formik.useField as jest.Mock).mockReturnValue([
      mockField,
      mockMeta,
      helperMock,
    ]);

    const mockProps = {
      ...mockField,
      label: 'Input Description',
      fullWidth: true,
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<CheckboxField {...mockProps} />);
    expect(screen.getByLabelText('Input Description')).toHaveProperty(
      'checked',
      true,
    );
  });
});
