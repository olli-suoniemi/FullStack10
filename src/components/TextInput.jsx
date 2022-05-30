import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';
const styles = StyleSheet.create({
  defaultStyle: {  
    borderWidth: 1,
    padding: 10,
    borderColor: theme.colors.inputBorder
  },
  errorStyle: {
    borderWidth: 1,
    padding: 10,
    borderColor: theme.colors.errorText
  }
})

const TextInput = ({ error, ...props }) => {
  let style = styles.defaultStyle
  if(error) {
    style = styles.errorStyle
  }
  return <NativeTextInput style={style} {...props} />;
};

export default TextInput;