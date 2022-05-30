import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      textTabHeading: 'white',
      primary: '#0366d6',
      tabBackground: '#24292e',
      buttonBackGround: '#2468c7',
      buttonText: 'white',
      errorText: '#d73a4a',
      background: '#ececec',
      flexBoxBackgroundColor: '#abc',
      inputBorder: '#abc0d4'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      tab: 18
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System'
      })
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    tabPaddings: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 30
    }
};
  
export default theme;