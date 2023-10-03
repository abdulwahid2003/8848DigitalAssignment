import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenNames from '../../global/screenNames'
import { connect } from 'react-redux';
// import { createStackNavigator } from '@react-navigation/stack'
import Profile from "../../Screens/Profile/Profile";
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';

const Stack =   createNativeStackNavigator();


const ProfileStack =({userId,contactNo})=>{
return(

  <Stack.Navigator 
  screenOptions={{ headerShown: false }}
  initialRouteName={contactNo !== null && userId !== null? ScreenNames.PROFILE  : ScreenNames.LOGIN_SCREEN}>
    
    
    <Stack.Screen name={ScreenNames.PROFILE} component={Profile}  />
    <Stack.Screen name={ScreenNames.LOGIN_SCREEN} component={LoginScreen}  />
    
  </Stack.Navigator>


)}

const mapStateToProps=(state)=>({
    userId:state.user.userId,
    contactNo:state.user.userPhoneNo
})
const mapDispatchToProps=dispatch=>({dispatch})
export default connect(mapStateToProps,mapDispatchToProps)(ProfileStack)