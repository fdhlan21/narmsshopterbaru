import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback, Modal,
    StyleSheet
 } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors} from '../../utils'
import { MyGap } from '../../components'
import { TextInput } from 'react-native'

export default function KeranjangPage({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
  

    
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
      <View style={{padding:10, }}>
                
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>

                    <View style={{}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>2 produk terpilih</Text>
                    </View>

                    <View style={{}}>
                    <Text style={{fontFamily:fonts.primary[700], fontSize:14, color:colors.fontcolor}}>Hapus</Text>
                    </View>
                </View>



                <View style={{marginTop:20}}>
                    <Image source={require('../../assets/produkkeranjang.png')} style={{
                        width:325,
                        height:257,

                    }}/>
                </View>
              
      </View>
    </ScrollView>
    <View style={{padding:10, flexDirection:"row", justifyContent:"space-around", borderTopWidth:1,}}>

                    <View>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:17}}>Total harga</Text>
                        <Text style={{fontFamily:fonts.primary[700], fontSize:17, top:-5, color:colors.fontcolor}}>Rp101.100</Text>
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
                        <TouchableNativeFeedback onPress={() => navigation.navigate('BuatPesananPage')}>
                            <View>
                                <Image source={require('../../assets/tombolbuatpesanan.png')} style={{
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
    buttonContainer: {
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 8,
      alignSelf: 'center',
      marginTop: 20,
    },
    buttonText: {
      fontFamily: fonts.primary[600],
      fontSize: 16,
      color: '#fff',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      elevation: 5,
      width: '80%',
    },
    modalText: {
      fontFamily: fonts.primary[600],
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      padding: 10,
      borderRadius: 8,
      width: '45%',
      alignItems: 'center',
    },
  });