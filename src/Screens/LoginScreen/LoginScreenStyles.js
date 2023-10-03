import {
    Platform,
    StyleSheet
  } from 'react-native';
  import { Colors, Constants, Fonts } from '../../global';
  
  export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.WHITE,
      justifyContent: 'flex-end'
    },
    subtitle: {
      fontFamily: Fonts.MEDIUM,
      fontSize: Fonts.SIZE_12,
      textAlign: "center",
    },
    text2: {
      fontFamily: Fonts.SEMIBOLD,
      fontSize: Fonts.SIZE_16,
      color: Colors.BLACK_C16,
      opacity: 0.4
    },
    countryCode: {
      fontFamily: Fonts.SEMIBOLD,
      fontSize: Fonts.SIZE_18,
      color: Colors.BLACK_C16,
      marginTop: 15,
      marginBottom: 15,
    },
    Card: {
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      paddingTop: 20,
      paddingHorizontal: 20,
      height
      :Constants.CHANGE_BY_MOBILE_DPI(400),
    
      backgroundColor: Colors.WHITE,
      // marginTop:-45
    },
    title2: {
      fontFamily:'times',
      fontSize: Constants.getActualFontSize(20),
      color: Colors.BLACK_C16,
      borderBottomWidth: Platform.OS == "android" ? 2 : 0,
      height: 25,
      marginBottom: -4,
    
      textAlignVertical: 'center',
      borderBottomColor: Colors.CAMBOGE,
    },
    titleView: {
      height: 42,
      backgroundColor: Colors.WHITE,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 15,
      marginBottom: 50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
  
      elevation: 1,
    },
    subCard: {
    //   flexDirection: 'row',
      marginHorizontal: 10,
      marginBottom: 115
    },
    title: {
      fontSize: 34,
      marginTop: 30,
      fontFamily: Fonts.MEDIUM,
      color: Colors.CAMBOGE,
      textAlign: 'center',
      marginBottom: 16
    },
    decription: {
      fontSize: Fonts.SIZE_17,
      fontFamily: Fonts.MEDIUM,
      color: Colors.SECONDARY,
      textAlign: 'center',
      marginBottom: 40
    },
    textInput: {
      fontFamily: Fonts.SEMIBOLD,
      color: Colors.BLACK_C16,
      fontSize: Fonts.SIZE_18,
      height: Constants.SCREEN_HEIGHT / 17,
      width: '80%',
    },
    loginName: {
      // flex: 1,
      // paddingTop: 80
    },
    logoStyle: {
      height: Constants.SCREEN_HEIGHT / 1.5,
      width: Constants.SCREEN_WIDTH,
      backgroundColor: "#ec9900",
  
    },
    text: {
      fontSize: Fonts.SIZE_15,
      fontFamily: Fonts.MEDIUM,
      color: Colors.OUTER_SPACE
    },
    signUp: {
      flexDirection: 'row',
      justifyContent: 'center',
    }
  
  });