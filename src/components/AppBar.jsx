import { View, StyleSheet, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.paddings.top,
    paddingLeft: theme.paddings.left,
    paddingBottom: theme.paddings.bottom,
    backgroundColor: theme.colors.background
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
        <Text style={styles.text}>
            {props.name}
        </Text>
    </View>
  )
};

export default AppBar;