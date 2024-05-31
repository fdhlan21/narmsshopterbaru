import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, TextInput, Modal } from 'react-native';
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

export default function TepungPageTreeSecond({ navigation, route }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('A-Z');

  const handleSort = (option) => {
    console.log('Sorting option selected:', option); // Debug log
    setSortOption(option);
    setModalVisible(false);
  };



  const applySort = () => {
    setModalVisible(false);
    switch (sortOption) {
      case 'default':
        // navigate to default sorting page or implement the logic
        break;
      case 'A-Z':
        navigation.navigate('TepungSatu');
        break;
      case 'Z-A':
        navigation.navigate('TepungDua');
        break;
      // Add more cases if there are additional sorting options
      default:
        break;
    }
  };

  const [search, setSearch] = useState('');
    const goBack = () => {
        navigation.goBack();
    }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
            <TouchableNativeFeedback onPress={() => navigation.navigate('KeranjangPage')} style={styles.cartButton}>
            <View style={{marginLeft:10}}>
            <Image source={require('../../assets/chartnambahdua.png')} style={{
                    width:25, height:25, 
                }}/>
            </View>
            </TouchableNativeFeedback>
          </View>
        </ImageBackground>

        <View>
            <View style={{flexDirection:'row', padding:0, }}>
                <TouchableNativeFeedback>
            <View>
                <Image source={require('../../assets/kotakkategoribiru.png')}
                style={{
                    width:53, height:49,
                
                }}/>
            </View>
                </TouchableNativeFeedback>

            <ScrollView horizontal>
                <View style={{padding:10, borderRadius:20, borderWidth:1, height:39, top:5, backgroundColor:"#E2EFFF",
                    borderColor:'#004DA8'
                }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Sembako</Text>
                </View>

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

              {/* FILTER NAMA NAIK TURUN */}
                <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
            <View style={{justifyContent:'center'}}>
                <Image source={require('../../assets/filternaikturun.png')}
                style={{
                    width:53, height:29,
                
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
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <View style={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
          
          }}>
            <View style={{flexDirection:'row', justifyContent:"center"}}>
            <Text style={{ fontSize: 18, fontFamily: fonts.primary[600] , textAlign:'center'}}>Urutkan</Text>

            <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
              <View style={{justifyContent:"center", left: 80}}>
                <Image source={require('../../assets/tombolkembalikanan.png')} style={{
                  width:7, height:13,
                }}/>
              </View>
            </TouchableNativeFeedback>
            </View>

          {/* FILTER DEFAULT */}
          <View style={{flexDirection:"row", padding:10,   justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/filternaikturun.png')}
          style={{
            width:16, height:17, top:2
          }}/>

          <Text style={{fontFamily:fonts.primary[400], marginLeft:10, fontSize:12}}>Default</Text>
          </View>

          <View style={{justifyContent:"center"}}>
          <Image source={require('../../assets/cirlepilih.png')}
          style={{width:15, height:15,

          }}/>
          </View>
  
          </View>

         
             {/* FILTER NAMA  (A KE Z) */}
             <View style={{flexDirection:"row", padding:10,   justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/filternamaaz.png')}
          style={{
            width:15, height:15, top:2
          }}/>

          <Text style={{fontFamily:fonts.primary[400], marginLeft:10, fontSize:12}}>Nama (A ke Z)</Text>
          </View>

          <TouchableNativeFeedback  onPress={() => {
  setModalVisible(false);
  navigation.navigate('TepungSatu');
}}>
          <View style={{justifyContent:"center"}}>
          <Image source={require('../../assets/cirletidakpilih.png')}
          style={{width:15, height:15,

          }}/>
          </View>
          </TouchableNativeFeedback>
  
          </View>


   {/* FILTER NAMA Z-A */}
   <View style={{flexDirection:"row", padding:10,   justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/filternamaza.png')}
          style={{
            width:15, height:15, top:2
          }}/>

          <Text style={{fontFamily:fonts.primary[400], marginLeft:10, fontSize:12}}>Nama (Z ke A)</Text>
          </View>

          
          <View style={{justifyContent:"center"}}>
          <Image source={require('../../assets/cirletidakpilih.png')}
          style={{width:15, height:15,

          }}/>
          </View>
  
          </View>

             {/* FILTER HARGA RENDAH KE TINGGI */}
             <View style={{flexDirection:"row", padding:10,   justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/filterhargarendah.png')}
          style={{
            width:20, height:13, top:2
          }}/>

          <Text style={{fontFamily:fonts.primary[400], marginLeft:10, fontSize:12}}>Harga (Terendah ke Tertinggi)</Text>
          </View>

          <TouchableNativeFeedback  onPress={() => {
  setModalVisible(false);
  navigation.navigate('TepungDua');
}}>
          <View style={{justifyContent:"center"}}>
          <Image source={require('../../assets/cirletidakpilih.png')}
          style={{width:15, height:15,

          }}/>
          </View>
          </TouchableNativeFeedback>
  
          </View>


             {/* FILTER HARGA TINGGI KE RENDAH */}
             <View style={{flexDirection:"row", padding:10,   justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
          <Image source={require('../../assets/filterhargatinggi.png')}
          style={{
            width:19, height:13, top:2
          }}/>

          <Text style={{fontFamily:fonts.primary[400], marginLeft:10., fontSize:12,}}>Harga (Tertinggi ke Terendah)</Text>
          </View>

          <View style={{justifyContent:"center"}}>
          <Image source={require('../../assets/cirletidakpilih.png')}
          style={{width:15, height:15,

          }}/>
          </View>
  
          </View>


          </View>
        </View>
      </Modal>

            <ScrollView horizontal>
                <TouchableNativeFeedback onPress={goBack}>
                <View style={{padding:10, borderRadius:20, height:39, top:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2,}}>Semua Produk</Text>
                </View>
                </TouchableNativeFeedback>

                <View style={{padding:10, borderRadius:20, height:39, top:5, marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Beras</Text>
                </View>

                <View style={{padding:10, borderRadius:20, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:13, top:-2}}>Gula</Text>
                </View>

                <View style={{padding:10, borderRadius:20, height:39, top:5,  marginLeft:5}}>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:13, top:-2,  color:colors.fontcolor}}>Tepung</Text>
                </View>

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

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10 }}>
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
              <View style={{ padding: 10, alignItems: 'center', top: -5 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Sania Tepung Terigu{'\n'}Serbaguna</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>1000 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -20}}>
                <Image source={require('../../assets/promotoko.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -35 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp12.790</Text>
                <View style={{ flexDirection: 'row' }}>
      <Image source={require('../../assets/promosania.png')} style={{
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

            {/* TEPUNG BOLA DELI */}
            <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produktepungboladeli.png')} style={{
                width: 81, height: 96, alignItems: 'center', alignSelf: 'center',
                marginTop: 10, 
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 1 , marginTop:18}}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Bola Deli Tepung Beras</Text></ImageBackground>

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
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Bola Deli Tepung Beras</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>500 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -24.6 }}>
                <Image source={require('../../assets/favoriy.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -30 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp8.490</Text>
               
              </View>

            </View>

            {/* ALINI TEPUNG SAGU */}
            <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produktepungsagu.png')} style={{
                width: 100, height: 89, alignItems: 'center', alignSelf: 'center',
                marginTop: 10,
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:25 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Alini Tepung Sagu </Text></ImageBackground>

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
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Alini Tepung Sagu</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>500 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -26 }}>
                <Image source={require('../../assets/produkterbaru.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -30 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp29.400</Text>
              </View>

            </View>

          </View>

          <MyGap jarak={20} />

          {/* BAGIAN BAWAH */}
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

              {/* SASA TEPUNG BUMBU */}
              <View style={{
              width: 163,
              height: 283,
              borderWidth: 0.3,
              borderRadius: 10,
              padding: 0
            }}>
              <Image source={require('../../assets/produksasatepug.png')} style={{
                width: 80, height: 94, alignItems: 'center', alignSelf: 'center',
                marginTop: 10, top: 0
              }} />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10 }}>
                <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{
                  padding: 10,
                  width: 145
                }}><Text style={{ fontFamily: fonts.primary[600], fontSize: 10, }}>Sasa Tepung Bumbu</Text></ImageBackground>

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
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, alignSelf: "flex-start" }}>Sasa Tepung Bumbu{'\n'}Serbaguna Original</Text>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: "gray", textAlign: 'left', alignSelf: "flex-start" }}>210 gram / pack</Text>
              </View>


              {/* PROMO !! */}
              <View style={{ padding: 10, top: -20}}>
                <Image source={require('../../assets/promomember.png')} style={{
                  width: 99,
                  height: 19
                }} />
              </View>

              {/* HARGA */}
              <View style={{ padding: 10, top: -37 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, color: colors.fontcolor }}>Rp6.200</Text>
                <View style={{ flexDirection: 'row' }}>
      <Image source={require('../../assets/promosasatepung.png')} style={{
        width: 79,
        height: 15
      }} />
    </View>
              </View>

            </View>


     {/* KOBE TEPUNG BAKWAN */}

     <TouchableNativeFeedback onPress={() => navigation.navigate('TepungKobePage')}>

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
     </TouchableNativeFeedback>

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
