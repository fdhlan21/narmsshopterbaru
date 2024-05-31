import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, TextInput,
  Modal,
 } from 'react-native';
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

export default function KategoriPertama({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
        <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10}}>
          {/* Kodingan search */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('MainApp')} style={styles.backButton}>
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

        <View>
            <View style={{flexDirection:'row', padding:0, }}>

              {/* CATEGORY */}
                <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
            <View>
                <Image source={require('../../assets/kotakkategori.png')}
                style={{
                    width:53, height:49,
                
                }}/>
            </View>
                </TouchableNativeFeedback>
{/* Modal untuk opsi penyortiran */}
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          flex: 1,
          justifyContent:'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding:10

        }}>
         <View style={{padding:10, backgroundColor:"#F7E96B", borderRadius:20 , marginTop:-10}}>
          <View style={{padding:10, flexDirection:"row", justifyContent:"center"}}>
            <View style={{justifyContent:'center', left:10}}>
            <Text style={{fontFamily:fonts.primary[600], }}>Pilih Kategori</Text>
            </View>
            <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
              <View style={{justifyContent:'center', alignSelf:"flex-end", left:80, top:-5}}>
                <Image source={require('../../assets/tombolcancel.png')}
                style={{
                  width:12,
                  height:12,

                }}/>
              </View>
            </TouchableNativeFeedback>
          </View>



          {/* ALL CATEGORY */}
          <View style={{padding:0}}>
          {/* 1 */}
          <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                {/* 1 */}
                <TouchableNativeFeedback onPress={() => {
                  setModalVisible(false); navigation.navigate('SembakoPage')
                }}>
                  <Image source={require('../../assets/kategorisembako.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 2 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoriminyak.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 3 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorbahanmasak.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>
          </View>
       

            {/* 2 */}
            <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                {/* 1 */}
                <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorimakananbeku.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 2 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorimakananinstat.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 3 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorisusu.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>
          </View>

           
                  {/* 3 */}
          <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                {/* 1 */}
                <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoriminuman.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 2 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorisnack.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 3 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoricokelat.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>
          </View>

   
                  {/* 4 */}
          <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                {/* 1 */}
                <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorisayuran.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 2 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoribuah.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 3 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoriprotein.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>
          </View>

        
                  {/* 5 */}
          <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                {/* 1 */}
                <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoriperawatan.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 2 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoriperawatandiri.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 3 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorikesehatan.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>
          </View>

        
                  {/* 6 */}
          <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                {/* 1 */}
                <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoriperlengkapanrumah.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 2 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategoripakaian.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>

                     {/* 3 */}
                     <TouchableNativeFeedback>
                  <Image source={require('../../assets/kategorialattulis.png')} style={{
                    width:106, height:115
                  }}/>
                </TouchableNativeFeedback>
          </View>
          </View>
         </View>
        </View>
      </Modal>
            <ScrollView horizontal>
              <TouchableNativeFeedback onPress={() => navigation.navigate('SembakoPage')}>
                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Sembako</Text>
                </View>
              </TouchableNativeFeedback>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5, marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Minyak & Margarin</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Bahan Masak & Bumbu</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Makanan Beku</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Makanan Instant</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Susu & Olahan Susu</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Minuman</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Snack</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Cokelat & Permen</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Sayuran</Text>
                </View>

                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Buah</Text>
                </View>
            </ScrollView>
            </View>
        </View>

        <View>
            <View style={{flexDirection:'row', padding:0, }}>
                <TouchableNativeFeedback>
            <View style={{justifyContent:'center'}}>
                <Image source={require('../../assets/filternaikturun.png')}
                style={{
                    width:53, height:29,
                
                }}/>
            </View>
                </TouchableNativeFeedback>

            <ScrollView horizontal>
                <View style={{padding:10, borderRadius:20, height:39, top:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Semua Produk</Text>
                </View>

                <View style={{padding:10, borderRadius:20, height:39, top:5, marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Beras</Text>
                </View>

                <View style={{padding:10, borderRadius:20, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Gula</Text>
                </View>

                <TouchableNativeFeedback onPress={() => navigation.navigate('TepungPage')}>
                <View style={{padding:10, borderRadius:20, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Tepung</Text>
                </View>
                </TouchableNativeFeedback>

                <View style={{padding:10, borderRadius:20, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Biji-bijian</Text>
                </View>
            </ScrollView>
            </View>
        </View>
      <ScrollView style={{}}>
        <View style={{padding:0, }}>


        {/* [GRUB PRODUKK] */}
        <View style={{ padding: 10, marginTop: '5%' }}>

          {/* BAGIAN ATAS */}
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

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
                  
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('SukaKecap')}>
                  <Image source={require('../../assets/love.png')} style={{
                    height:14,
                    width:15,

                  }}/>
                  </TouchableWithoutFeedback>
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

            {/* BERAS KOALA */}

            <TouchableNativeFeedback onPress={() => navigation.navigate('TepungKoalaPage')}>

            <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produkberaskoala.png')} style={{
                width: 100, height: 89, alignItems: 'center', alignSelf: 'center',
                marginTop: 2,
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:32 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Koala Madu Beras</Text></ImageBackground>

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
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Koala Madu Beras{'\n'}Premium Wangi</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>5 kg / pack</Text>
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
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp86.900</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/promoberaskoala.png')} style={{
                    width: 79,
                    height: 15
                  }} />
                </View>
              </View>

            </View>
            </TouchableNativeFeedback>

          </View>

          <MyGap jarak={20} />

          {/* BAGIAN BAWAH */}
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

{/* SANIA */}

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
      <Image source={require('../../assets/promosania.png')} style={{
        width: 79,
        height: 15
      }} />
    </View>
              </View>

            </View>
{/* BERAS KOALA */}
<View style={{
  width: 163,
  height: 283,
  borderWidth: 0.3,
  borderRadius: 10,
  padding: 0
}}>
  <Image source={require('../../assets/produkbumbukaldu.png')} style={{
    width: 100, height: 89, alignItems: 'center', alignSelf: 'center',
    marginTop: 2, top:10
  }} />

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:32 }}>
    <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
      padding: 10,
      width: 145
    }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Bumbu Kaldu Ayam</Text></ImageBackground>

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
<Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Totole Bumbu Kaldu{'\n'}Ayam 454 gr</Text>
    <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>45 gr / pcs</Text>
  </View>


  {/* PROMO !! */}
  <View style={{ padding: 10, top: -26 }}>
    <Image source={require('../../assets/produkterbaru.png')} style={{
      width: 99,
      height: 19
    }} />
  </View>

  {/* HARGA */}
  <View style={{ padding: 10, top: -43 }}>
    <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp46.400</Text>
   
  </View>

</View>

</View>

        </View>
        </View>
    
      </ScrollView>
      <View style={{padding:10,  flexDirection:"row", justifyContent:"space-around"}}>
        {/* 1 */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
          <View style={{padding:10,}}>
            <Image source={require('../../assets/home-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 2 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('KategoriPertama')}>
          <View style={{padding:10,}}>
          <Image source={require('../../assets/category.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
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
