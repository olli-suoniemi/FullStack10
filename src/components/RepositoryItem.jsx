import { View, Image, StyleSheet, Pressable, Linking, FlatList } from 'react-native';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import Reviews from './Reviews';
import theme from '../theme';
import { useParams } from 'react-router-native';
import useRepositoryItem from '../hooks/useRepositoryItem';
import useReviews from '../hooks/useReviews';

const formatToKs = (number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
 } else {
    return number
 }
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: theme.colors.flexBoxBackgroundColor,
    marginBottom: 5
  },
  flexItemMainContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  flexItemMainInfo: {
    maxWidth: 300
  },
  flexItemStatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  flexItemStatItem: {
    alignItems: 'center'
  }, 
  flexItemImage: {
    borderRadius: 3,
    width: 50,
    height: 50,
    marginRight: 15,
    marginTop: 5
  },
  buttonStyle: {
    backgroundColor: theme.colors.buttonBackGround,
    borderRadius: 5,
    color: 'white',
  },
  bigButtonStyle: {
    backgroundColor: theme.colors.buttonBackGround,
    borderRadius: 5,
    color: 'white',
    padding: 20,
    alignItems: 'center' 
  },
  separator: {
    height: 5,
  },
})

const ItemSeparator = () => 
  <View style={styles.separator} />

const renderItem = ({ item }) => {
  return (
    <Reviews item={item} />
  )
}

export const SingleRepository = () => {
  const { id } = useParams()
  const singleRepoInfo  = useRepositoryItem(id);
  const { reviews, loadingReviews, fetchMore } = useReviews({id: id, first: 3})
  
  const onEndReach = () => {
    fetchMore()
  };

  if (singleRepoInfo.loading || loadingReviews) {
    return <View><Text>loading repository...</Text></View>
  }

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  return(
    <FlatList
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      ListHeaderComponent={() => <RepositoryItem singleRepo={true} item={singleRepoInfo.data.repository} />}
    />
  )
}

const RepositoryItem = ({ item, singleRepo }) => {
  const navigate = useNavigate()
  
  return (
    <View style={styles.flexContainer} testID="repositoryItem">
      { singleRepo ? 
        <>
          <View style={styles.flexItemMainContainer}>
            <Image style={styles.flexItemImage} source={{uri: item.ownerAvatarUrl}}/>
            <View style={styles.flexItemMainInfo}>
              <Text fontWeight='bold' style={{marginBottom: 5}}>{item.fullName}</Text>  
              <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5}}>
                <Text>{item.description}</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text style={styles.buttonStyle}> {item.language} </Text>
              </View>
            </View>
          </View>
          <View style={styles.flexItemStatsContainer}>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.stargazersCount}`)}</Text>
              <Text style={{paddingTop: 5}}>Stars</Text>
            </View>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.forksCount}`)}</Text>
              <Text style={{paddingTop: 5}}>Forks</Text>
            </View>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.reviewCount}`)}</Text>
              <Text style={{paddingTop: 5}}>Reviews</Text>
            </View>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.ratingAverage}`)}</Text>
              <Text style={{paddingTop: 5}}>Rating</Text>
            </View>
          </View>
          <Pressable style={{marginTop:20, marginHorizontal: 20}} onPress={() => Linking.openURL(`${item.url}`)}>
            <View style={styles.bigButtonStyle}>
              <Text fontWeight='bold' fontSize='subheading' style={{color: 'white'}}> Open in GitHub </Text>
            </View>
          </Pressable>
        </>

        :

        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <View style={styles.flexItemMainContainer}>
            <Image style={styles.flexItemImage} source={{uri: item.ownerAvatarUrl}}/>
            <View style={styles.flexItemMainInfo}>
              <Text fontWeight='bold' style={{marginBottom: 5}}>{item.fullName}</Text>  
              <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5}}>
                <Text>{item.description}</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text style={styles.buttonStyle}> {item.language} </Text>
              </View>
            </View>
          </View>
          <View style={styles.flexItemStatsContainer}>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.stargazersCount}`)}</Text>
              <Text style={{paddingTop: 5}}>Stars</Text>
            </View>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.forksCount}`)}</Text>
              <Text style={{paddingTop: 5}}>Forks</Text>
            </View>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.reviewCount}`)}</Text>
              <Text style={{paddingTop: 5}}>Reviews</Text>
            </View>
            <View style={styles.flexItemStatItem}>
              <Text fontWeight='bold'>{formatToKs(`${item.ratingAverage}`)}</Text>
              <Text style={{paddingTop: 5}}>Rating</Text>
            </View>
          </View>
        </Pressable>
      }
    </View>
  );
};

export default RepositoryItem;