import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';
import SignOut from './SignOut';
import SignUp from './SignUp';
import { SingleRepository } from './RepositoryItem';
import ReviewForm from './ReviewForm';
import OwnReviews from './OwnReviews';

import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.tabBackground
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <AppBar/>
      </View>
      <Routes>
        <Route path="/repository/:id" element={<SingleRepository />} exact />
        <Route path="/myReviews" element={<OwnReviews />} exact />
        <Route path="/create" element={<ReviewForm />} exact />
        <Route path="/signUp" element={<SignUp />} exact />
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="signOut" element={<SignOut />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;