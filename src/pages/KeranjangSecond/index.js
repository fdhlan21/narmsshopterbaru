import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback, Modal,
    StyleSheet,
    TouchableOpacity
 } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors} from '../../utils'
import { MyGap } from '../../components'
import { TextInput } from 'react-native'

export default function KeranjangPageSecond({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleLogout = () => {
       navigation.navigate('Login')
      };
  return (
   
    <View style={{flex:1,  backgroundColor:"white", }}>
    <ScrollView style={{padding:0}}>

    <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10,
        width:360, height: 97,  flexDirection:"row"
    }}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
            <View style={{justifyContent:"center"}}>
                <Image source={require('../../assets/tombolkembali.png')}
                style={{
                    width:10, height:19,top:4
                    
                }}/>

            </View>
        </TouchableNativeFeedback>


        <View style={{justifyContent:"center", top:5, marginLeft:10}}>
          <Text style={{fontFamily:fonts.primary[600], fontSize:15}}>Keranjang</Text>
        </View>
        </ImageBackground>

          {/* [GRUB ] */}
      <View style={{padding:0, }}>
                
             {/* DETAIL INFORMASI */}
             <View style={{padding:10,}}>

                <View style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                    <View>
                <Text style={{fontFamily:fonts.primary[700], }}>Detail Informasi</Text>
                    </View>

                    <View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('TambahAlamat')}>
                            <View>
                                <Image source={require('../../assets/tombolkembalikanan.png')} style={{
                                    width:9,
                                    height:19,

                                }}/>
                            </View>
                    </TouchableNativeFeedback>
                    </View>
                </View>


                <View style={{ flexDirection:"row"}}>
                    <View>
                                    <Image source={require('../../assets/user.png')} style={{
                                        width:20, height:20, 
                                    }}/>
                    </View>

                    <View style={{marginLeft:10}}>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Informasi Pembeli</Text>
                        <Text style={{fontFamily:fonts.primary[400], fontSize:12, color:'#595F5C'}}>Putri Puspa - 081234567890</Text>
                    </View>
                </View>
                
                <MyGap jarak={10}/>
                <View style={{ flexDirection:"row"}}>
                    <View>
                                    <Image source={require('../../assets/pointmap.png')} style={{
                                        width:20, height:20, 
                                    }}/>
                    </View>

                    <View style={{marginLeft:10}}>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Alamat Pengiriman</Text>
                        <Text style={{fontFamily:fonts.primary[400], fontSize:12, color:'#595F5C'}}>Jalan Anggrek 2 No 22 A, Cileungsi</Text>
                    </View>
                </View>


             </View>

                                    <MyGap jarak={10}/>
                  
             {/* TOKO PILIHAN */}
             <View style={{padding:10, }}>

                <View style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                    <View>
                <Text style={{fontFamily:fonts.primary[700], }}>Toko Pilihan</Text>
                    </View>

                    <View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('AkunMemberSecond')}>
                            <View>
                                <Image source={require('../../assets/tombolkembalikanan.png')} style={{
                                    width:9,
                                    height:19,

                                }}/>
                            </View>
                    </TouchableNativeFeedback>
                    </View>
                </View>


                <View style={{ flexDirection:"row"}}>
                    <View style={{justifyContent:"center"}}>
                                    <Image source={require('../../assets/icontoko.png')} style={{
                                        width:40, height:40, 
                                    }}/>
                    </View>

                    <View style={{marginLeft:10}}>
                        <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>Narma Toserba Narogong</Text>
                        <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>Jalan Raya Narogong No.18, Cileungsi, Jawa Barat</Text>
                      <View style={{flexDirection:"row"}}>
                        <View style={{top:1}}>
                                    <Image source={require('../../assets/iconinfo.png')} style={{
                                        width:14, height:14, 
                                    }}/>
                        </View>

                        <View style={{marginLeft:5}}>
                                    <Text  style={{fontFamily:fonts.primary[400], fontSize:12, color:'#6A6865'}}>Jarak Toko ke tempat tujuan: 4 Km</Text>
                        </View>


                      </View>
                    </View>
                </View>

             </View>

             <MyGap jarak={10}/>
             {/* PENGIRIMAN */}
             <View style={{padding:10, }}>

                <View style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                    <View>
                <Text style={{fontFamily:fonts.primary[700], }}>Pengiriman</Text>
                    </View>

                   
                </View>

