import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Router from './router';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f6f6f6',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
