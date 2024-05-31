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

export default function LagiDiskon({ navigation, route }) {
  const [search, setSearch] = useState('');


  return (

   <View style={{flex:1,  backgroundColor:"white", }}>
    <ScrollView style={{padding:0}}>

    <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10}}>
          {/* Kodingan search */}
          <View style={styles.headerContainer}>
          
          <TouchableNativeFeedback onPress={() => navigation.navigate('PromoMember')}>
  <View style={styles.searchContainer}>
    <View style={styles.searchInput}>
      <Text style={{ color: 'gray', fontFamily: fonts.primary[400], justifyContent:"center", top:10, fontSize:12 }}>
        cari beragam kebutuhan harian
      </Text>
    </View>
    <Icon name="search" size={20} color="#000" />
  </View>
</TouchableNativeFeedback>

            <View  style={styles.cartButton}>
              <Icon name="shopping-cart" size={24} color="#000" />
              {/* Ikon Notifikasi */}
        <Icon name="notifications" size={24} color="black" style={{ marginLeft: 10 }} />
            </View>
          </View>
        </ImageBackground>

  
    {/* BAGIAN SLIDER */}
    <View style={{padding:10, alignItems:"center"}}>
      <Image source={require('../../assets/sliderphoto.png')} style={{
        width:346,
        height:142,
        padding:10

      }}/>
    </View>

      {/* PILIHAN */}
    <View style={{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
      {/* PROMO MEMBER  */}
      <TouchableNativeFeedback onPress={() => navigation.navigate('PromoMember')}>
        <View>
          <Image source={require('../../assets/promomemberbutton.png')} 
          style={{width:50, height:78, }}/>
        </View>
      </TouchableNativeFeedback>

        {/* PROMO TOKO  */}
        <TouchableNativeFeedback>
        <View>
          <Image source={require('../../assets/promotokobutton.png')} 
          style={{width:50, height:78, }}/>
        </View>
      </TouchableNativeFeedback>

        {/* PROMO FAVCRIT  */}
        <TouchableNativeFeedback>
        <View>
          <Image source={require('../../assets/favoritbutton.png')} 
          style={{width:50, height:72, }}/>
        </View>
      </TouchableNativeFeedback>

        {/* PROMO   */}
        <TouchableNativeFeedback>
        <View>
          <Image source={require('../../assets/produkterbarubutton.png')} 
          style={{width:50, height:78, }}/>
        </View>
      </TouchableNativeFeedback>

    
    </View>

      {/* IKLAN HOME */}
      <View style={{marginTop:'5%', padding:10, alignItems:"center"}}>
        <TouchableWithoutFeedback>
          <View>
          <Image source={require('../../assets/fotoiklanhome.png')} style={{
          width:336,
          height:98,
          
        }}/>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* TEKS PILIHAN HOME */}
      <View style={{marginTop:'5%', flexDirection:"row", justifyContent:"space-evenly"}}>

        {/* PRODUK PILIHAN */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('MainApp')}>
          <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.1,
            color:'gray',
          }}>Produk Pilihan</Text>
        </TouchableWithoutFeedback>

               {/* PRODUK LAGI DISKON */}
               <TouchableWithoutFeedback>
          <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.1,
            color:colors.fontcolor ,
          }}>Lagi Diskon</Text>
        </TouchableWithoutFeedback>

               {/* PRODUK PALING MURAH */}
               <TouchableWithoutFeedback>
          <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.1,
            color:'gray' ,
          }}>Paling Murah</Text>
        </TouchableWithoutFeedback>

      </View>

          {/* [GRUB PRODUKK] */}
      <View style={{padding:10, marginTop:'5%'}}>

          {/* BAGIAN ATAS */}
          <View style={{flexDirection:"row", justifyContent:"space-around",}}>

            {/* ABC KECAP PEDAS */}
            <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0
          }}>
            <Image source={require('../../assets/produkkobetepungbakwan.png')} style={{
              width:75, height:101, alignItems:'center', alignSelf:'center',
              marginTop:3, top:0
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              width:140
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>Kobe Tepung Bakwan</Text></ImageBackground>

              <TouchableWithoutFeedback>
                <View style={{backgroundColor:"white", justifyContent:"center", padding:10, left:-10, borderRadius:20,
                  width:25, 
                }}>
                  <Image source={require('../../assets/love.png')} style={{
                    height:14,
                    width:15,

                  }}/>
                </View>
              </TouchableWithoutFeedback>
            </View>


            {/* JUDUL PRODUK*/}
            <View style={{padding:10, alignItems:'center', top:-5}}>
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>Tepung Bumbu{'\n'}Bakwan Kobe</Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>200 gram / pack</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-20}}>
                <Image source={require('../../assets/promotoko.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-35}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp6.600</Text>
                <View style={{flexDirection:'row'}}>
                 <Image source={require('../../assets/promosatu.png')} style={{
                  width:79,
                  height:15
                 }}/>
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

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
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
              <View style={{ padding: 10, alignItems: 'center', top: -5 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Bamboe Bumbu{'\n'}Tom Yum</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>60 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -19 }}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -35 }}>
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

                 <MyGap jarak={20}/>

          {/* BAGIAN TENGAH */}
          <View style={{flexDirection:"row", justifyContent:"space-around",}}>
            
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
              <View style={{ padding: 10, top: -10}}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -30 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp17.900</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/promoempat.png')} style={{
                    width: 79,
                    height: 15
                  }} />
                </View>
              </View>

            </View>

              {/* SANIA TEPUNG TERIGU */}
              <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produksaniatepungterigu.png')} style={{
                width: 100, height: 99, alignItems: 'center', alignSelf: 'center',
                marginTop: 5, top: 0
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:20 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Sania Tepung Terigu</Text></ImageBackground>

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
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Sania Tepung Terigu{'\n'}Serbaguna</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>1000 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -27}}>
                <Image source={require('../../assets/promotoko.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -45 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp12.790</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/promoenam.png')} style={{
                    width: 79,
                    height: 15
                  }} />
                </View>
              </View>

            </View>

          </View>


                <MyGap jarak={20}/>
          
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
