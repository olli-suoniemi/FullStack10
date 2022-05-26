import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defaultStyle: {  
    borderWidth: 1,
    padding: 10,
    borderColor: '#abc0d4',
  },
  errorStyle: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'red',
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