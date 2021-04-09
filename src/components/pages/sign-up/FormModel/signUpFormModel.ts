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
      requiredErrorMsg: 'email is required',
    },
    password: {
      name: 'password',
      label: 'password*',
      requiredErrorMsg: 'password is required',
    },
    useEmailForUpdates: {
      name: 'useEmailForUpdates',
      label: 'Receive updates about Tray.io product by email',
      checked: true,
    },
    useEmailForCommunication: {
      name: 'useEmailForCommunication',
      label:
        'Receive communication by email for other products created by the Tray.io team',
    },
  },
};
