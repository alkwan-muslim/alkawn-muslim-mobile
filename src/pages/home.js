import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import Header from '../components/header';
import Menu from '../components/menu';
const Home = ({navigation}) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 20,
        flex: 1,
      }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f6f6f6"
      />
      <Header />
      <Menu navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
});
