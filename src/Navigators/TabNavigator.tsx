import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CartScreen from '../screens/CartScreen'
import Customicon from '../components/Customicon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false, 
        tabBarHideOnKeyboard:true, 
        tabBarShowLabel:false,
        tabBarStyle:styles.tabBarStyle,
        tabBarBackground:()=>(
            <BlurView overlayColor='' blurAmount={15} style={styles.BlurStyle}/>
        ),
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <Customicon name='home' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
            )
        }}
        ></Tab.Screen>
        <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <Customicon name='cart' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
              )}} ></Tab.Screen>
        <Tab.Screen name="Favourite" component={FavouritesScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <Customicon name='like' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
            )
        }} ></Tab.Screen>
        <Tab.Screen name="History" component={OrderHistoryScreen} options={{
            tabBarIcon:({focused,color,size})=>(
                <Customicon name='bell' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
            )
        }} ></Tab.Screen>
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    tabBarStyle:{
        height:50,
        elevation:0,
        flex:1,
        borderTopWidth:0,
        position:'absolute',
        backgroundColor:COLORS.primaryBlackRGBA,
        borderTopColor:'transparent',
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop:5
    },
    BlurStyle:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
})
export default TabNavigator