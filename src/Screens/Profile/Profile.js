import React from "react";
import { Text, View,Dimensions, TouchableOpacity,Alert, ScrollView } from "react-native";
import { connect } from "react-redux";
import * as userActions from '../../redux/actions/userActions'
import * as ScreenNames from '../../global/screenNames'
import { useNavigation } from "@react-navigation/native";
import  Axios  from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Server } from "../../global";
const Profile=({dispatch,userId})=>{

const navigation=useNavigation()
    const windowHeight = Dimensions.get('window').height;
    const removeIdFromAsyncStorage = async () => {
        try {
          await AsyncStorage.removeItem('userId');
        
        } catch (error) {
          return null;
        }
      };


const clearSession=async()=>{

try {
    let postData = {
      registrationToken: null
    }
    await Axios.put(`${Server.BASE_URL}/users/userId/${userId}`, postData);
    dispatch(userActions.setUserId(null))
    dispatch(userActions.setUserPhoneNumber(null))
    dispatch(userActions.setUserName(null))
    navigation.navigate(ScreenNames.LOGIN_SCREEN)
    await AsyncStorage.removeItem('userId');
        
  } catch (error) {
    console.log("updateUserToken", error.response);
    Alert.alert("Alert", error.message);
  }
}

    return(
        <View style={{marginTop:10,height:windowHeight,backgroundColor:"#fff"}}>
            <Text style={{color:'black'}}>Profile Page</Text>
            <TouchableOpacity onPress={clearSession}>
                <Text>Logout</Text>
            </TouchableOpacity>
            
        
        </View>
    )
}


const mapDispatchToProps=dispatch=>({dispatch})
const mapStateToProps=state=>({userId:state.user.userId})
export default connect(mapStateToProps,mapDispatchToProps)(Profile)