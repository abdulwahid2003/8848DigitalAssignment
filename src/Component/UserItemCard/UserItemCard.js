import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,

} from 'react-native';
import { Platform, StyleSheet } from 'react-native';


import { CHANGE_BY_MOBILE_DPI,} from '../../global/constants';

//global imports
import { Colors, Constants, Fonts, ScreenNames, Server } from '../../global/index';

//SVG

import { SCREEN_WIDTH } from '../../global/constants';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const UserItemCard = ({index ,userName,designation,address,companyName}) => {


  const [line, setline] = React.useState(null);

  
const images=[

    require('../../assets/images/Avatar.png'),
    require('../../assets/images/profile.jpg'),
]
 

const navigation=useNavigation()

const goToUserDetailPage=()=>{
    navigation.navigate(ScreenNames.ADD_PROFILE_DETAILS,{userName:userName})
}


  return (
    <TouchableOpacity
    onPress={goToUserDetailPage}
    >
      <View style={{
        width: Constants.SCREEN_WIDTH - 40,
        height: 100,
        // marginLeft: 20,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: Colors.CAMBOGE,
        borderWidth: 1,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        marginTop: 10,
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,alignSelf:'center'
      }}>
        <View style={styles.Restaurantcard}>
          <View style={{ flexDirection: "row", }}>

            <View style={styles.imageposition}>
          
              
              <Image 
              style={styles.imagesize}
              source={images[index%images.length]}
                 />
                 
            
            </View>


            <View style={styles.textposition}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between", width: SCREEN_WIDTH - 155 }}>
                <View style={{ width: SCREEN_WIDTH - 240, marginBottom: 0 }}>

                  <Text
                    style={[styles.fonttitle, {
                      color: Colors.BLACK ,fontStyle:"italic",fontFamily: 'Cursive'
                    }]} numberOfLines={2}>
               {userName}
                  </Text>
                </View>


              </View>
             
              <TouchableOpacity style={{ marginTop: 12 }}>
                <View style={{ width: SCREEN_WIDTH - 223, flexDirection: "row", justifyContent: 'space-between', marginTop: -10 }}>
                  <Text numberOfLines={2} style={[styles.fontdetail, {
                    color: "#747474"

                  }]}
                    onTextLayout={({ nativeEvent: { lines } }) => setline(lines.length)}
                  >{address}</Text>
                  <Text style={[styles.fontdetail, { position: "absolute", bottom: 0, right: -40, color: "#31afe5"  }]}>{ ""}</Text>
                </View>
              </TouchableOpacity>
              <View style={[styles.price, { justifyContent: "space-between", marginTop: line >= 2 ? -10 : 0, width: SCREEN_WIDTH - 150 }]}>
                <Text style={[styles.fontoffer, { paddingTop: 8, color: Colors.SECONDARY }]} numberOfLines={1}>
                {designation} at {companyName}
                </Text>
              

              </View>


            </View>
          </View>


        </View>


      </View>
     
    </TouchableOpacity>
  );
};



