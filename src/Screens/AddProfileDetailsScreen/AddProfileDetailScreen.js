import { Alert, StyleSheet, Text, View ,} from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../Component/FocusAwareStatusBar'
import { Constants, Fonts,Server,Colors, ScreenNames } from '../../global'
import { connect } from 'react-redux'
import GlobalTextInput from '../../Component/GlobalTextInput/GlobalTextInput'
import Header from '../../Component/Header/Header'
import TouchableResize from '../../Component/TouchableResize/TouchableResize'
import { globalStyles } from '../../global/globalStyles'

const AddProfileDetailScreen = ({ dispatch, userEmail ,userId, route:{params:{userName}},navigation,userToken}) => {

	const [ModalOption, setModalOption] = React.useState(false)
	const [isimageLoad, setisimageLoad] = React.useState({ uri: `${Server.BASE_URL}/users/${userId}/userImage?${Date.now()}` })
	const EmailuserRef = React.useRef(userEmail);
  const [loading,setLoading]=React.useState(false)
const [userNames,setUserName]=React.useState("")
const [userAge,setUserAge]=React.useState("")
const [userGender,setUserGender]=React.useState("")
const [userCompanyName,setUserCompanyName]=React.useState("")
	const [userDetails,setUserDetails]=React.useState({})
const getUserDetailsByUserName=async()=>{
  try {
  await fetch(`${Server.BASE_URL}assignment.API.specific_user.get_specific?name1=${userName}`, {
    method: 'GET',
    headers: {
      'Authorization':  `${userToken}`,
      'Content-Type': 'application/json', 
    },
   
  }).then(async(res)=>{
  if (res.ok) {
    const data = await res.json(); 
    console.warn("Response Data:", data?.message?.data?.specific_user[0]);
    setUserDetails(data?.message?.data?.specific_user[0])
  }
  else{
    console.log("hnkjhkj")
  }
  }).catch(e=>console.log("ssss",e));

  } catch (error) {
    console.log('getUserDetailsByUserName------------>error',error)
  }
}

React.useEffect(()=>{
  getUserDetailsByUserName()
},[])

const editUserData=async()=>{
  try {
    setLoading(true)
    let postData={
      "name1": userNames?.trim().length>0? userNames:userDetails?.name1,
      "age": userAge?.trim().length>0? userAge:userDetails["age"],
      "gender": userGender?.trim().length>0? userGender:userDetails?.gender,
      "company_name":userCompanyName?.trim().length>0? userCompanyName:userDetails?.company_name,
    }
    await fetch(`${Server.BASE_URL_WITHOUT_METHOD}resource/Assignment/${userName}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token eb33bed41ebc137:348f33df4a5e962`,
        'Content-Type': 'application/json', 
      },
      body: postData,
    }).then(async(res)=>{
    if (res.ok) {
      const data = await res.json(); 
      Alert.alert("Alert","Data updated sucessfully")
      console.warn("Response Data:", data);
      navigation.replace(ScreenNames.BOTTOM_TAB)
    }
    else{
      Alert.alert("Alert","Problem occured")
      setLoading(false)
    }
    }).catch(e=>{
      
      setLoading(false)
      console.log("ssss",e)});
  } catch (error) {
    console.log("editProfile---error",error)
    setLoading(false)
  }
}

  return (
    <View style={{ flex: 1,backgroundColor:Colors.WHITE }}>
      <FocusAwareStatusBar isTopSpace={false} isLightBar={false} isTransparent={false}/>

<Header name={"Edit Profile"} />
<View style={{marginTop:40,marginHorizontal:20}}>

<GlobalTextInput
value={userDetails?.name1}
style={styles.textInputStyle}
setValue={setUserName}
/>
<GlobalTextInput
value={userDetails?.age?.toString()}
style={styles.textInputStyle}
isNum={true}
setValue={setUserAge}
/>
<GlobalTextInput
value={userDetails?.gender}
style={styles.textInputStyle}
setValue={setUserGender}
/>
<GlobalTextInput
value={userDetails?.company_name}
style={styles.textInputStyle}
setValue={setUserCompanyName}
/>
</View>

    <TouchableResize 
    style={[globalStyles.button,{width:Constants.CHANGE_BY_MOBILE_DPI(150),alignSelf:"center"}]}
    name={"Update"}
    loading={loading}
    onPress={editUserData}
    />

    </View>
  )
}
const mapStateToProps = state => {
  return {
    userId: state.user.userId,
    phonenumber: state.user.userPhoneNo,
    username: state.user.name,
    userEmail: state.user.email,
    userToken: state.user.userToken,
  }
};

let mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AddProfileDetailScreen);

const styles = StyleSheet.create({

textInputStyle:{
  fontSize:Constants.getActualFontSize(17)
}
})