import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';

import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Route, Routes, Navigate, Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.background
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ScrollView horizontal={true}>
          <AppBar name={'Repositories'}/>
          <AppBar name={'Sign In'} url={'signIn'}/>
        </ScrollView>
      </View>
      <Routes>
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;