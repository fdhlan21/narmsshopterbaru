import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground, TextInput } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {

  

  return (
   <View style={{flex:1, backgroundColor:'white', position:'relative'}}>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <ImageBackground source={require('../../assets/bglogin.png')} style={{
      flex:1, height:'100%', width:'100%'
    }}>

      <View  style={{padding:10,}}>

        <View style={{ alignItems:'center', marginTop:'10%'}}>
          <Image source={require('../../assets/icon.png')} style={{
            width:205,
            height:88,

          }}/>
        </View>

        <View style={{padding:10,  marginTop:'10%'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/2.5, color:colors.fontcolor}}>Masuk</Text>


            {/* TEXT INPUT MASUKAN NO HP */}
            <Text style={{fontFamily:fonts.primary[400], fontSize: MyDimensi/ 4.1}}><Text style={{color:"red"}}>*</Text> Nomor Handphone</Text>
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

            <View style={{alignItems:"center", marginTop:'1%'}}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
          <View style={{padding:10, 
            
          }}>
           <Image source={require('../../assets/tombollogin.png')}
           style={{
            width:169, height:36
           }}/>
          </View>
        </TouchableNativeFeedback>
            </View>


            <View style={{flexDirection:"row", padding:10, marginTop:'20%', alignItems:"center"}}>
                <Image source={require('../../assets/lock.png')}
                style={{width:18, height:20, }}/>
                <Text style={{fontFamily:fonts.primary[400], fontSize:12, marginLeft:5, }}>Dengan menggunakan layanan Narma Shop, Anda{'\n'}
                telah menyetujui <Text style={{color:colors.fontcolor}}>Syarat dan Ketentuan</Text> serta{'\n'}<Text 
                style={{color:colors.fontcolor}}>
                Kebijakan Privasi</Text> kami.</Text>
            </View>




              <View style={{padding:10, alignItems:'center'}}>
                <Text style={{fontFamily:fonts.primary[600], textAlign:'center'}}>Atau Masuk Dengan</Text>
                <View style={{flexDirection:"row"}}>
                  {/* FACEBOOK */}
                  <TouchableOpacity>
                  <Image source={require('../../assets/facebookbutton.png')} style={{
                      width:138,
                      height:39
                    }}/>
                  </TouchableOpacity>
               
                  {/* GOOGLE */}
                  <TouchableOpacity>
                  <Image source={require('../../assets/googlebutton.png')} style={{
                      width:138,
                      height:39
                    }}/>
                  </TouchableOpacity>
                </View>
              </View>

      </View>

    </ImageBackground>
    </ScrollView>
    <View style={{padding:10,alignItems:'center',   top:-10}}>
      <TouchableNativeFeedback onPress={() =>navigation.navigate('Register')}>
        <View> 
          <Text style={{fontFamily:fonts.primary[600]}}>Belum punya Akun ? <Text style={{color:colors.fontcolor}}>Daftar Sekarang</Text></Text>
        </View>
      </TouchableNativeFeedback>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({});
