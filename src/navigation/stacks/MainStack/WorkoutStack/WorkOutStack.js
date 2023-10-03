import React from "react";
import Axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenNames from '../../../../global/screenNames'
import SearchScreen from "../../../../Screens/WorkOut/SearchScreen";

import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();


const WorkOutStack =({dispatch,userId})=>{

return(

  <Stack.Navigator 
  screenOptions={{ headerShown: false }}
  // initialRouteName={ScreenNames.BOTTOM_TAB}
  >
      
  
    <Stack.Screen name={ScreenNames.SEARCH_SCREEN} component={SearchScreen}  />
 
   
  </Stack.Navigator>


)}
const mapDispatchToProps=dispatch=>({dispatch})
const mapStateToProps=state=>({
  userId:state.user.userId,
  contactNo:state.user.contactNo,
  username:state.user.username
})
export default connect(mapStateToProps,mapDispatchToProps)(WorkOutStack)