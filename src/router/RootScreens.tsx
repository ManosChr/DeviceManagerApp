import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home/Home';
import AddDevice from '../screens/addDevice/AddDevice';
import EditDevice from '../screens/editDevice/EditDevice';
import DeleteDevice from '../screens/deleteDevice/DeleteDevice';
import DeviceQr from '../screens/deviceQr/DeviceQr';


// Create Navigator
const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => (
  <HomeStack.Navigator
    initialRouteName={"Home"}>
    <HomeStack.Screen
      name={"Home"}
      component={Home}
      options={{
        headerShown: false,
      }}
    />

    <HomeStack.Screen
      name={"AddDevice"}
      component={AddDevice}
      options={{
        headerShown: false,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}
    />

    <HomeStack.Screen
      name={"EditDevice"}
      component={EditDevice}
      options={{
        headerShown: false,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}
    />

    <HomeStack.Screen
      name={"DeleteDevice"}
      component={DeleteDevice}
      options={{
        headerShown: false,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}
    />

    <HomeStack.Screen
      name={"DeviceQr"}
      component={DeviceQr}
      options={{
        headerShown: false,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}
    />
  </HomeStack.Navigator>
);


const RootScreens = () => {

  // Top-level navigator
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
};

export default RootScreens;