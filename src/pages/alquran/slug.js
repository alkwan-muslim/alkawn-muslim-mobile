import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Loading from '../../components/loading';
import fontsizer from '../../components/fontsizer';
import { textblack, textsemiblack, bgprimary } from '../../../theme.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderSlug from '../../assets/headerslug.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AlquranSlug = ({ route }) => {
  const { id, number_of_ayah } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [alquran, setAlquran] = useState({});
  const ayah = [];

  const getAyah = async () => {
    for (let i = 1; i <= parseInt(number_of_ayah); i++) {
      ayah.push(i);
    }
  };
  getAyah();

  useEffect(() => {
    const getAlquran = async () => {
      try {
        const response = await fetch(
          `https://alkawn-api.jagad.xyz/api/alquran/${id}`
        );
        const json = await response.json();
        setAlquran(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAlquran();
  }, [id]);

  return (
    <View style={{ marginHorizontal: 20 }}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}
        >
          <Loading />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ImageBackground
              source={HeaderSlug}
              imageStyle={{ borderRadius: 10 }}
              style={{
                width: windowWidth * 0.9,
                height: windowHeight * 0.257413,
                flex: 1,
                marginTop: 30,
                marginVertical: 20,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: fontsizer(windowHeight) + 4,
                }}
              >
                {alquran[id].name_latin}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'Poppins-Regular',
                  fontSize: fontsizer(windowHeight) + 2,
                  borderBottomColor: '#FFFFFF',
                  borderBottomWidth: 0.2,
                  marginHorizontal: 30,
                  marginVertical: 5,
                  paddingVertical: 5,
                }}
              >
                {`${alquran[id].number_of_ayah} Ayat`}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'noorehidayat',
                  fontSize: fontsizer(windowHeight) + 10,
                  marginHorizontal: 20,
                }}
              >
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </ImageBackground>
            {ayah.map((item) => (
              <View
                key={item}
                style={{
                  borderBottomColor: '#BBC4CE',
                  borderBottomWidth: 0.2,
                  marginVertical: 10,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#E3EEFF',
                    borderRadius: 10,
                    paddingVertical: 10,
                    marginVertical: 10,
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: fontsizer(windowWidth) - 2,
                      color: bgprimary,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      marginHorizontal: 10,
                    }}
                  >
                    {item}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginHorizontal: 10 }}>
                      <Ionicons
                        name='bookmarks-outline'
                        color={bgprimary}
                        size={24}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 10 }}>
                      <Ionicons
                        styles={{ padding: 10 }}
                        name='star-outline'
                        color={bgprimary}
                        size={24}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 10 }}>
                      <Ionicons
                        styles={{ padding: 10 }}
                        name='share-social-outline'
                        color={bgprimary}
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text
                  style={{
                    fontFamily: 'noorehidayat',
                    fontSize: fontsizer(windowWidth) + 4,
                    flex: 1,
                    color: textblack,
                  }}
                >
                  {alquran[id].text[item]}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: fontsizer(windowWidth) - 4,
                    color: textblack,
                    marginVertical: 20,
                  }}
                >
                  {alquran[id].translations.id.text[item]}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default AlquranSlug;

const styles = StyleSheet.create({});
