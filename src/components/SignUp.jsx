import Text from './Text'
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';
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
  passwordConfirm: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be greater or equal to 1')
    .max(30, 'Username must be smaller or equal to 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be greater or equal to 5')
    .max(50, 'Username must be smaller or equal to 50')
    .required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirm is required')
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexMainContainer}>
        <View style={{marginVertical: 10}}>
          <FormikTextInput name="username" placeholder="username" />
        </View>
        <View style={{marginBottom: 10}}>
          <FormikTextInput name="password" placeholder="password" secureTextEntry={true}/>
        </View>
        <View style={{marginBottom: 10}}>
          <FormikTextInput name="passwordConfirm" placeholder="password confirmation" secureTextEntry={true}/>
        </View>
        <Pressable onPress={onSubmit} style={styles.buttonStyle}>
          <Text color='button' fontWeight='bold' style={{justifyContent: 'center'}}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };

  return(
    <SignUpContainer onSubmit={onSubmit} />
  )
}

export default SignUp