const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};
export default connect(null, mapDispatchToProps)(React.memo(UserItemCard));
export const styles = StyleSheet.create({
    card: {
  
      backgroundColor: Colors.WHITE,
      marginVertical: 10,
      padding: 15,
      flexDirection: "row",
      flex: 1,
      marginHorizontal: 20,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 13,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
  
      elevation: 2,
    },
    IconBorder: {
      borderWidth: 2,
      borderColor: 'green',
      height: 12,
      width: 12,
      justifyContent: "center",
      alignItems: "center",
      position: 'absolute',
      top: 8,
      right: 8
    },
    IconItem: {
      height: 5,
      width: 5,
      borderRadius: 2.5,
      backgroundColor: 'green'
    },
    overlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: Colors.CAMBOGE + '33',
      width: '100%',
      height: '100%',
      borderRadius: 15
    },
    detail: {
      flexGrow: 5
    },
    dishName: {
      fontSize: Fonts.SIZE_14,
      fontFamily: Fonts.BOLD,
      color: Colors.WHITE
    },
    add: {
      borderRadius: 10,
      borderColor: Colors.SECONDARY,
      borderWidth: 1.5,
      height: 30,
      width: 74,
      marginTop: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    customizable: {
      fontSize: 7,
      fontFamily: Fonts.MEDIUM,
      color: Colors.PRIMARY,
  
    },
    customizableposition: {
      width: 65,
      // backgroundColor: "red",
      alignItems: "center",
      // justifyContent: "center",
      // marginRight: 20
    },
    price: {
      fontSize: Fonts.SIZE_12,
      fontFamily: Fonts.MEDIUM,
      color: Colors.GRAY_DARK,
      justifyContent: "center"
  
    },
    text1: {
      backgroundColor: Colors.PRIMARY + '26',
      paddingHorizontal: 5,
      paddingVertical: 2
    },
    editCountity: {
      borderRadius: 4,
      borderColor: Colors.GRAY_DARK,
      borderWidth: 1,
      height: 25,
      width: 65,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row"
    },
    Restaurantcard: {
      flexDirection: "column",
      flex: 1,
      justifyContent: "flex-start",
      borderRadius: 10,
      paddingTop: 13,
      paddingBottom: 15,
      paddingLeft: 13
    },
    imageposition: {
      marginRight: 15,
      borderRadius: 10,
      overflow: "hidden",
      height: 76,
      width: 76
      // backgroundColor: "red"
    },
    imagesize: {
      height: 76,
      width: 76,
      borderRadius: 10,
      // marginTop: 8,
    },
    textposition: {
      // flexDirection:"column",
      // flexWrap: "wrap"
      marginTop: -5,
      width: SCREEN_WIDTH - 150
    },
    fonttitle: {
      color: Colors.BLACKS,
      fontFamily: Fonts.SEMIBOLD,
      fontSize: Fonts.SIZE_16,
      marginTop: 5,
      lineHeight: 18,
    },
    fontdetail: {
      color: "#747474",
      fontSize: Fonts.SIZE_11,
      fontFamily: Fonts.SEMIBOLD,
      paddingRight: 10
  
    },
    fontoffer: {
      color: Colors.SECONDARY,
      fontFamily:"times",
      // fontSize: 11,
      fontSize: Fonts.SIZE_14,
      // width: 200
    },
    rightArrow: {
      marginTop: SCREEN_WIDTH > 375 ? 4 : 7,
      width: SCREEN_WIDTH > 375 ? 25 : 20,
      height: SCREEN_WIDTH > 375 ? 25 : 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      backgroundColor: Colors.CAMBOGE,
      marginRight: 20
    },
    rating: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    ratefont: {
      fontSize: 12,
      fontFamily: Fonts.MEDIUM,
      color: Colors.OUTER_SPACE,
      // top: -8,
      // left: 3
    },
    price: {
      // height: SCREEN_WIDTH > 375 ? 20 : 45,
      // marginTop: 5,
      borderRadius: 3,
      // backgroundColor: "red",
      width: SCREEN_WIDTH > 375 ? 63 : 93,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#8a8a8a"
    },
    Quqntitystyle: {
      flexDirection: 'row',
      height: 30,
      width: 74,
      borderWidth: 1.5,
      borderRadius: 10,
      borderColor: "#18ab41",
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    fontoperator1: {
      fontSize: 32,
      color: '#18ab41',
      marginTop: Platform.OS == "ios" ? -6 : 0,
      // marginBottom: 13,
      fontFamily: Fonts.MEDIUM,
  
    },
    fontsize1: {
      fontSize: 14,
      color: '#18ab41',
      fontFamily: Fonts.BOLD
    },
    fontoperator: {
      fontSize: 18,
      color: '#18ab41',
      marginBottom: 2,
    },
    numberbg: {
      height: 23,
      width: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    blurView: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      backgroundColor: Colors.PLATINUM + "aa",
      borderRadius: 10,
    },
    unavailableCon: {
      height: 15,
      width: CHANGE_BY_MOBILE_DPI(60),
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.DARK_PASTEL_RED,
      flexDirection: 'row',
      zIndex: 1,
      position: 'absolute',
      alignSelf: 'center',
      // left: CHANGE_BY_MOBILE_DPI(5),
      bottom: CHANGE_BY_MOBILE_DPI(6)
    },
    unavailableText: {
      fontFamily: Fonts.REGULAR,
      fontSize: 8,
      color: Colors.WHITE,
      marginLeft: 3,
    }
  })