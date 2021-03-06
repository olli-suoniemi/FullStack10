import Text from './Text'
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import theme from '../theme';
import { Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
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
    backgroundColor: theme.colors.buttonBackGround,
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
    .min(1, 'Username must be greater or equal to 1')
    .required('Username is required'),
    password: yup
    .string()
    .min(5, 'Password must be greater or equal to 5')
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
          <Text color='button' fontWeight='bold' style={{justifyContent: 'center'}}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const LogInContainer = ({ onSubmit }) => {
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <LogInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };

  return(
    <LogInContainer onSubmit={onSubmit} />
  )
}

export default SignIn