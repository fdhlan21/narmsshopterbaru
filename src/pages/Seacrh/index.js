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

export default function SearchPage({ navigation, route }) {

  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{}}>
        <View style={{padding:0, }}>
        <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10}}>
          {/* Kodingan search */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Image source={require('../../assets/tombolkembali.png')}
              style={{width:10 , height: 19}}/>
            </TouchableOpacity>
            <View style={styles.searchContainer}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('KategoriPertama')}>
  <View style={styles.searchContainer}>
    <View style={styles.searchInput}>
      <Text style={{ color: 'gray', fontFamily: fonts.primary[400], justifyContent:"center", top:10, fontSize:12 }}>
        cari beragam kebutuhan harian
      </Text>
    </View>
    <Icon name="search" size={20} color="#000" />
  </View>
</TouchableNativeFeedback>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')} style={styles.cartButton}>
              <Icon name="shopping-cart" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* [GRUB SEARCH] */}
        <View style={{ padding: 10, marginTop: '5%' }}>

       <View style={{padding:10, }}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:13, }}>Paling Sering Dicari</Text>
       </View>
        <View style={{flexDirection:"row", justifyContent:"space-around", }}>
            {/* 1 */}
        <TouchableNativeFeedback>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Beras</Text>
            </View>
        </TouchableNativeFeedback>

           {/* 2 */}
           <TouchableNativeFeedback>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Minyak Goreng</Text>
            </View>
        </TouchableNativeFeedback>

           {/* 3 */}
           <TouchableNativeFeedback>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Sosis Ayam</Text>
            </View>
        </TouchableNativeFeedback>

           {/* 4 */}
           <TouchableNativeFeedback>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Air Mineral</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
            <MyGap jarak={20}/>
        <View style={{flexDirection:"row", justifyContent:"space-around", }}>
            {/* 1 */}
        <TouchableNativeFeedback>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Saus Tomat</Text>
            </View>
        </TouchableNativeFeedback>

           {/* 2 */}
           <TouchableNativeFeedback onPress={() => navigation.navigate('TepungPage')}>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Tepung</Text>
            </View>
        </TouchableNativeFeedback>

           {/* 3 */}
           <TouchableNativeFeedback>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Susu Cair</Text>
            </View>
        </TouchableNativeFeedback>

           {/* 4 */}
           <TouchableNativeFeedback>
            <View style={{padding:10, backgroundColor:'#ECECEC', borderRadius:5,}}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:10, }}>Mie Instant</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
        </View>
        </View>
    
      </ScrollView>
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
