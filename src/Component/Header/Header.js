import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Back from '../../assets/svg/backIcon.svg'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../global';
const Header = ({
    name,
    activateLeftIcon = true,
    activateRightIcon = false,
    backgroundColor = true,
   
    onPress = () => { },
    backArrowOnpress,
    rightText,
    rightOnPress,
  
  }) => {
    const navigation = useNavigation();
  
    const goBack = () => navigation.goBack();
  
  
  
    // const onPress = () => {
    //   setModalVisible(!modalVisible);
    // };
  
    // console.warn("backArrowOnpress", typeof backArrowOnpress != "undefined");
  
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: Colors.WHITE },
        ]}>
        {/* header left */}
        <View style={styles.headerLeftContainer}>
  
        {activateLeftIcon ? (
          <TouchableOpacity
            // activeOpacity={Constants.BUTTON_OPACITY}
            onPress={() => { typeof backArrowOnpress != 'undefined' ? backArrowOnpress() : goBack() }}
            style={styles.headerLeft}>
            { <Back />}
          </TouchableOpacity>
        ) : null}
        </View>
  
        {/* header center */}
        <View style={styles.headerCenterContainer}>
          <View style={styles.headerCenter}>
            <Text
              style={[
                styles.headerText,
                { color: backgroundColor ?"black": "white" },
              ]}>
              {name}
            </Text>
          </View>
        </View>
  
        {/* header right */}
        <View style={styles.headerRightContainer}>
  
  
          {/* {activateRightIcon ? (
            <>
              {iconName == 'trash' ? (
                <TouchableResize onPress={onPress} style={styles.headerRight}>
                  <DeleteSVG />
                </TouchableResize>
              ) : (
                <TouchableResize onPress={onPress} style={styles.headerRight}>
                  <EditProfileSvg />
                </TouchableResize>
              )}
            </>
          ) : rightText ? <TouchableResize onPress={rightOnPress} style={styles.headerRight}>
            <Text style={{ color: Colors.PRIMARY, fontFamily: Fonts.BOLD }}>{rightText}</Text>
          </TouchableResize> : null} */}
        </View>
      </View>
    );
  };
  
  export default React.memo(Header);
  const styles = StyleSheet.create({

    
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        top:"7%"
    },

    headerLeftContainer: {
        flex: 1.1,
        // backgroundColor: Colors.PRIMARY
    },

    headerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0

    },

    headerCenterContainer: {
        flex: 6,
        // backgroundColor: Colors.PRIMARY
    },

    headerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerRightContainer: {
        flex: 1,
        // backgroundColor: Colors.WHITE
    },

    headerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
    },

    headerText: {
        fontSize: 16,
        fontWeight:'500',
        color:"#192126"
        
    },

   
});