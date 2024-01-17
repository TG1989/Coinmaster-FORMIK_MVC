import { useFormik } from 'formik';
import { schema } from '../schema';
import LoginPageView from '../views/LoginPageView';

const LoginPageController = () => {
  
  const formik = useFormik({
 
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },

    
    validationSchema: schema,

    
    onSubmit: (values, actions) => {
      console.log(actions);
    },
  });

  return <LoginPageView formik={formik} />;
};

export default LoginPageController;