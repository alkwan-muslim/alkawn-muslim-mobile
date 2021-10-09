import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import fontsizer from '../components/fontsizer';
import { textblack } from '../../theme.json';
import { Iqro, Juzamma, Quran, Wirid } from '../assets/icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const menuname = [
  { id: 1, title: 'Al-Quran', icon: Quran },
  { id: 2, title: 'Juz Amma', icon: Juzamma },
  { id: 3, title: 'Wirid', icon: Wirid },
  { id: 4, title: 'Iqro', icon: Iqro },
];

const Menu = ({ navigation }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: fontsizer(windowWidth),
          color: textblack,
          marginBottom: 10,
        }}
      >
        Explore Alkawn Muslim
      </Text>
      <FlatList
        data={menuname}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Al-Quran')}
            style={{
              width: windowWidth * 0.267,
              height: windowHeight * 0.133,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginRight: 10,
              marginBottom: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={item.icon}
              style={{
                width: windowWidth * 0.107,
                height: windowHeight * 0.0534,
                flex: 1,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: fontsizer(windowWidth) - 4,
                color: textblack,
                fontFamily: 'Poppins-Regular',
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Menu;
