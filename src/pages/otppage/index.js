import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    TouchableNativeFeedback,
    TextInput,
} from 'react-native';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts, windowWidth } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker, MyCalendar, MyCalendarSecond, MyHeader } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { apiURL, api_token, MYAPP } from '../../utils/localStorage';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { Icon } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function OTPPage({ navigation }) {
   


    return (
        <View style={{flex:1, backgroundColor:'white'}}>
        <ScrollView>
          <View  style={{padding:10,}}>
    
            <View style={{ alignItems:'center', marginTop:'10%'}}>
              <Image source={require('../../assets/icon.png')} style={{
                width:205,
                height:88,
    
              }}/>
            </View>
    
            <View style={{padding:10,  marginTop:'10%'}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/2.5, color:colors.fontcolor}}>Daftar</Text>
    
                   {/* TEXT INPUT MASUKAN NAMA PENGGUNA */}
                   <Text style={{fontFamily:fonts.primary[400], fontSize: MyDimensi/ 4.1}}>Nama Pengguna</Text>
                <TextInput style={{
                  color:'black',
                  backgroundColor:'white',
                  borderWidth:1,
                  borderRadius:10,
                  fontFamily:fonts.primary[400],
                  padding:10,
                  paddingLeft:10,
                  paddingRight:10,
                  height:45,
                  fontSize:12
                }} placeholder='Masukan Nama'/>
                <MyGap jarak={10}/>
                {/* TEXT INPUT MASUKAN NO HP */}
                <Text style={{fontFamily:fonts.primary[400], fontSize: MyDimensi/ 4.1}}>Nomor Handphone</Text>
                <TextInput style={{
                  color:'black',
                  backgroundColor:'white',
                  borderWidth:1,
                  borderRadius:10,
                  fontFamily:fonts.primary[400],
                  padding:10,
                  paddingLeft:10,
                  paddingRight:10,
                  height:45,
                  fontSize:12
                }} placeholder='Masukan Nomor Handphone Yang Terdaftar' keyboardType='numeric'/>
            </View>
    
                <View style={{alignItems:"center", marginTop:'5%'}}>
            <TouchableNativeFeedback>
              <View style={{padding:10, backgroundColor:colors.fontcolor,
                borderRadius:10, 
                width:169,
                
              }}>
                  <Text style={{fontFamily:fonts.primary[600], color:"white", 
                    fontSize:MyDimensi/4.1,
                    textAlign:"center",
                  }}>Daftar</Text>
              </View>
            </TouchableNativeFeedback>
                </View>
    
    
                <View style={{flexDirection:"row", padding:10, marginTop:'20%'}}>
                    <Image source={require('../../assets/lock.png')}
                    style={{width:18, height:20, }}/>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/5.5, marginLeft:5}}>Dengan menggunakan layanan Narma Shop, Anda
                    telah menyetujui <Text style={{color:colors.fontcolor}}>Syarat dan Ketentuan</Text>serta <Text 
                    style={{color:colors.fontcolor}}>
                    Kebijakan Privasi</Text> kami.</Text>
                </View>
    
    
    
    
                  <View style={{padding:10, alignItems:'center'}}>
                    <Text style={{fontFamily:fonts.primary[600], textAlign:'center'}}>Atau Masuk Dengan</Text>
                    <View>
                      {/* FACEBOOK */}
                      <TouchableOpacity>
                      <Image source={require('../../assets/facebookbutton.png')} style={{
                          width:138,
                          height:39
                        }}/>
                      </TouchableOpacity>
                   
                      {/* GOOGLE */}
                      <TouchableOpacity>
    
                      </TouchableOpacity>
                    </View>
                  </View>
    
          </View>
    
        </ScrollView>
        <View style={{padding:10,alignItems:'center'}}>
          <TouchableNativeFeedback onPress={() =>navigation.navigate('Login')}> 
            <View> 
              <Text style={{fontFamily:fonts.primary[400]}}>Sudah punya Akun ? <Text style={{color:colors.fontcolor}}>Masuk Sekarang</Text></Text>
            </View>
          </TouchableNativeFeedback>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    page: {
    position:"relative"
   

    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});
