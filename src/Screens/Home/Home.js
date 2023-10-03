import React from "react";
import { Text, View, StyleSheet, FlatList, RefreshControl, Alert } from "react-native";
import {Colors, Constants, ScreenNames, Server,} from '../../global'
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserItemCard from "../../Component/UserItemCard/UserItemCard";
import FocusAwareStatusBar from "../../Component/FocusAwareStatusBar";
import Header from "../../Component/Header/Header";
import Notificationvg from '../../assets/svg/n.svg'
import TouchableResize from "../../Component/TouchableResize/TouchableResize";
import { CommonActions } from "@react-navigation/native";
import { globalStyles } from "../../global/globalStyles";


const Home = ({userId,contactNo, userToken,navigation}) => {
 const [allUsersData,setAllUsersData]=React.useState([])
 const [refreshing,setRefreshing]=React.useState(false)
 const [loading,setLoading]=React.useState(false)
  const getUserId=async()=>{
try{
  const response = await AsyncStorage.getItem("userId")
console.log("response----",response)
}
catch(error){
  Alert.alert("error")
}
  }

const getAllUsers=async()=>{
  try {
  
    await fetch( `${Server.BASE_URL}assignment.API.all_users_api.get_user`, {
      method: 'GET',
      headers: {
        'Authorization': `${userToken}`,
        'Content-Type': 'application/json', 
      },
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json(); 
          console.warn("Response Data:", data?.message?.data);
          setAllUsersData(data?.message?.data)
        } else {
          console.warn("API request failed with status:", res.status);
        }
      })
      .catch((e) => {
        console.warn("Error:", e);
      });
  } catch (error) {
    console.log("getAllUsers--------->error",error)
  }
}
const pullToRefresh=()=>{
  setRefreshing(true)
getAllUsers()
setTimeout(() => {
  setRefreshing(false)
}, 1600);
}
const renderUsers=({item,index})=>{
  return(
    <UserItemCard 
    index={index}
    userName={item?.name1}
    address={item?.address}
    designation={item?.designation}
    companyName={item?.company_name}
    />
  )
}
 React.useEffect(()=>{

  let interval=setInterval(() => {
    getAllUsers()
  }, 1000);
return ()=>{clearInterval(interval)}
 },[])

 const resetStackAndGoToLogin = CommonActions.reset({
  index: 0,
  routes: [{ name: ScreenNames.LOGIN_SCREEN}],
});   
 const doLogout=async()=>{
try {
  setLoading(true)
  
  setTimeout(async() => {
    await AsyncStorage.removeItem('userLogin')
  await AsyncStorage.removeItem('userToken')
  navigation.dispatch(resetStackAndGoToLogin)
    setLoading(false)
  }, 2000);
} catch (error) {
  Alert.alert("Alert","error in logout")
  console.log("logout error",error)
}
 }
  return (
<View style={{flex:1,backgroundColor:Colors.WHITE}}>
  <FocusAwareStatusBar isLightBar={false}  isTransparent={false}/>
  <Header activateLeftIcon={false} />
  <View style={{marginHorizontal:20,}}>
    <View style={{flexDirection:"row",justifyContent:'space-between'}}> 
      
  <Text style={{fontSize:Constants.getActualFontSize(22),fontStyle:"italic",fontWeight:"500",color:Colors.BLACK}}>
  Hi, User 
</Text>
<Notificationvg/>
    </View>

<FlatList 
data={allUsersData}
keyExtractor={(_,index)=>index.toString()}
showsVerticalScrollIndicator={false}
// contentContainerStyle={{flex:1}}
renderItem={renderUsers}
refreshControl={<RefreshControl refreshing={refreshing} onRefresh={pullToRefresh}/>}
style={{marginVertical:10}}
/>
      </View>
<TouchableResize 
name={"Logout"}
onPress={doLogout}
style={[globalStyles.button,{marginTop:Constants.SCREEN_HEIGHT/3,width:"80%",alignSelf:"center"}]}
loading={loading}
/>
</View>
  )
}


const mapStateToProps=(state)=>({
  userId:state.user.userId,
contactNo:state.user.contactNo,
username:state.user.username,
userToken:state.user.userToken,
})
const mapDispatchToProps=(dispatch)=>({
  dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
