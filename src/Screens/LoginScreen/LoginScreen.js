import React from 'react';
import {
	ImageBackground,  Text, View, ScrollView,
	Alert, KeyboardAvoidingView, Platform, ActivityIndicator
} from 'react-native'

//global imports
import { styles } from './LoginScreenStyles';
import { Colors, ScreenNames } from '../../global/index';
import { globalStyles } from '../../global/globalStyles';
import * as Services from "./LoginScreenServices"
import FocusAwareStatusBar from '../../Component/FocusAwareStatusBar';
import TouchableResize from '../../Component/TouchableResize/TouchableResize';
import GlobalTextInput from '../../Component/GlobalTextInput/GlobalTextInput';
import { setUserEmail } from '../../redux/actions/userActions';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/userActions'
const renderLoading = () => <ActivityIndicator size='small' color={Colors.WHITE} />;
const LoginScreen = ({ params, navigation ,dispatch}) => {


    const resetStack=CommonActions.reset({
        index:0,
        routes:[{name:ScreenNames.HOME}]
    })
	//states
	
	const [loading, setLoading] = React.useState(false);
	const [secure, setSecure] = React.useState(true);

const [userNameValue,setUserNameValue]=React.useState("")
const [passwordValue,setPasswordValue]=React.useState("")


	const getLoginData = async () => {

		try{
           
setLoading(true)
            let regax = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
          
            if ([userNameValue,passwordValue].every(i=>i?.trim().length>0)) {


              const response=await Services.validateLogin(userNameValue,passwordValue)
              let data=response.data?.message
              console.warn("re",response.data?.message?.hasOwnProperty('data'),data)
if(response.status==200){


if(data?.hasOwnProperty('error')){
    Alert.alert("Alert","Unauthorized user")
    setLoading(false)
}
else if(data?.hasOwnProperty('data')){
    dispatch(UserActions.setUserToken(data?.data?.access_token))
await AsyncStorage.setItem('userLogin',JSON.stringify(true))
await AsyncStorage.setItem('userToken',data?.data?.access_token)
navigation.dispatch(resetStack)
}
}
            }
            else{
                Alert.alert("Alert","Please enter all fields")
                setLoading(false)
            }
        }
	

		
			catch (error) {
				console.log("getLoginData-------error",error);
				setLoading(false)
			}
		}






	return (
		<KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === "ios" ? "padding" : 'null'}>
			<FocusAwareStatusBar isLightBar={false}  isTransparent={true} />
			<ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={{ flexGrow: 1 }}>

				<ImageBackground source={require('../../assets/images/ss1.png')} imageStyle={{ height: "100%", width: "100%" }} style={styles.mainContainer}>

					<View style={styles.Card}>
						<View style={styles.titleView}>
							<Text style={styles.title2}>Assignment</Text>{
								Platform.OS == "ios"
								&&
								<View style={{ height: 2, backgroundColor: Colors.CAMBOGE, width: 115, marginBottom: -6 }}></View>}
						</View>
						{/* <View styl<e={styles.subCard}> */}
						<View style={{flex:1,alignItems:'center'}}>

							
                            <GlobalTextInput 
                            setValue={setUserNameValue}
                            value={userNameValue}
                            placeHolderColor={Colors.BLACK}
                            placeHolder={"Enter Your Email"}/>
                              

                                
						<GlobalTextInput 
                            setValue={setPasswordValue}
                            value={passwordValue}
                           setIsSecure={setSecure}
                            placeHolderColor={Colors.BLACK}
                            placeHolder={"Enter password"}
                            isSecure={secure}/>

                            </View>
						{/* </View> */}
                        
						

						<View >
                            <TouchableResize 
                            style={globalStyles.button}
                            loading={loading}
                            onPress={getLoginData}
                            name={"Login"}
                            />

							
                                 
						</View>
					</View>
				</ImageBackground>
			</ScrollView>
		</KeyboardAvoidingView >
	);
};
let mapDispatchToProps = dispatch => ({ dispatch });

export default connect(null, mapDispatchToProps)(React.memo(LoginScreen));