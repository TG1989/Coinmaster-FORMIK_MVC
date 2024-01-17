
import * as yup from 'yup';


const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';


export const schema = yup.object().shape({
  
  email: yup
    .string()
    .email('Please enter a valid email format')
    .required('Required field'),

  
  age: yup
    .number()
    .min(18, "You cannot be younger than 18")
    .max(100, "You cannot be older than 100")
    .integer('Your age must be an integer.')
    .required('Required field'),

  
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    
    .matches(regex, 'Your password is not strong enough')
    .required('Required field'),

 
  confirmPassword: yup
    .string()
    
    .oneOf([yup.ref('password')], 'Your confirmation password is not correct')
    .required('Required field'),
});