import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'

export default function Pesanan({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
        <View style={{padding:10, alignItems:"center", marginTop:50}}>
            <View>
                <Image source={require('../../assets/iconpesanan.png')} style={{
                    width:250,
                    height:270
                }}/>
            </View>
        </View>

        <View style={{alignItems:'center', marginTop:100}}>
            <TouchableNativeFeedback onPress={() =>navigation.navigate('PesananBerlansung')}>
                <View>
                    <Image source={require('../../assets/pesananberhasildibiuat.png')} style={{
                        width:262,
                        height:45,
                    }}/>
                </View>
            </TouchableNativeFeedback>
        </View>
    </View>
  )
}