import Reviews from "./Reviews";
import useMe from "../hooks/useMe";
import { View, Text, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
})

const ItemSeparator = () => 
  <View style={styles.separator} />

const OwnReviews = () => {
  const { data, loading, refetch } = useMe({includeReviews: true})

  const renderItem = ({ item }) => {
    return (
      <Reviews item={item} ownReviews={true} refetch={refetch}/>
    )
  }

  if (loading) {
    return <View><Text>loading...</Text></View>
  }

  let reviewNodes = data.me.reviews
    ? data.me.reviews.edges.map(edge => edge.node)
    : [];

  return(
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  )
}

export default OwnReviews