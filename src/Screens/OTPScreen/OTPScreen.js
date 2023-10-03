import { ActivityIndicator, Alert, Keyboard, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import FocusAwareStatusBar from '../../Component/FocusAwareStatusBar'
import OTPTextInput from 'react-native-otp-textinput';
import { Colors, Constants, ScreenNames, Server } from '../../global';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux';
import * as UserActions from '../../redux/actions/userActions'
import  Axios  from 'axios';
import { BASE_URL } from '../../global/server';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIconSVG from '../../assets/svg/assAppIcon.svg'
import EyeSVG from '../../assets/svg/eye.svg'
import { SCREEN_HEIGHT } from '../../global/constants';

const OTPScreen = ({dispatch, } ) => {

    const renderLoading = () => <ActivityIndicator size='small' color={Colors.WHITE} />;
    const [hidePassword,setHidePassword]=React.useState(false)
    const toggleHide=()=>setHidePassword(!hidePassword)
    
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const otpInput = useRef(null);
    const navigation =useNavigation();

	const resetStack = CommonActions.reset({
		index: 0,
		routes: [{ name: ScreenNames.BOTTOM_TAB }],
	});

   
    
    const setUserToRedux = async (userData, userAddress) => {
        console.log("====Code reach 6",userData,userAddress )

		var pkg = require('../../../package.json')
		let deviceName = await DeviceInfo.getDeviceName()
		const data = {
			"deviceName": deviceName,
			"currentAppVersion": pkg.version,
			"platForm": Platform.OS == "android" ? "android" : "ios"
		}
        console.log("====Code reach 7",data,userAddress )

		const res = await Axios.put(`${BASE_URL}/users/${userData.userId}/updateExtraFields`, data)
        console.log("====Code reach 8",data,`${BASE_URL}/users/${userData.userId}/updateExtraFields` )

		dispatch(UserActions.setUserPhoneNumber(userData.contactNo));
		dispatch(UserActions.setUserId(userData.userId));
		dispatch(UserActions.setUserAddress(userAddress));
		dispatch(UserActions.setUserName(userData.name));
		dispatch(UserActions.setUserEmail(userData.email));
		dispatch(UserActions.setDetailImage(userData.image));
		setLoading(false);
		if (userData.name) {
            console.log("====Code reach 9",userData.name )

			navigation.dispatch(resetStack);
		} else {
            console.log("====Code reach 10",userData.name )

			navigation.dispatch(    resetStack);
		}
	}
    
    
    
    const setIdToLocalStorage = async (userId, data) => {
        try {
            console.log("====Code reach 3")

            await AsyncStorage.setItem('userId', userId.toString());
            const response = await Axios.get(`${Server.BASE_URL}/userAddresses/userId/${userId}`);
            console.log("====Code reach 4" ,response.data ,userId)

            console.warn("data.regionCode", data.regionCode);
            setUserToRedux(data, response.data);
            console.log("====Code reach 5",data )

        } catch (error) {
            setLoading(false);
            Alert.alert('Warning2!', error.message);

        }
    };


const signIn=()=>{

}

    return (
        <View style={{ flex: 1,backgroundColor:Colors.PURPLE,}}>
            <FocusAwareStatusBar isTransparent={true}isLightBar={true}/>
          <TouchableOpacity onPress={signIn} style={{marginTop:SCREEN_HEIGHT/8,width:200,backgroundColor:Colors.BLACK2,alignSelf:"center",alignItems:"center"}}>
            <Text style={{color:"#fff"}}>jj</Text>
          </TouchableOpacity>
        </View>



    )
}



const styles = StyleSheet.create({


})
const mapStateToProps=(state)=>({
    state: state,
    userId: state.user.userId,
    contactNo: state.user.contactNo,
})

const mapDispatchToProps=dispatch=>({dispatch})
export default connect(mapStateToProps,mapDispatchToProps)(OTPScreen)
