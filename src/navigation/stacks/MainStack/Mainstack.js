import React from "react";
import Axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ScreenNames} from '../../../global'
import Home from '../../../Screens/Home/Home'
import BottomTab from "../../BottomTab/BottomTab";
import Profile from "../../../Screens/Profile/Profile";
import HotStuffs from "../../../Screens/HotStuffs/HotStuffs";
import SearchScreen from "../../../Screens/WorkOut/SearchScreen";
import TopTab from "../../Toptab/TopTab";
import LoginScreen from "../../../Screens/LoginScreen/LoginScreen";
import OTPScreen from "../../../Screens/OTPScreen/OTPScreen";
import AddProfileDetailScreen from "../../../Screens/AddProfileDetailsScreen/AddProfileDetailScreen";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as UserActions  from '../../../redux/actions/userActions'
import SplashScreen from "../../../Screens/SplashScreen/SplashScreen";
import FirstInitialScreen from "../../../Screens/InitialScreens/FirstInitailScreen";
import SecondInitialScreen from "../../../Screens/InitialScreens/SecondInitialScreen";
import ThirdInitialScreen from "../../../Screens/InitialScreens/ThirdInitialScreen";
const Stack = createNativeStackNavigator();   
const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
}

const Mainstack =({dispatch,userId})=>{
  const loadData = async () => {
    const baseUrl = await Axios.get(`http://live.schnelldev.in:9419/api/baseUrl/hukumRegionTest`)
    const response = await AsyncStorage.getItem("userId")
    if (response === null) {
      setRegionCode(null, baseUrl.data.stagingUrl);
      dispatch(UserActions.setBaseUrl(baseUrl.data.stagingUrl + `/regionCode/${null}`));
    }
    else {
      console.warn(`${baseUrl.data.stagingUrl}/regionCode/${null}/users/${response}`);
      const resp = await Axios.get(`${baseUrl.data.stagingUrl}/regionCode/${null}/users/${response}`);
      const response1 = await Axios.get(`${baseUrl.data.stagingUrl}/regionCode/${resp.data.regionCode}/userAddresses/userId/${response}`);
      setUserToRedux(resp.data, response1.data, baseUrl.data.stagingUrl);
    }
  }
  const setUserToRedux=(userData)=>{

		dispatch(UserActions.setUserPhoneNumber(userData.contactNo));
		dispatch(UserActions.setUserName(userData.name));
		dispatch(UserActions.setUserId(userData.userId));
  }
  React.useEffect(()=>{
  
  
      
      loadData()
    
  },[])
return(
  <NavigationContainer>
  <Stack.Navigator 
  screenOptions={{ headerShown: false }} mode="modal"
  // initialRouteName={ScreenNames.BOTTOM_TAB}
  >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={horizontalAnimation}/>
        <Stack.Screen name={ScreenNames.FIRST_INITIAL_SCREEN} component={FirstInitialScreen} options={horizontalAnimation} />
        <Stack.Screen name={ScreenNames.SECOND_INITIAL_SCREEN} component={SecondInitialScreen} options={horizontalAnimation} />
        <Stack.Screen name={ScreenNames.THIRD_INITIAL_SCREEN} component={ThirdInitialScreen} options={horizontalAnimation}/>
   
    <Stack.Screen name={ScreenNames.HOME} component={Home} options={horizontalAnimation} />
    <Stack.Screen name={ScreenNames.PROFILE} component={Profile} options={horizontalAnimation} />
    <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab}  options={horizontalAnimation}/>
    <Stack.Screen name={ScreenNames.HOT_STUFFS} component={HotStuffs}  />
    <Stack.Screen name={ScreenNames.SEARCH_SCREEN} component={SearchScreen}  />
    <Stack.Screen name={ScreenNames.TOP_TAB} component={TopTab}  />
    <Stack.Screen name={ScreenNames.LOGIN_SCREEN} component={LoginScreen} options={horizontalAnimation}  />
    <Stack.Screen name={ScreenNames.OTP_SCREEN} component={OTPScreen}  />
    <Stack.Screen name={ScreenNames.ADD_PROFILE_DETAILS} component={AddProfileDetailScreen}  />
  </Stack.Navigator>
</NavigationContainer>

)}
const mapDispatchToProps=dispatch=>({dispatch})
const mapStateToProps=state=>({
  userId:state.user.userId,
  contactNo:state.user.contactNo,
  username:state.user.username
})
export default connect(mapStateToProps,mapDispatchToProps)(Mainstack)