{/* RADIO  BUTTON */}

                <View style={{}}>
                    {/* OPSI 1 */}
  <View style={{ flexDirection: "row", justifyContent:"space-between"}}>
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity
      onPress={() => setSelectedValue("option1")}
      style={[styles.radioButtonAtas, selectedValue === "option1" && styles.radioButtonSelected]}
    >
      {selectedValue === "option1" && <View style={styles.radioButtonInner} />}
    </TouchableOpacity>

    <Image source={require('../../assets/narmashop.png')} style={{
        width:45,
        height:33
    }}/>
    <View style={{marginLeft:10}}>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12}}>Ambil di Toko</Text>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12, color: '#6A6865'}}>08.00 - 20.00</Text>
    </View>
    </View>

    <View>
        <Text style={{ fontFamily: fonts.primary[400], fontSize:14}}>Gratis</Text>
    </View>
  </View>

  <MyGap jarak={10}/>

   {/* OPSI 2 */}
   <View style={{ flexDirection: "row", justifyContent:"space-between"}}>
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity
      onPress={() => setSelectedValue("option2")}
      style={[styles.radioButtonBawah, selectedValue === "option2" && styles.radioButtonSelected]}
    >
      {selectedValue === "option2" && <View style={styles.radioButtonInner} />}
    </TouchableOpacity>

    <Image source={require('../../assets/kurirnarma.png')} style={{
        width:40,
        height:39
    }}/>
    <View style={{marginLeft:10}}>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12}}>Kurir Narma</Text>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12, color: '#6A6865'}}>Maksimal Jarak 10 Km</Text>
    </View>
    </View>

    <View>
        <Text style={{ fontFamily: fonts.primary[400], fontSize:14}}>Gratis</Text>
    </View>
  </View>
</View>


             </View>

             <MyGap jarak={10}/>
                {/* DAFTAR PRODUK */}
                <View style={{padding:0, }}>

<View style={{left:-10}}>
   <Image source={require('../../assets/daftarproduk.png')} style={{
    width:360,
    height:294,
   }}/>
</View>

</View>


<MyGap jarak={10}/>
                  
                  {/* CATATAN PESANAN */}
                  <View style={{padding:10, }}>
     
                     <View style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                         <View>
                     <Text style={{fontFamily:fonts.primary[700], }}>Catatan Pesanan</Text>
                         </View>
                     </View>
     
     
                     <View style={{}}>
                        <View>
                            <TextInput style={{ borderWidth:1, borderRadius:10, borderColor:'#949594',
                            paddingLeft:10, paddingRight:10, fontSize:12, fontFamily:fonts.primary[400], color:'black', 
                            }}
                            placeholder='Tambahkan catatan pemesanan' placeholderTextColor='gray'/>
                        </View>
                     </View>
     
                  </View>


                  <MyGap jarak={10}/>
                  
                  {/* VOUCER */}
                  <View style={{padding:10, }}>
     
                     <View style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                         <View>
                     <Text style={{fontFamily:fonts.primary[700], }}>Voucher</Text>
                         </View>
                     </View>
     
     
                     <View style={{}}>
                        <View>
                            <TextInput style={{ borderWidth:1, borderRadius:10, borderColor:'#949594',
                            paddingLeft:10, paddingRight:10, fontSize:12, fontFamily:fonts.primary[400], color:'black', 
                            }}
                            placeholder='Tambahkan Voucher' placeholderTextColor='gray'/>
                        </View>
                     </View>
     
                  </View>

                  <MyGap jarak={10}/>

                  <View style={{padding:0, }}>

                  <TouchableNativeFeedback onPress={() =>navigation.navigate('MetodePembayaran')}>
<View style={{left:-10}}>
    
   <Image source={require('../../assets/metodepembayaran.png')} style={{
    width:360,
    height:47,
   }}/>
</View>
</TouchableNativeFeedback>

</View>

<MyGap jarak={10}/>

<View style={{padding:0, }}>

<View style={{left:-10}}>
<Image source={require('../../assets/rincianpesanan.png')} style={{
width:360,
height:146,
}}/>
</View>

</View>


      </View>
    </ScrollView>
    <View style={{padding:10, flexDirection:"row", justifyContent:"space-around", borderTopWidth:1,}}>

                    <View>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:17}}>Total harga</Text>
                        <Text style={{fontFamily:fonts.primary[700], fontSize:17, top:-5, color:colors.fontcolor}}>Rp100.000</Text>
                        <View style={{flexDirection:"row", top:-5}}>

                            <View style={{justifyContent:"center", top:-2, marginRight:5}}>
                            <Image source={require('../../assets/koin.png')} style={{
                                width:15,
                                height:15,
                            }}/>
                            </View>
                            
                            <View style={{justifyContent:"center"}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:13}}>1 Poin</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{justifyContent:"center"}}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate('Pesanan')}>
                            <View>
                                <Image source={require('../../assets/tombollanjutkanpembelian.png')} style={{
                                    width:166,
                                    height:38,
                                }}/>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

    </View>
   </View>
  
  )
}


const styles = StyleSheet.create({
    radioButtonAtas: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#848484',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
     
      
    },

       radioButtonBawah: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#848484',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
      top:10
      
    },
    radioButtonSelected: {
      backgroundColor: 'transparent',
    },
    radioButtonInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: colors.fontcolor,
    },
    radioText: {
      fontSize: 16,
      fontFamily: 'Helvetica',
      color: '#000',
    },
  });
  