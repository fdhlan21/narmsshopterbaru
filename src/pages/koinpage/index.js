import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
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



export default function KoinPage({ navigation, route }) {
  const [search, setSearch] = useState('');
  const goBack = () => {
    navigation.goBack();
  }
  const handlePress = () => {
    // Ganti URL dengan tautan web yang diinginkan
    Linking.openURL('https://maps.app.goo.gl/9Gm8MVPQ1r5zPAZP7');
  };
  return (

   <View style={{flex:1,  backgroundColor:"white", }}>
    <ScrollView style={{padding:0}}>

    <ImageBackground source={require('../../assets/bgkoinpage.png')} style={{padding:10,
        width:360, height: 167, 
    }}>
        <TouchableNativeFeedback onPress={goBack}>
            <View>
                <Image source={require('../../assets/tombolkembali.png')}
                style={{
                    width:10, height:19,
                    
                }}/>
            </View>
        </TouchableNativeFeedback>
        </ImageBackground>

          {/* [GRUB PRODUKK] */}
      <View style={{padding:10, marginTop:'5%'}}>

            
            {/* TUKAR BANYAK HADIA */}
            <View>
                <Text style={{fontFamily:fonts.primary[600], fontSize:15, }}>Tukar Hadiah Produk </Text>
                <ScrollView horizontal>
                    {/* BAGIAN ATAS */}
                    <View style={{flexDirection:"row", justifyContent:"space-around"}}> 
                    {/* 1 */}
                        <Image source={require('../../assets/koingelaskarakter.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 2 */}
                         <Image source={require('../../assets/koinpiringkarakter.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 3 */}
                         <Image source={require('../../assets/koinsenter.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 1 */}
                         <Image source={require('../../assets/koinblander.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 1 */}
                         <Image source={require('../../assets/koinkompor.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 1 */}
                         <Image source={require('../../assets/koinmagicom.png')} style={{
                            width:102,
                            height:137
                        }}/>

                    </View>
                </ScrollView>
                <MyGap jarak={5}/>
                <ScrollView horizontal>
                    {/* BAGIAN BAWAH */}
                    <View style={{flexDirection:"row", justifyContent:"space-around"}}> 
                    {/* 1 */}
                        <Image source={require('../../assets/koinpanci.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 2 */}
                         <Image source={require('../../assets/koindispanser.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 3 */}
                         <Image source={require('../../assets/koinsetrika.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 1 */}
                         <Image source={require('../../assets/koinoven.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 1 */}
                         <Image source={require('../../assets/koinmesincuci.png')} style={{
                            width:102,
                            height:137
                        }}/>

                         {/* 1 */}
                         <Image source={require('../../assets/koinkulkas.png')} style={{
                            width:102,
                            height:137
                        }}/>

                    </View>
                </ScrollView>
                        <MyGap jarak={20}/>
                <View>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:15, }}>Tukar Uang Tunai</Text>
                    <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                        {/* 1 */}
                        <Image source={require('../../assets/koinuangtunai1.png')} style={{
                            width:102,
                            height:154
                        }}/>

                              {/* 2 */}
                              <Image source={require('../../assets/koinuangtunai2.png')} style={{
                            width:102,
                            height:154
                        }}/>

                              {/* 3 */}
                              <Image source={require('../../assets/koinuangtunai3.png')} style={{
                            width:102,
                            height:154
                        }}/>
                    </View>
                </View>


                <MyGap jarak={20}/>
                <View>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:15, }}>Tukarkan poin di toko terdekat</Text>
                    <View style={{}}>
                        <ScrollView horizontal>
                         {/* 1 */}
                         <TouchableNativeFeedback onPress={handlePress}>
                         <Image source={require('../../assets/koinmapsatu.png')} style={{
                            width:145,
                            height:134,
                        }}/>

                         </TouchableNativeFeedback>

                            {/* 2*/}
                         <Image source={require('../../assets/koinmapdua.png')} style={{
                            width:145,
                            height:134,
                        }}/>

                              {/* 3*/}
                              <Image source={require('../../assets/koinmaptiga.png')} style={{
                            width:145,
                            height:134,
                        }}/>

                        </ScrollView>
                       
                    </View>
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
    justifyContent:"center"
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
    flexDirection:"row"
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
