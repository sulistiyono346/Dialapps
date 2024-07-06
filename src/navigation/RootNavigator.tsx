import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/color.constant';
import IncomingScreen from '../screens/IncomingScreen';
import MainScreen from '../screens/MainScreen';
import OutgoingScreen from '../screens/OutgoingScreen';
import {
  HeaderIcoming,
  HeaderOutgoing,
  MainHeader,
} from './RootNavigator.componet';
import {RootStackParamList} from './RootNavigator.type';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 300});
  }, []);

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.White,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{
            tabBarIcon: ({color}) => (
              <IconFeather name="home" color={color} size={24} />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Message"
          component={MainScreen}
          options={{
            tabBarIcon: ({color}) => (
              <IconMaterialComunity
                name="message-processing-outline"
                color={color}
                size={24}
              />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Keypad"
          component={MainScreen}
          options={{
            tabBarIcon: ({color}) => (
              <IconMaterialComunity name="dots-grid" color={color} size={24} />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Call"
          component={MainScreen}
          options={{
            tabBarIcon: ({color}) => (
              <IconMaterialComunity name="phone" color={color} size={24} />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={MainScreen}
          options={{
            tabBarIcon: ({color}) => (
              <IconMaterialComunity
                name="account-circle-outline"
                color={color}
                size={24}
              />
            ),
            tabBarActiveTintColor: Colors.Black,
            tabBarInactiveTintColor: Colors.DarkGray,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.White,
        },
      }}>
      <Stack.Screen
        name="MainScreen"
        component={TabNavigator}
        options={{
          headerTitle: MainHeader,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="IncomingScreen"
        component={IncomingScreen}
        options={{
          headerTitle: HeaderIcoming,
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="OutgoingScreen"
        component={OutgoingScreen}
        options={{
          headerTitle: HeaderOutgoing,
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
