import { View, Text, Image, ScrollView, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MyGap } from '../../components'
import { colors } from '../../utils'



export default function TepungKobeDua({navigation}) {
    const [count, setCount] = useState(1);
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
           <View style={{flexDirection:"row", padding:10}}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('TepungPageTreeSecond')}>
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
            <Image source={require('../../assets/chartnambahdua.png')} style={{
                width:32,
                height:32,
            }}/>
        </View>
         </TouchableNativeFeedback>

         {/* BUTTON */}
         <View style={{ padding: 10, borderRadius: 20, borderWidth: 1, flexDirection: 'row', alignItems: 'center',
            borderColor:colors.fontcolor, 
          }}>
          <TouchableOpacity onPress={() => setCount(count > 1 ? count - 1 : 1)}>
            <Image source={require('../../assets/minus.png')} style={{
                height:24,
                width:42,

            }}/>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 15}}>{count}</Text>
          </View>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Image source={require('../../assets/plus.png')} style={{
                height:24,
                width:42,
                
            }}/>
          </TouchableOpacity>
        </View>
    </View>


    
    </View>
  )
}