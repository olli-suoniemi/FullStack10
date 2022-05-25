import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar name={'Repositories'}/>
      <RepositoryList/>
    </View>
  );
};

export default Main;