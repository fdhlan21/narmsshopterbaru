import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback, Modal,
    StyleSheet
 } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors} from '../../utils'
import { MyGap, MyRadio } from '../../components'
import { TextInput } from 'react-native'
import { MYAPP } from '../../utils/localStorage'
import { TouchableOpacity } from 'react-native'

export default function DetailInformasi({navigation}) {
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
          <Text style={{fontFamily:fonts.primary[600], fontSize:15}}>Detail Informasi</Text>
        </View>
        </ImageBackground>

          {/* [GRUB ] */}
      <View style={{padding:0, }}>
                
             {/* DETAIL INFORMASI */}
             <View style={{padding:10, borderBottomWidth:1,}}>

                <View style={{flexDirection:"row", padding:10, justifyContent:"space-between"}}>
                    <View>
                <Text style={{fontFamily:fonts.primary[700], }}>Detail Informasi</Text>
                    </View>

                    <View>
                    <TouchableNativeFeedback>
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
                        <Text style={{fontFamily:fonts.primary[400], fontSize:12, color:'#595F5C'}}>Della Chintiya - 081234567890</Text>
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
                        <Text style={{fontFamily:fonts.primary[400], fontSize:12, color:'#595F5C'}}>Jalan Kramat, Rt 04/02 No 22A,  Kota Wisata</Text>
                    </View>
                </View>


             </View>

      </View>
    </ScrollView>

                                    <View style={{padding:10, alignItems:"center", marginBottom:20}}>
                                    <TouchableNativeFeedback onPress={() => navigation.navigate('TambahAlamat')}>
                                        <View>
                                            <Image source={require('../../assets/tomboltambahalamat.png')} style={{
                                                width:183, height:38
                                            }}/>
                                        </View>
                                    </TouchableNativeFeedback>
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
      