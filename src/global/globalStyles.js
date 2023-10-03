import {
  Platform,
  StyleSheet
} from 'react-native';
import { Colors, Fonts, Constants } from '../global';

export const globalStyles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: Colors.CAMBOGE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: Fonts.SIZE_20,
    fontFamily: Fonts.BOLD,
    color: Colors.BLACK_C16,
    textAlign: "center",
    width: "100%",
    marginBottom: Platform.OS == "android" ? -2 : 0
  }
});