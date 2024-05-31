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

export default function Home({ navigation, route }) {
  const [search, setSearch] = useState('');


  return (

   <View style={{flex:1,  backgroundColor:"white", }}>

    <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10}}>
          {/* Kodingan search */}
          <View style={styles.headerContainer}>
          
          <TouchableNativeFeedback onPress={() => navigation.navigate('SearchPage')}>
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
              <TouchableNativeFeedback onPress={() => navigation.navigate('NotifikasiPage')}>
        <Icon name="notifications" size={24} color="black" style={{ marginLeft: 10 }} />
              </TouchableNativeFeedback>
            </View>
          </View>
        </ImageBackground>
    <ScrollView style={{padding:0}}>

  
    {/* BAGIAN SLIDER */}
    <ScrollView horizontal>
    <TouchableNativeFeedback onPress={() => navigation.navigate('SliderPage')}>
    <View style={{padding:10, alignItems:"center"}}>
      <Image source={require('../../assets/sliderphoto.png')} style={{
        width:346,
        height:142,
        padding:10

      }}/>
    </View>
    </TouchableNativeFeedback>

    <View style={{padding:10, alignItems:"center"}}>
      <Image source={require('../../assets/sliderphotodua.png')} style={{
        width:346,
        height:142,
        padding:10

      }}/>
    </View>

    <View style={{padding:10, alignItems:"center"}}>
      <Image source={require('../../assets/sliderphototiga.png')} style={{
        width:346,
        height:142,
        padding:10

      }}/>
    </View>
    </ScrollView>

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
        <TouchableWithoutFeedback onPress={() => navigation.navigate('KoinPage')}>
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
        <TouchableWithoutFeedback>
          <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.1,
            color:colors.fontcolor ,
          }}>Produk Pilihan</Text>
        </TouchableWithoutFeedback>

               {/* PRODUK LAGI DISKON */}
               <TouchableWithoutFeedback onPress={() => navigation.navigate('Diskonan')}>
          <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.1,
            color:'gray' ,
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
            <Image source={require('../../assets/produkabckecappedas.png')} style={{
              width:112, height:111, alignItems:'center', alignSelf:'center',
              marginTop:5
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>ABC Kecap Extra Pedas </Text></ImageBackground>

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
            <View style={{padding:10, alignItems:'center'}}>
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>ABC Kecap Extra Pedas{'\n'}135 ml</Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>135 ml / botol</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-17}}>
                <Image source={require('../../assets/promotoko.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-25}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp11.600</Text>
              </View>
                
          </View>

                {/* HERMATO SOSIS AYAM */}
          <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0
          }}>
            <Image source={require('../../assets/produkhematososisayan.png')} style={{
              width:101, height:84, alignItems:'center', alignSelf:'center',
              marginTop:30, top: -10
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              width:145
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>Hemato Sosis Ayam </Text></ImageBackground>

              <TouchableWithoutFeedback>
                <View style={{backgroundColor:"white", justifyContent:"center", padding:10, left:-15, borderRadius:20,
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
            <View style={{padding:10, alignItems:'center'}}>
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>Hemato Sosis Ayam{'\n'}15s 375 gr</Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>375 gr / pack</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-17}}>
                <Image source={require('../../assets/promotoko.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-25}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp19.200</Text>
              </View>
                
          </View>

          </View>

                 <MyGap jarak={20}/>

          {/* BAGIAN TENGAH */}
          <View style={{flexDirection:"row", justifyContent:"space-around",}}>
            
            {/* LEMON LOKAL */}
          <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0
          }}>
            <Image source={require('../../assets/lemonlokal.png')} style={{
              width:163, height:127, alignItems:'center', alignSelf:'center',
              marginTop:5, top:-5
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              width:140
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>Lemon Lokal </Text></ImageBackground>

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
            <View style={{padding:10, alignItems:'center'}}>
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>Lemon Lokal</Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>400 - 500 gram / pack</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-17}}>
                <Image source={require('../../assets/promotoko.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-25}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp11.600</Text>
              </View>
                
          </View>

                {/* ATI AYAM */}
          <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0
          }}>
            <Image source={require('../../assets/produkatiayam.png')} style={{
              width:163, height:125, alignItems:'center', alignSelf:'center',
              marginTop:6, top: -6
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              width:145
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>Ati Ayam </Text></ImageBackground>

              <TouchableWithoutFeedback>
                <View style={{backgroundColor:"white", justifyContent:"center", padding:10, left:-15, borderRadius:20,
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
            <View style={{padding:10, alignItems:'center'}}>
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>Ati Ayam</Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>450 - 500 gram / pack</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-17}}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-25}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp14.900</Text>
              </View>
                
          </View>

          </View>


                <MyGap jarak={20}/>
          
          {/* BAGIAN BAWAH */}
          <View style={{flexDirection:"row", justifyContent:"space-around",}}>
            
            {/* KOBE TEPUNG BAKWAN */}
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

                {/* ICHI OCHA */}
          <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0
          }}>
            <Image source={require('../../assets/produkichiocha.png')} style={{
              width:136, height:118, alignItems:'center', alignSelf:'center',
              marginTop:0, top: 0
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between', top: -3}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              width:145
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>Ichi Ocha Teh</Text></ImageBackground>

              <TouchableWithoutFeedback>
                <View style={{backgroundColor:"white", justifyContent:"center", padding:10, left:-15, borderRadius:20,
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
            <View style={{padding:10, alignItems:'center', top:-10}}>
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>Ichi Ocha Minuman{'\n'}Teh Honey Lemon </Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>450 - 500 gram / pack</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-24.6}}>
                <Image source={require('../../assets/favoriy.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-40}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp14.900</Text>
                <View style={{flexDirection:'row'}}>
                 <Image source={require('../../assets/promodua.png')} style={{
                  width:79,
                  height:15
                 }}/>
                </View>
              </View>
                
          </View>

                <View style={{marginTop:'100%'}}></View>
          </View>

           
           
         

      </View>
    </ScrollView>

    <View style={{padding:10,  flexDirection:"row", justifyContent:"space-around"}}>
        {/* 1 */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
          <View style={{padding:10,}}>
            <Image source={require('../../assets/home.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 2 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('KategoriPertama')}>
          <View style={{padding:10,}}>
          <Image source={require('../../assets/category-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 3 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('SukaPage')}>
          <View style={{padding:10,}}>
          <Image source={require('../../assets/wishlist-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 4 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('ProfilePage')}> 
          <View style={{padding:10,}}>
          <Image source={require('../../assets/profile-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>
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
