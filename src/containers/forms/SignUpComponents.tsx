import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput, CheckBox } from '../../components/form';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const SignUpComponents = () => {
  const initialValues = {
    firstName2: '',
    lastName: '',
    email: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <Form>
        <TextInput
          id='firstName2'
          label='First Name'
          name='firstName'
          type='text'
          placeholder='Jane'
        />
        <CheckBox name='acceptedTerms' id='sign-in'>
          i accept
        </CheckBox>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default SignUpComponents;
