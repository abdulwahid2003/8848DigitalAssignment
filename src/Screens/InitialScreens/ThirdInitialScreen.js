import React from 'react'
import  axios  from 'axios'
import { ScreenNames } from '../../global';
import { CommonActions } from '@react-navigation/native';
import { View,Text, Alert, ImageBackground, Image, StatusBar,TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
function  ThirdInitialScreen({userId,username}) {
	const navigation=useNavigation()
	
	const validateNavigaton=()=>{
		if (userId !== null  && username !== null) {
			navigation.navigate(ScreenNames.BOTTOM_TAB)
		} else {
			navigation.navigate(ScreenNames.LOGIN_SCREEN)
		}
	}
  return (

 <View  style={{justifyContent:"center",flex:1,alignItems:"center"}}>

<StatusBar translucent={true} backgroundColor='transparent'/>
<ImageBackground
source={require('../../assets/images/thirdPage.jpg')}
resizeMode='stretch'
style={{ flex: 1, width: '100%' }}></ImageBackground>
<View style={styles.textView}><View style={{top:10}}>

<Text style={styles.mainText}>Wherever You are </Text>
<Text style={styles.mainText}> Health is Number One</Text>
</View>
<View style={{top:"8%"}}>
	<Text style={{fontWeight:'400',color:"rgba(25, 33, 38, 0.5)",fontSize:15,fontFamily: 'Lato'}}>There is no instant way to a healthy lifess</Text></View>
	<View></View>
	
	<TouchableOpacity onPress={validateNavigaton} style={styles.btn} >
		
		<Text style={styles.btnText}>Next</Text>
		</TouchableOpacity>
		
</View>
 </View>

  )
}
const mapStateToProps=(state)=>({
    userId:state.user.userId,
  contactNo:state.user.contactNo,
  username:state.user.username
  })
  const mapDispatchToProps=(dispatch)=>({
    dispatch
  })
  export default connect(mapStateToProps,mapDispatchToProps)(ThirdInitialScreen)
  const styles=StyleSheet.create({
	btn:{
		width:"90%",
		backgroundColor:"#192126",
		height:56,
		marginTop:'12%',
		borderRadius:32,
		alignItems:'center'
	},
	btnText:{
		fontSize:16,color:"#ffffff",
		textAlign:"center",
		lineHeight:16,
		fontWeight:'700',
		fontFamily:'Lato',
		marginVertical:"6%"
	},
	mainText:{
		textAlign:'center',fontSize:24,fontWeight:'800',lineHeight:28.8,color:"#192126",fontFamily: 'Lato'
	},
	textView:{
		backgroundColor:"#fff",
		height:"28%",
		width:"100%",
		alignItems:'center',
	}
	})