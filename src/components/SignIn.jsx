import Text from './Text'
import FormikTextInput from './FormikTextInput';

import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    padding: 10,
  },
  flexMainContainer: {
    flexDirection: 'column',
  },
  buttonStyle: {
    backgroundColor: '#2468c7',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must be greater or equal to 4')
    .required('Username is required'),
    password: yup
    .string()
    .min(4, 'Password must be greater or equal to 4')
    .required('Password is required'),
});

const LogInForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexMainContainer}>
        <View style={{marginVertical: 10}}>
          <FormikTextInput name="username" placeholder="username" />
        </View>
        <View style={{marginBottom: 10}}>
          <FormikTextInput name="password" placeholder="password" secureTextEntry={true}/>
        </View>
        <Pressable onPress={onSubmit} style={styles.buttonStyle}>
          <Text color='button' style={{justifyContent: 'center'}}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <LogInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn