import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { textblack, textsemiblack, bgprimary } from '../../theme.json';
import Loading from '../components/loading';
import fontsizer from '../components/fontsizer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Alquran = () => {
  const [isLoading, setLoading] = useState(true);
  const [alquran, setAlquran] = useState({});
  const surah = [];

  const getSurah = async () => {
    for (let i = 1; i <= 114; i++) {
      surah.push(i);
    }
  };
  getSurah();

  const getAlquran = async () => {
    try {
      const response = await fetch('https://alkawn-api.jagad.xyz/api/alquran');
      const json = await response.json();
      for (let i = 1; i <= 114; i++) {
        surah.push(i);
      }
      setAlquran(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAlquran();
  });

  return (
    <View style={{ marginHorizontal: 20 }}>
      <StatusBar
        barStyle='dark-content'
        hidden={false}
        backgroundColor='#ffffff'
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {surah.map((item) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: windowWidth * 0.9,
                height: windowHeight * 0.257413,
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                marginVertical: 10,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.0,

                elevation: 1,
              }}
              key={item}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: fontsizer(windowWidth),
                  color: textblack,
                  backgroundColor: '#f6f6f6',
                  width: 40,
                  height: 40,
                  marginHorizontal: 20,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  borderRadius: 10,
                }}
              >
                {item}
              </Text>
              <View
                style={{
                  marginVertical: 'auto',
                  width: 150,
                }}
                numColumns={3}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: fontsizer(windowWidth),
                    color: textblack,
                  }}
                >
                  {alquran[item].name_latin}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: fontsizer(windowWidth) - 4,
                    color: textsemiblack,
                  }}
                >
                  {alquran[item].name_indo}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'noorehidayat',
                  fontSize: fontsizer(windowWidth) + 4,
                  flex: 1,
                  padding: 20,
                  color: bgprimary,
                }}
              >
                {alquran[item].name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Alquran;

const styles = StyleSheet.create({});
