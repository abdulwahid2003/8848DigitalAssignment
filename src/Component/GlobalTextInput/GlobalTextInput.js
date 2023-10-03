import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Constants } from '../../global'
import {  SCREEN_WIDTH } from '../../global/constants'
import EyeSvg from '../../assets/svg/eye.svg'
import OpenEyeSvg from '../../assets/svg/e1.svg'
const GlobalTextInput = ({placeHolder,placeHolderColor,value,setValue,isNum,isSecure,style,onChangeText,setIsSecure}) => {
  return (
    <View style={{marginVertical:20,padding:0}}>
        <TouchableOpacity 
        onPress={()=>{setIsSecure(!isSecure),console.log("hhk",isSecure)}}
        style={{
    position:"absolute",alignSelf:"flex-end",alignItems:"flex-start",top:8,paddingHorizontal:5
    }}>
        {
            isSecure? isSecure?
            isSecure?<EyeSvg/>:
            <OpenEyeSvg/>:null:null
        }
        </TouchableOpacity>
     <TextInput
     
     placeholder={placeHolder}
     placeholderTextColor={placeHolderColor}
    
     onChangeText={(txt)=>{
      setValue(txt)
     }}
     keyboardType={isNum?"number-pad":"default"}
     secureTextEntry={isSecure &&  true}
     style={[styles.textInput,style]}
     >{value}
</TextInput>
     
    </View>
  )
}

export default React.memo(GlobalTextInput)

const styles=StyleSheet.create({
    textInput:{
        fontFamily:"times",
        fontSize:Constants.getActualFontSize(16),
        height:Constants.CHANGE_BY_MOBILE_DPI(50),
        width:SCREEN_WIDTH-70,
        alignSelf:"center",
        borderRadius:11,
        paddingHorizontal:18,
        alignItems:"center",
        color:Colors.BLACK,
        borderWidth:1,
        margin:0
    }
})