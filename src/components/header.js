import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import HeaderImage from '../assets/header.png';
import { textwhite, bgprimary } from '../../theme.json';
import fontsizer from '../components/fontsizer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: bgprimary,
        borderRadius: 10,
        width: windowWidth * 0.9,
        height: windowHeight * 0.257413,
        marginBottom: 30,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1, marginLeft: 20, marginVertical: 40 }}>
          <Text
            style={{
              color: textwhite,
              fontSize: fontsizer(windowWidth) - 2,
              fontFamily: 'Poppins-Bold',
            }}
          >
            Bacaan Muslim Dalam Satu Aplikasi
          </Text>
          <Text
            style={{
              color: textwhite,
              fontSize: fontsizer(windowWidth) - 2,
              marginVertical: 5,
              fontFamily: 'Poppins-Regular',
            }}
          >
            Al-Quran, Juz Amma, Iqro, dan bacaan lainnya.
          </Text>
        </View>
        <Image
          source={HeaderImage}
          style={{
            width: windowWidth * 0.4,
            height: windowHeight * 0.257,
            flex: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
