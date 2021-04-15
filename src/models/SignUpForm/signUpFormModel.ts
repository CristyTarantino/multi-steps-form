export default {
  formId: 'signUpForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'name*',
      requiredErrorMsg: 'First name is required',
    },
    role: {
      name: 'role',
      label: 'role',
    },
    email: {
      name: 'email',
      label: 'email*',
      requiredErrorMsg: 'Email is required',
    },
    password: {
      name: 'password',
      label: 'password*',
      requiredErrorMsg: 'Password is required',
    },
    useEmailForUpdates: {
      name: 'useEmailForUpdates',
      label: 'Receive updates about the Company product by email',
      checked: true,
    },
    useEmailForCommunication: {
      name: 'useEmailForCommunication',
      label:
        'Receive communication by email for other products created by the Company team',
      checked: false,
    },
  },
};
