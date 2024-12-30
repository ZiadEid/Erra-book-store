import * as yup from 'yup';

// first name, middle name, and last name
const fullNameRegex = /^([a-zA-Z\u0600-\u06FF]+(?:\s[a-zA-Z\u0600-\u06FF]+){2})$/;

const egyptionNumber = /^01[0125][0-9]{8}$/;


export const orderSchema = yup.object().shape({
  customerName: yup
    .string()
    .required()
    .matches(fullNameRegex, { message: 'write first, middel and last name' }),
  customerEmail: yup
    .string()
    .email()
    .required(),
  customerPhone: yup
    .number()
    .required(),
  customerAddress: yup
    .string()
    .min(7)
    .required(),
  notes: yup
    .string()
    .min(3)
})
