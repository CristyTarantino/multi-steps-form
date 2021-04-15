import signUpFormModel from './signUpFormModel';

const {
  formField: {
    firstName,
    role,
    email,
    password,
    useEmailForUpdates,
    useEmailForCommunication,
  },
} = signUpFormModel;

export default {
  [firstName.name]: '',
  [role.name]: '',
  [email.name]: '',
  [password.name]: '',
  [useEmailForUpdates.name]: true,
  [useEmailForCommunication.name]: false,
};
