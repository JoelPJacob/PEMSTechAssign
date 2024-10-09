import { Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Constants {
  width = deviceWidth;
  height = deviceHeight;

  getHeight(percentage) {
    return deviceHeight * (percentage / 100);
  }
  getWidth(percentage) {
    return deviceWidth * (percentage / 100);
  }

  // Colors
  transparentColor = 'transparent';
  black = '#000000';
  white = '#FFFFFF'
  blue = "#4169E1"
  buttonColor = "#1F51FF"

}

export default new Constants();
