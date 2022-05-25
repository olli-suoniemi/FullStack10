import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

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
    backgroundColor: '#abc'
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
    backgroundColor: '#2468c7',
    borderRadius: 5,
    color: 'white',
  }
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
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
    </View>
  );
};

export default RepositoryItem;