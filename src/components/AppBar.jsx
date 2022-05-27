import { StyleSheet, ScrollView } from 'react-native';
import Tab from './Tab';
import theme from '../theme';
import useMe from '../hooks/useMe';

const styles = StyleSheet.create({
  defaultTab: {
    paddingTop: theme.paddings.top,
    paddingLeft: theme.paddings.left,
    paddingBottom: theme.paddings.bottom
  },
  lastTab: {
    paddingTop: theme.paddings.top,
    paddingLeft: theme.paddings.left,
    paddingRight: theme.paddings.right,
    paddingBottom: theme.paddings.bottom
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
          <Tab style={styles.lastTab} name={'Sign Out'} url={'signOut'}/>
        </>
        :
        <>
          <Tab style={styles.lastTab} name={'Sign In'} url={'signIn'}/>
        </>
      }
    </ScrollView>
  )
};

export default AppBar;