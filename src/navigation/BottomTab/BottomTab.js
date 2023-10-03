import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScreenNames, Colors, Fonts } from '../../global'
import { BLACK1616 } from '../../global/colors';
import Home from '../../Screens/Home/Home';
import Profile from '../../Screens/Profile/Profile';
import HomeSvg from '../../assets/home.svg'
import FilledHomeSvg from '../../assets/filledHome.svg'
import User from '../../assets/user.svg'
import FilledUser from '../../assets/filledUser.svg'
import Flame from '../../assets/flame.svg'
import FilledFlame from '../../assets/filledFlame.svg'
import Search from '../../assets/search.svg'
import FilledSearch from '../../assets/filledSearch.svg'
import HotStuffs from '../../Screens/HotStuffs/HotStuffs';
import SearchScreen from '../../Screens/WorkOut/SearchScreen';
import ProfileStack from '../ProfileStack/ProfileStack';
import DashBoardStack from '../stacks/MainStack/DashboardStack/DashBoardStack';
import DashBoardUnfilled from '../../assets/svg/DashBoardUnfilled.svg'
import DashBoardFilled from '../../assets/svg/DashBoardFilled.svg'
import WorkOutFilled from '../../assets/svg/WorkOutFilled.svg'
import WorkOutUnfilled from '../../assets/svg/WorkOutUnfilled.svg'
import ChatUnfilled from '../../assets/svg/ChatUnfilled.svg'
import ChatFilled from '../../assets/svg/ChatFilled.svg'
import ProfileFilled from '../../assets/svg/ProfileFilled.svg'
import ProfileUnfilled from '../../assets/svg/ProfileUnfilled.svg'
import WorkOutStack from '../stacks/MainStack/WorkoutStack/WorkOutStack';
import ChatStack from '../stacks/MainStack/ChatStack/ChatStack';
const Tab = createBottomTabNavigator();

const BottomTab = ({ }) => {

	
    return (
        
        <Tab.Navigator
            backBehavior='history'
            screenOptions={{
                tabBarShowLabel: false,

                headerShown: false,
                tabBarStyle: { height: 64, alignItems: 'center',}
                
            }}
            initialRouteName={ScreenNames.HOME}
            >
            <Tab.Screen name={ScreenNames.DASHBOARD_STACK} component={DashBoardStack}

options={{
    tabBarIcon: ({ focused }) => {
        return (<View style={styles.iconContainer}>
                            {focused ? <><View style={{height:36,width:122,backgroundColor:Colors.NE0N,borderRadius:43,left:14,flexDirection:'row',justifyContent:'space-evenly',bottom:4,left:25}}>
                                <DashBoardFilled style={{alignSelf:"center",}}/>
                                <Text style={{alignSelf:"center",fontWeight:"500",color:Colors.BLACK,}}>Dashboard</Text>
                            
                                </View>
                                </> : <DashBoardUnfilled />}
                            {/* {focused ? ( (<View style={{height:36,width:60,backgroundColor:Colors.NE0N}}>
                                <View>
                                <DashBoardFilled/> </View><Text style={[styles.active, { color: "black" }]}>Home</Text></View>)) : (<Text></Text>)} */}
                        </View>)

}
}}
/>
      

<Tab.Screen name={ScreenNames.WORKOUT_STACK} component={WorkOutStack}
    options={{
        tabBarIcon: ({ focused }) => {
            return (<View style={styles.iconContainer}>
                  {focused ? <><View style={{height:38,width:122,backgroundColor:Colors.NE0N,borderRadius:43,flexDirection:'row',justifyContent:'space-evenly',bottom:4}}>
                                <WorkOutFilled style={{alignSelf:"center",}}/>
                                <Text style={{alignSelf:"center",fontWeight:"500",color:Colors.BLACK,}}>Workout</Text>
                            
                                </View>
                                </> : <WorkOutUnfilled style={{}}/>}
            </View>)
        }
    }}
/>
            <Tab.Screen name={ScreenNames.CHAT_STACK} component={ChatStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<View style={styles.iconContainer}>
                             {focused ? <><View style={{height:36,width:122,backgroundColor:Colors.NE0N,borderRadius:43,left:20,marginRight:10,flexDirection:'row',justifyContent:'space-evenly',bottom:4}}>
                                <ChatFilled style={{alignSelf:"center",}}/>
                                <Text style={{alignSelf:"center",fontWeight:"500",color:Colors.BLACK,}}>Chat</Text>
                            
                                </View>
                                </> : <ChatUnfilled />}
                        </View>)
                    }
                }}
            />

<Tab.Screen name={ScreenNames.PROFILE} component={ProfileStack}

options={{
    tabBarIcon: ({ focused }) => {
        return (<View style={styles.iconContainer}>
              {focused ? <><View style={{height:36,width:122,backgroundColor:Colors.NE0N,borderRadius:43,flexDirection:'row',justifyContent:'space-evenly',bottom:4,right:25}}>
                                <ProfileFilled style={{alignSelf:"center",}}/>
                                <Text style={{alignSelf:"center",fontWeight:"500",color:Colors.BLACK,}}>Profile</Text>
                            
                                </View>
                                </> : <ProfileUnfilled />}
        </View>)

}
}}
/>
                    </Tab.Navigator>
  


    );
}

export default BottomTab




export const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center', height: 28, width: 68, borderRadius: 10
    },
    active: {
        fontSize: Fonts.SIZE_12,
        color: Colors.CAMBOGE
    },
    inactive: {

        alignItems: 'center', height: 28, width: 68
    }
});