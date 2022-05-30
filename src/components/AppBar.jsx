import { StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Tab from './Tab';
import theme from '../theme';
import useMe from '../hooks/useMe';

const HEIGHT = 15
const styles = StyleSheet.create({
  defaultTab: {
    paddingTop: Constants.statusBarHeight + HEIGHT,
    paddingLeft: theme.tabPaddings.left,
    paddingBottom: theme.tabPaddings.bottom,
  },
  lastTab: {
    paddingTop: Constants.statusBarHeight + HEIGHT,
    paddingLeft: theme.tabPaddings.left,
    paddingRight: theme.tabPaddings.right,
    paddingBottom: theme.tabPaddings.bottom
  }
});

const AppBar = () => {
  const { data } = useMe()
  const me = data ? data.me : null
  return (
    <ScrollView horizontal={true}>
      <Tab style={styles.defaultTab} name={'Repositories'}/>
      {me ? 
        <>
          <Tab style={styles.defaultTab} name={'Create a review'} url={'create'}/>
          <Tab style={styles.defaultTab} name={'My reviews'} url={'myReviews'}/>
          <Tab style={styles.lastTab} name={'Sign Out'} url={'signOut'}/>
        </>
        :
        <>
          <Tab style={styles.defaultTab} name={'Sign In'} url={'signIn'}/>
          <Tab style={styles.lastTab} name={'Sign Up'} url={'signUp'}/>
        </>
      }
    </ScrollView>
  )
};

export default AppBar;