import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../global'
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import GymTrafficBg from '../../assets/background/GymTrafficBg.png'



const WallpaperDownload = () => {


  const data = [

    { id: 1, name: 'AttackOntitan' }
  ]


  return (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>

      <ScrollView>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({ item, index }) => {
            return (

              <View style={{ backgroundColor: 'black' }}>
                <Text style={{ fontFamily: Fonts.SEMIBOLD, color: 'white' }}>{item.name}</Text>
              </View>
            )
          }}
        />

        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#000000', '#000000', '#000000','#000000' ]} style={styles.linearGradient}>
          <View style={{marginLeft:15}}>
            <Text style={{ fontSize: 16, color: 'white', marginBottom: 10,fontWeight:'700' ,marginVertical:10 }}>Gym Traffic</Text>
            <Progress.Bar progress={0.5} width={200} color={'rgba(187, 242, 70, 1)'} unfilledColor={'rgb(94,100,103)'} borderWidth={0} height={16} />
          </View>
          <View style={{width:'25%'}}>
          <ImageBackground source={GymTrafficBg} style={styles.GymTrafficBg} resizeMode='contain' />
          </View>
          
        </LinearGradient>

      </ScrollView>
    </View>
  )
}

export default WallpaperDownload

const styles = StyleSheet.create({


  linearGradient: {
    flex: 1,
    flexDirection:'row',
    alignContent: 'center',
    height: 73,
 
    alignContent: 'space-between',
    alignSelf:'center',
    borderRadius:15
  },
  GymTrafficBg:{
height:73,width:'100%'
  }
})