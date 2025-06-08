import React from "react";
import {View,Text, TouchableOpacity, StyleSheet} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "./src/Navigators/TabNavigator";
const stack = createNativeStackNavigator();

const App = ()=>{
  return (
  <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>

      <stack.Screen 
      name="Tab" 
      component={TabNavigator} 
      options={{animation:"slide_from_bottom"}}>
      </stack.Screen>
      
      <stack.Screen 
      name="Details" 
      component={DetailScreen} 
      options={{animation:"slide_from_bottom"}}>
      </stack.Screen>

     <stack.Screen 
      name="Payment" 
      component={PaymentScreen} 
      options={{animation:"slide_from_bottom"}}>
      </stack.Screen>

    </stack.Navigator>
  </NavigationContainer>
  )
}

export default App;