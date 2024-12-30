import * as yup from 'yup';

// first name, middle name, and last name
const fullNameRegex = /^([a-zA-Z\u0600-\u06FF]+(?:\s[a-zA-Z\u0600-\u06FF]+){2})$/;


export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(fullNameRegex, { message: 'write first, middel and last name' }),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .required()
    .required(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], "You must write the same password")
    .required()
})
