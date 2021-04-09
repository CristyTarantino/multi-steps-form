import * as Yup from 'yup';
import signUpFormModel from './signUpFormModel';

const {
  formField: { firstName, email, password },
} = signUpFormModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
  }),
];
