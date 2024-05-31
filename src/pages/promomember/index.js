import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, TextInput } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { MyGap, MyHeader } from '../../components';

export default function PromoMember({ navigation, route }) {

  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

        <View style={{padding:0, }}>
        <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10}}>
          {/* Kodingan search */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Image source={require('../../assets/tombolkembali.png')}
              style={{width:10 , height: 19}}/>
            </TouchableOpacity>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="cari beragam kebutuhan harian"
                value={search}
                onChangeText={setSearch}
                placeholderTextColor='gray'
              />
              <Icon name="search" size={20} color="#000" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')} style={styles.cartButton}>
              <Icon name="shopping-cart" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={{ flexDirection: "row", marginTop: '5%' , padding:10,  }}>
          <Image source={require('../../assets/promomember2.png')} style={{
            width: 176, height: 30,
          }} />
        </View>

        {/* [GRUB PRODUKK] */}
        <View style={{ padding: 10, marginTop: '5%' }}>

          {/* BAGIAN ATAS */}
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

            {/* ICHI OCHA */}
            <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produkichiocha.png')} style={{
                width: 136, height: 118, alignItems: 'center', alignSelf: 'center',
                marginTop: 0, top: 0
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: -3 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Ichi Ocha Teh</Text></ImageBackground>

                <TouchableWithoutFeedback>
                  <View style={{
                    backgroundColor: "white", justifyContent: "center", padding: 10, left: -15, borderRadius: 20,
                    width: 25,
                  }}>
                    <Image source={require('../../assets/love.png')} style={{
                      height: 14,
                      width: 15,

                    }} />
                  </View>
                </TouchableWithoutFeedback>
              </View>


              {/* JUDUL PRODUK*/}
              <View style={{ padding: 10, alignItems: 'center', top: -10 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Ichi Ocha Minuman{'\n'}Teh Honey Lemon </Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>450 - 500 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -24.6 }}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -40 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp14.900</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/promodua.png')} style={{
                    width: 79,
                    height: 15
                  }} />
                </View>
              </View>

            </View>

            {/* MILA TEPUNGG TERIGU */}
            <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produktepungteriguserbaguna.png')} style={{
                width: 70, height: 118, alignItems: 'center', alignSelf: 'center',
                marginTop: 0, top: -0
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: -5 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Mila Tepung Terigu</Text></ImageBackground>

                <TouchableWithoutFeedback>
                  <View style={{
                    backgroundColor: "white", justifyContent: "center", padding: 10, left: -15, borderRadius: 20,
                    width: 25,
                  }}>
                    <Image source={require('../../assets/love.png')} style={{
                      height: 14,
                      width: 15,

                    }} />
                  </View>
                </TouchableWithoutFeedback>
              </View>


              {/* JUDUL PRODUK*/}
              <View style={{ padding: 10, alignItems: 'center', top: -10 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Mila Tepung Terigu{'\n'}Serbaguna</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>1000 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -26 }}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -40 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp14.100</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/promotiga.png')} style={{
                    width: 79,
                    height: 15
                  }} />
                </View>
              </View>

            </View>

          </View>

          <MyGap jarak={20} />

          {/* BAGIAN TENGAH */}
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

            {/* GULAKU */}
            <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produkgulaku.png')} style={{
                width: 163, height: 123, alignItems: 'center', alignSelf: 'center',
                marginTop: 0, top: -1
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 1 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Gulaku</Text></ImageBackground>

                <TouchableWithoutFeedback>
                  <View style={{
                    backgroundColor: "white", justifyContent: "center", padding: 10, left: -15, borderRadius: 20,
                    width: 25,
                  }}>
                    <Image source={require('../../assets/love.png')} style={{
                      height: 14,
                      width: 15,

                    }} />
                  </View>
                </TouchableWithoutFeedback>
              </View>


              {/* JUDUL PRODUK*/}
              <View style={{ padding: 10, alignItems: 'center', top: -10 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Gulaku Premium</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>1 kg / pcs</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -24.6 }}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -42 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp17.900</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/promoempat.png')} style={{
                    width: 79,
                    height: 15
                  }} />
                </View>
              </View>

            </View>

            {/* BUMBU TOM YUM */}
            <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produkbamboebumbu.png')} style={{
                width: 100, height: 89, alignItems: 'center', alignSelf: 'center',
                marginTop: 10,
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Bumbu Tom Yum</Text></ImageBackground>

                <TouchableWithoutFeedback>
                  <View style={{
                    backgroundColor: "white", justifyContent: "center", padding: 10, left: -15, borderRadius: 20,
                    width: 25,
                  }}>
                    <Image source={require('../../assets/love.png')} style={{
                      height: 14,
                      width: 15,

                    }} />
                  </View>
                </TouchableWithoutFeedback>
              </View>


              {/* JUDUL PRODUK*/}
              <View style={{ padding: 10, alignItems: 'center', top: -10 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Bamboe Bumbu{'\n'}Tom Yum</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>60 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -26 }}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -43 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp7.800</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/promodua.png')} style={{
                    width: 79,
                    height: 15
                  }} />
                </View>
              </View>

            </View>

          </View>

          <MyGap jarak={20} />

          {/* BAGIAN BAWAH */}

        </View>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 12,
    color: 'black',
    fontFamily:fonts.primary[400],

  },
  cartButton: {
    marginLeft: 10,
  },
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
});
