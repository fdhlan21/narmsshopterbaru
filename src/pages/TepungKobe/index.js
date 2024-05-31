import { View, Text, Image, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyGap } from '../../components'



export default function TepungKobePage({navigation}) {
    const Back = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
           <View style={{flexDirection:"row", padding:10}}>
            <TouchableNativeFeedback onPress={Back}>
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
            <Image source={require('../../assets/produktepungkobe.png')} style={{
                width:360,
                height:317
            }}/>
        </View>

            <MyGap jarak={20}/>
        
        {/* JUDUL */}
        <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/judulprodukkobe.png')} style={{
                width:360,
                height:142
            }}/>
        </View>

   {/* INFO */}
   <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/infoprodukkobe.png')} style={{
                width:360,
                height:133
            }}/>
        </View>

           {/* DEKSSATU */}
   <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/deksripsiprodukkobe.png')} style={{
                width:360,
                height:179
            }}/>
        </View>

            {/* SELENGKAPNYA */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('SelengkapnyaKobeSatu')}>

   <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/selengkapnyasatu.png')} style={{
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
         <TouchableNativeFeedback>
            
         <View style={{ justifyContent:'center'}}>
            <Image source={require('../../assets/chartsatu.png')} style={{
                width:30,
                height:30,
            }}/>
        </View>
         </TouchableNativeFeedback>

         {/* BUTTON */}
         <TouchableNativeFeedback  onPress={() => navigation.navigate('TepungKobeDua')}>
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