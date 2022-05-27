import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.tab,
    color: theme.colors.textTabHeading,
    fontWeight: theme.fontWeights.bold
  }
});

const Tab = (props) => {
  return (
    <View style={props.style}>
      <Link to={`/${props.url}`}><Text style={styles.text}>{props.name}</Text></Link>
    </View>
  )
};

export default Tab;