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

export default function SliderPage({ navigation, route }) {
  const [search, setSearch] = useState('');
  const goBack = () => {
    navigation.goBack();
  }


  return (

   <View style={{flex:1,  backgroundColor:"#F1DFD1", }}>
    <ScrollView style={{padding:0}}>

    <ImageBackground source={require('../../assets/sliderphoto2.png')} style={{padding:10,
        width:360, height: 142, 
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

          {/* BAGIAN ATAS */}
          <View style={{flexDirection:"row", justifyContent:"space-around",}}>

            {/* BUMBU RACIK */}
            <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0,
            backgroundColor:"white"
          }}>
            <Image source={require('../../assets/produkbumburacik.png')} style={{
              width:75, height:91, alignItems:'center', alignSelf:'center',
              marginTop:20, top:0
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              width:140
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>Bumbu Racik</Text></ImageBackground>

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
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>Indofood Bumbu Racik{'\n'}Ayam Goreng Rempah</Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>30 gr / pack</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-20}}>
                <Image source={require('../../assets/favoriy.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-30}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp2.000</Text>
              </View>
                
          </View>

         {/* SUN KARA */}
         <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0,
              backgroundColor:'white'
            }}>
              <Image source={require('../../assets/produksunkara.png')} style={{
                width: 110, height: 90, alignItems: 'center', alignSelf: 'center',
                marginTop: 10,
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Sun Kara</Text></ImageBackground>

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
              <View style={{ padding: 10, alignItems: 'center', top: 0 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Sun Kara Santan Cair{'\n'}65 ml</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>65 ml / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -16 }}>
                <Image source={require('../../assets/favoriy.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -25 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp7.800</Text>
              </View>

            </View>

          </View>

                 <MyGap jarak={20}/>

          {/* BAGIAN TENGAH */}
          <View style={{flexDirection:"row", justifyContent:"space-around",}}>
            
          {/* GULAKU */}
            {/* KOBE TEPUNG BAKWAN */}
            <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0,
            backgroundColor:"white"
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
              padding: 0,
              backgroundColor:"white"
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


                      {/* BAGIAN BAWAh */}
          <View style={{flexDirection:"row", justifyContent:"space-around",}}>
            
            {/* GULAKU */}
              {/* KOBE TEPUNG BAKWAN */}
              <View style={{
              width:163,
              height:283,
              borderWidth:0.3,
              borderRadius:10,
              padding:0,
              backgroundColor:"white"
            }}>
              <Image source={require('../../assets/produkbawanggoreng.png')} style={{
                width:163, height:111, alignItems:'center', alignSelf:'center',
                marginTop:0, top:-1
              }}/>
  
              <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:5}}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
                width:140
                }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>Bawang Goreng</Text></ImageBackground>
  
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
                <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>Serasa Bawang Merah{'\n'}Goreng 75 gr</Text>
                <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>75gr / botol</Text>
              </View>
  
  
                {/* PROMO !! */}
                <View style={{padding:10, top:-20}}>
                  <Image source={require('../../assets/promotoko.png')} style={{
                    width:99,
                    height:19
                  }}/>
                </View>
  
                {/* HARGA */}
                <View style={{padding:10, top:-30}}>
                  <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp29.000</Text>
                </View>
                  
            </View>
            
           {/* BUMBU KALDU AYAN */}
           <View style={{
                width: 163,
                height: 283,
                borderWidth: 0.3,
                borderRadius: 10,
                padding: 0,
                backgroundColor:"white"
              }}>
                <Image source={require('../../assets/produkbumbukaldu.png')} style={{
                  width: 100, height: 89, alignItems: 'center', alignSelf: 'center',
                  marginTop: 10,
                }} />
  
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
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
                <View style={{ padding: 10, alignItems: 'center', top: -5 }}>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Totole Bumbu Kaldu{'\n'}Ayam 454 gr</Text>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>454 gr / pcs</Text>
                </View>
  
  
                {/* PROMO !! */}
                <View style={{ padding: 10, top: -19 }}>
                  <Image source={require('../../assets/produkterbaru.png')} style={{
                    width: 99,
                    height: 19
                  }} />
                </View>
  
                {/* HARGA */}
                <View style={{ padding: 10, top: -30 }}>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp46.400</Text>
                  
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
