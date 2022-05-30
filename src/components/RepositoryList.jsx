import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native';
import { useState } from 'react'
import { useDebounce } from 'use-debounce';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import { Searchbar} from 'react-native-paper'
import Text from './Text';
import theme from '../theme';

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

const SearchBar = ({ filter, setFilter }) => {
  const onChangeSearch = query => setFilter(query);
  return(
    <Searchbar
      style={{margin: 10, backgroundColor: theme.colors.flexBoxBackgroundColor}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={filter}
    />
  )
}

const RepositoryListHeader = ({ orderType, setOrderType, filter, setFilter }) => {
  return(
    <>
      <SearchBar filter={filter} setFilter={setFilter} />
      <Picker
        style={{marginHorizontal: 10, marginBottom: 10, backgroundColor: theme.colors.flexBoxBackgroundColor}}
        selectedValue={orderType}
        onValueChange={(itemValue) => setOrderType(itemValue)}>
        <Picker.Item label="Latest repositories" value={'CREATED_AT'} />
        <Picker.Item label="Highest rated repositories" value={'DESCENDING'} />
        <Picker.Item label="Lowest rated repositories" value={'ASCENDING'} />
      </Picker>
    </>
  )
}

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { orderType, setOrderType, filter, setFilter } = this.props
    
    return(
      <RepositoryListHeader 
        orderType={orderType} 
        setOrderType={setOrderType}
        filter={filter} 
        setFilter={setFilter}
      />
    )
  }
  
  render() { 
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map(edge => edge.node)
      : [];
    
    return (
      <>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          ListHeaderComponent={this.renderHeader}
          
        />
      </>
    );
  }
}

const RepositoryList = () => {
  const [ orderType, setOrderType ] = useState('CREATED_AT')
  const [ filter, setFilter ] = useState('')
  const [ value ] = useDebounce(filter, 1000)

  const repositories = useRepositories(orderType, value);

  if (repositories.loading) {
    return <View><Text>loading repositories...</Text></View>
  }

  return <RepositoryListContainer 
    repositories={repositories.data.repositories} 
    orderType={orderType} 
    setOrderType={setOrderType}
    filter={filter} 
    setFilter={setFilter}
  />;
};

export default RepositoryList;