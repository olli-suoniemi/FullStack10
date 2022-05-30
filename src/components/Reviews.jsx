import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  flexContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  flexItemMainContainer: {
    padding: 10,
  },
  flexItemRatingContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    color: theme.colors.buttonBackGround,
    borderColor: theme.colors.buttonBackGround,
    paddingLeft: 12,
    paddingTop: 12,
    marginTop: 5,
    fontWeight: 'bold'
  },
  bigButtonStyleBlue: {
    backgroundColor: theme.colors.buttonBackGround,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center' 
  },
  bigButtonStyleRed: {
    backgroundColor: theme.colors.errorText,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center' 
  },
  flexItemButtonContainer : {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  }
})

const createAlert = (id, deleteReview, refetch) =>
  Alert.alert(
    "Delete review",
    "Are you sure you want to delete this review?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "DELETE", onPress: () => deleteThisReview(id, deleteReview, refetch) }
    ]
  );

const deleteThisReview = async (id, deleteReview, refetch) => {
  await deleteReview({ id })
  refetch({includeReviews: true})
}

const Reviews = ({ item, ownReviews, refetch }) => {
  const [deleteReview] = useDeleteReview()
  const navigate = useNavigate()

  return(
    <View style={{display: 'flex', backgroundColor: 'white'}}>
      <View style={styles.flexContainer}>
        <View>
          <Text style={styles.flexItemRatingContainer}>{item.rating}</Text>
        </View>
        <View style={styles.flexItemMainContainer}>
          <Text fontWeight='bold'>{ownReviews ? item.repository.fullName : item.user.username}</Text>
          <Text>{format(Date.parse(item.createdAt), "dd.MM.yyyy")}</Text>
          <View style={{maxWidth: 800, marginRight: 60, marginTop: 5}}>
            <Text>{item.text}</Text>
          </View>
        </View>
      </View>
      {ownReviews ?
      <View style={styles.flexItemButtonContainer}>
        <Pressable onPress={() => navigate(`/repository/${item.repositoryId}`)}>
          <View style={styles.bigButtonStyleBlue}>
            <Text fontWeight='bold' fontSize='subheading' style={{color: 'white'}}> View repository </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => createAlert(item.id, deleteReview, refetch)}>
          <View style={styles.bigButtonStyleRed}>
            <Text fontWeight='bold' fontSize='subheading' style={{color: 'white'}}> Delete review </Text>
          </View>
        </Pressable>
      </View>

      : 

      null

      }
    </View>
  )
}

export default Reviews