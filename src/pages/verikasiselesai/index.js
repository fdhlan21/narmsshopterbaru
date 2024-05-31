import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'

export default function VerivikasiOTP({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
     <View style={{
        padding:10,
        alignItems:"center"
     }}>

        <View style={{justifyContent:"center", alignSelf:"center", marginTop:'50%'}}>
            <Image source={require('../../assets/done.png')} style={{
                width:150, height:150, 

            }}/>
        </View>
        
        <View style={{marginTop:'10%'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/2.1, textAlign:'center'}}>Permintaan Terkirim!</Text>
            <Text style={{fontFamily:fonts.primary[300], fontSize:MyDimensi/4.1, textAlign:"center"}}>Verifikasi berhasil</Text>
        </View>

        <View style={{marginTop:'20%'}}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
                <View style={{padding:10, backgroundColor:colors.fontcolor, borderRadius:10, width:169,}}>
                    <Text style={{color:"white", fontFamily:fonts.primary[600] ,fontSize:MyDimensi/3.5,
                    textAlign:"center"
                        
                    }}>Selesai</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

     </View>
    </View>
  )
}