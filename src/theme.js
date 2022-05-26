import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      textTabHeading: 'white',
      primary: '#0366d6',
      background: '#24292e',
      button: 'white'
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
    paddings: {
      top: 40,
      left: 20,
      bottom: 30
    }
};
  
export default theme;