import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { bgprimary } from '../../theme.json';
const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
      }}
    >
      <ActivityIndicator
        color={bgprimary}
        size='large'
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
        }}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
