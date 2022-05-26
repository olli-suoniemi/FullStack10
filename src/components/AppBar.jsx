import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.paddings.top,
    paddingLeft: theme.paddings.left,
    paddingBottom: theme.paddings.bottom
  },
  text: {
    fontSize: theme.fontSizes.tab,
    color: theme.colors.textTabHeading,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBar = (props) => {
  return (
    <View style={styles.container}>
      <Link to={`/${props.url}`}><Text style={styles.text}>{props.name}</Text></Link>
    </View>
  )
};

export default AppBar;