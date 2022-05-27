import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => 
    <View style={styles.separator} />

const renderItem = ({ item }) => {
    return (
        <RepositoryItem item={item} />
    )
}

const RepositoryList = () => {
  const { data, loading } = useRepositories();

  if (loading) {
    return <View><Text>loading...</Text></View>
  }

  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;