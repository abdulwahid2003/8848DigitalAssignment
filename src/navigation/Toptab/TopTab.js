import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Merchandise from '../../Screens/Merchandise/Merchandise';
import WallpaperDownload from '../../Screens/WallpaperDowload/WallpaperDownload';
import { Colors, Fonts, ScreenNames } from '../../global'
import CartScreen from '../../Screens/Cart/CartScreen';
import OnTheWay from '../../Screens/OnTheWay/OnTheWay';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SCREEN_WIDTH } from '../../global/constants';
import FocusAwareStatusBar from '../../Component/FocusAwareStatusBar';



const Tab = createMaterialTopTabNavigator();

let width = [];
let offset = [];

function MyTabBar({ state, descriptors, navigation, position }) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    console.log(offset[state.index], width[state.index], SCREEN_WIDTH);
    ref.current.scrollTo({ x: (offset[state.index] - (Dimensions.get('window').width - 20) / 2) + (width[state.index] / 2), y: 0, animated: true })
  }, [state.index]);
  let scrollItems = []
  return (


    <View
      style={{ flexDirection: 'row', marginHorizontal: 20, paddingVertical: 10, backgroundColor: "#fff" }}>
      <ScrollView
        // pagingEnabled
        ref={ref}

        scrollEventThrottle={16}
        style={{ backgroundColor: "#fff" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {scrollItems}
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = (native) => {

            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          return (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={({ nativeEvent }) => onPress(nativeEvent)}
              onLongPress={onLongPress}
              style={{ flexGrow: 1, alignItems: 'center', marginRight: 20, backgroundColor: "#fff" }}
              onLayout={({ nativeEvent }) => { width.push(nativeEvent.layout.width); offset.push(nativeEvent.layout.x) }}
            >
              <Animated.Text style={{
                fontFamily: Fonts.BOLD,
                fontSize: Fonts.SIZE_16,
                marginBottom: 5,
                fontWeight:'700',
                color: Colors.BLACK,
                opacity: isFocused ? 1 : 0.5,
                backgroundColor: "#fff"
              }}>
                {label}
              </Animated.Text>
              <Animated.View style={{
                height: 6,
                width: 6,
                borderRadius: 50,
                backgroundColor: Colors.BLACK,
                opacity: isFocused ? 1 : 0
              }}>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
function TopTab() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={false} />
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        style={{ marginLeft: 0, }}
        sceneContainerStyle={{ backgroundColor: "black" }} >
        <Tab.Screen name={ScreenNames.MERCHANDISE} component={Merchandise}
        />
        <Tab.Screen name={ScreenNames.WALLPAPER_DOWNLOAD} component={WallpaperDownload}
        />
        <Tab.Screen name={ScreenNames.CART_SCREEN} component={CartScreen}
        />
        <Tab.Screen name={ScreenNames.ON_THE_WAY} component={OnTheWay}
        />
      </Tab.Navigator>
    </View>
  );
}
export default TopTab

