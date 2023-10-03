import React from 'react'
import { ScreenNames } from '../../global';
import { CommonActions } from '@react-navigation/native';
import { View,Animated} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIconSVG from '../../assets/svg/assAppIcon.svg'
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/userActions'
function  SplashScreen({navigation,dispatch}) {

    const resetStackAndGoToLogin = CommonActions.reset({
		index: 0,
		routes: [{ name: ScreenNames.LOGIN_SCREEN}],
	});   
	const resetStackAndGoToUser = CommonActions.reset({
		index: 0,
		routes: [{ name: ScreenNames.HOME}],
	});   

	const loadData = async () => {
		
		const response = await AsyncStorage.getItem("userId")
        // Alert.alert("alert",response.toString())
		// const androidVersion = await getAppstoreAppMetadata("com.hukum.app")
		// console.log(androidVersion);
		// inAppUpdates.checkNeedsUpdate().then((result) => {
		// 	console.log(result);
		// 	if (result.shouldUpdate) {
		// 		let updateOptions: StartUpdateOptions = {};
		// 		if (Platform.OS === 'android') {
		// 			// android only, on iOS the user will be promped to go to your app store page
		// 			updateOptions = {
		// 				updateType: IAUUpdateKind.IMMEDIATE,
		// 			};
		// 		}
		// 		inAppUpdates.startUpdate(updateOptions); // https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/master/src/types.ts#L78
		// 	}
		// });
		// InAppUpdate.checkUpdate()
		// console.log(DeviceInfo.getVersion());

		//if (response === null) {
		//	navigation.dispatch(resetStackAndGoToUser)
	//	}
		//else {
		//	const resp = await axios.get(`${baseUrl.data.stagingUrl}/regionCode/${null}/users/${response}`);
			//if (resp.data.regionCode == null) {
			//	navigation.dispatch(resetStackAndGoToUser)
			//} else {
			//	navigation.dispatch(resetStackAndGoToUser)
//console.log("test==========>",`${baseUrl.data.stagingUrl}`)
		//	}
	//	}
	navigation.dispatch(resetStackAndGoToUser)
	
}
const animatedValue=React.useRef(new Animated.Value(0)).current
const startUpdate=()=>{
	Animated.timing(animatedValue,{
		toValue:1,
		useNativeDriver:false,
	duration:1500

		

	}).start(async({finished})=>{
		if (finished) {

			let asyncId=await AsyncStorage.getItem('userLogin')
			let userToken=await AsyncStorage.getItem('userToken')

			if(asyncId !==null && userToken !==null){

dispatch(UserActions.setUserToken(userToken))
	navigation.dispatch(resetStackAndGoToUser)

			}
			else{
				navigation.dispatch(resetStackAndGoToLogin )
			}
		}
	})
}

const opacity=animatedValue.interpolate({
	inputRange:[0,1],
	outputRange:[0,2.5],
	
})
    React.useEffect(()=>{
        
            
            startUpdate()
       
    },[])

  return (
 <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
	< Animated.View style={{opacity:opacity}}>
    <AppIconSVG/>
	</ Animated.View >
 </View>


  )
}

let mapDispatchToProps = dispatch => ({ dispatch });

export default connect(null, mapDispatchToProps)(React.memo(SplashScreen));

