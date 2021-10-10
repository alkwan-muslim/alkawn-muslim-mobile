import React from 'react';
import { bgprimary } from '../theme.json';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './pages/home';
import Bookmark from './pages/bookmark';
import Alquran from './pages/alquran/alquran';
import AlquranSlug from './pages/alquran/slug';
import Juzamma from './pages/juzamma';

const Tab = createMaterialBottomTabNavigator();

const MyMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor={bgprimary}
      inactiveColor='#6F6F6F'
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen
        name='Beranda'
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <Ionicons name='grid' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='Bookmark'
        component={Bookmark}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({ color }) => (
            <Ionicons name='bookmarks' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='App'
        component={MyMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Al-Quran'
        component={Alquran}
        options={{
          headerShown: true,
          headerStyle: {
            borderBottomColor: '#CBCBCB',
            borderBottomWidth: 0.6,
            backgroundColor: '#F6f6f6',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='Juz Amma'
        component={Juzamma}
        options={{
          headerShown: true,
          headerStyle: {
            borderBottomColor: '#CBCBCB',
            borderBottomWidth: 0.6,
            backgroundColor: '#F6f6f6',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='Al-Quran Detail'
        component={AlquranSlug}
        options={({ route }) => ({
          title: route.params.name_latin,
          headerStyle: {
            borderBottomColor: '#CBCBCB',
            borderBottomWidth: 0.6,
            backgroundColor: '#F6f6f6',
          },
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

export default Router;
