import * as Yup from 'yup';
import signUpFormModel from './signUpFormModel';

const {
  formField: { firstName, email, password },
} = signUpFormModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string()
      .required(`${password.requiredErrorMsg}`)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{10,}$/,
        'Password must have at least 10 characters, one number, one uppercase and one lowercase character',
      ),
  }),
];
