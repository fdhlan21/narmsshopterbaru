import { View, Text, Image, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyGap } from '../../components'



export default function TepungKobeTiga({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
           <View style={{flexDirection:"row", padding:10}}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('TepungPage')}>
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
            <Image source={require('../../assets/selengkapnyakobesatu.png')} style={{
                width:360,
                height:179
            }}/>
        </View>

            {/* SELENGKAPNYA */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('TepungKobePage')}>

   <View style={{alignItems:"center"}}>
            <Image source={require('../../assets/sebunyikan.png')} style={{
                width:360,
                height:22
            }}/>
        </View>
            </TouchableNativeFeedback>

        </View>

        
    </ScrollView>
    
    <View style={{padding:10,  flexDirection:"row",}}>
    <TouchableNativeFeedback onPress={() =>navigation.navigate('TepungKobeDua')}>

<Image source={require('../../assets/kobebelidua.png')} style={{
    width:360,
    height:74,

}}/>
</TouchableNativeFeedback>
    </View>


    
    </View>
  )
}