import React from "react";
import Axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenNames from '../../../../global/screenNames'
import Home from '../../../../Screens/Home/Home'
import FirstInitialScreen from "../../../../Screens/InitialScreens/FirstInitailScreen";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();


const DashBoardStack =({dispatch,userId})=>{

return(

  <Stack.Navigator 
  screenOptions={{ headerShown: false }}
  // initialRouteName={ScreenNames.BOTTOM_TAB}
  >
      
  
    <Stack.Screen name={ScreenNames.HOME} component={Home}  />
 
   
  </Stack.Navigator>


)}
const mapDispatchToProps=dispatch=>({dispatch})
const mapStateToProps=state=>({
  userId:state.user.userId,
  contactNo:state.user.contactNo,
  username:state.user.username
})
export default connect(mapStateToProps,mapDispatchToProps)(DashBoardStack)