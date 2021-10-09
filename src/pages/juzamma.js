import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { textblack, textsemiblack, bgprimary } from '../../theme.json';
import Loading from '../components/loading';
import fontsizer from '../components/fontsizer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Juzamma = () => {
  const [isLoading, setLoading] = useState(true);
  const [alquran, setAlquran] = useState({});
  const [search, onChangeSearch] = useState('');
  const surah = [];

  const getSurah = async () => {
    for (let i = 78; i <= 114; i++) {
      surah.push(i);
    }
  };
  getSurah();

  useEffect(() => {
    const getAlquran = async () => {
      try {
        const response = await fetch(
          'https://alkawn-api.jagad.xyz/api/alquran'
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
  }, []);

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
          <View
            style={{
              height: 50,
              marginVertical: 12,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              marginTop: 30,
              paddingHorizontal: 10,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
            }}
          >
            <Ionicons
              styles={{ padding: 10 }}
              name='search-sharp'
              color={bgprimary}
              size={24}
            />
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                marginLeft: 10,
              }}
              onChangeText={onChangeSearch}
              value={search}
              placeholder='Pencarian...'
            />
          </View>
          {surah
            .filter((item) => {
              if (search == '') {
                return item;
              } else if (
                alquran[item].name_latin
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
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

export default Juzamma;
