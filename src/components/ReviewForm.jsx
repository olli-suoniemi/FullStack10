import Text from './Text'
import FormikTextInput from './FormikTextInput';
import useReview from '../hooks/useReview';
import theme from '../theme';

import { useNavigate } from 'react-router-native';
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
    backgroundColor: theme.colors.buttonBackGround,
    borderRadius: 5,
    alignItems: 'center',
    padding: 10
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Repository owner's username is required"),
  repositoryName: yup
    .string()
    .required("Repository's name is required"),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required("Rating is a required number between 0 and 100"),
  text: yup
    .string()
});

const ReviewFormView = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexMainContainer}>
        <View style={{marginVertical: 10}}>
          <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        </View>
        <View style={{marginBottom: 10}}>
          <FormikTextInput name="repositoryName" placeholder="Repository name" />
        </View>
        <View style={{marginVertical: 10}}>
          <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
        </View>
        <View style={{marginBottom: 10}}>
          <FormikTextInput name="text" placeholder="Review" multiline={true} />
        </View>
        <Pressable onPress={onSubmit} style={styles.buttonStyle}>
          <Text color='button' fontWeight='bold' style={{justifyContent: 'center'}}>Create a review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const ReviewContainer = ({ onSubmit }) => {
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewFormView onSubmit={handleSubmit} />}
    </Formik>
  )
}

const ReviewForm = () => {
  const [createReview] = useReview();
  const navigate = useNavigate()
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await createReview({ ownerName, repositoryName, rating, text });
      if(data) {
        navigate(`/repository/${data.createReview.repositoryId}`)
      }
    } catch (e) {
      console.log(e);
    }
  };

  return(
    <ReviewContainer onSubmit={onSubmit} />
  )
}

export default ReviewForm