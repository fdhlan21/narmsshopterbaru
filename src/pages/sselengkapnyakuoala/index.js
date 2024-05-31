import { View, Text, Image, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyGap } from '../../components'



export default function SelengkapnyaKoala({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
           <View style={{flexDirection:"row", padding:10}}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('SembakoPage')}>
                <View>
                    <Image source={require('../../assets/tombolkembali.png')} style={{
                        width:10,
                        height:19
                    }}/>
                </View>
            </TouchableNativeFeedback>
        </View>
    <ScrollView>
        <View style={{padding:10, }}>

        {/* GAMBAR PRODUK */}
        <View>
            <Image source={require('../../assets/produktepungkoala.png')} style={{
                width:360,
                height:317
            }}/>
        </View>

            <MyGap jarak={20}/>
        
        {/* JUDUL */}
        <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/judulprodukkoala.png')} style={{
                width:360,
                height:132
            }}/>
        </View>

   {/* INFO */}
   <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/deksripsiprodukkoala.png')} style={{
                width:360,
                height:163
            }}/>
        </View>

           {/* DEKSSATU */}
   <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/deksselengkapnyakoala.png')} style={{
                width:360,
                height:163
            }}/>
        </View>

            {/* SELENGKAPNYA */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('TepungKoalaPage')}>
                
   <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/sebunyikan.png')} style={{
                width:360,
                height:22
            }}/>
        </View>
            </TouchableNativeFeedback>

        </View>

        
    </ScrollView>
    
    <View style={{padding:10,  flexDirection:"row", justifyContent:"space-around"}}>
        {/* LIKE */}
        <View style={{ justifyContent:'center'}}>
            <Image source={require('../../assets/likeicon.png')} style={{
                width:22,
                height:20,
            }}/>
        </View>

         {/* CART */}
         <View style={{ justifyContent:'center'}}>
            <Image source={require('../../assets/carticon.png')} style={{
                width:20,
                height:20,
            }}/>
        </View>

         {/* BUTTON */}
         <TouchableNativeFeedback onPress={() => navigation.navigate('SelengkapnyaKoalaDua')}>
         <View>
            <Image source={require('../../assets/tombolkeranjang.png')} style={{
                width:206,
                height:35,
            }}/>
        </View>
         </TouchableNativeFeedback>
    </View>

    
    </View>
  )
}