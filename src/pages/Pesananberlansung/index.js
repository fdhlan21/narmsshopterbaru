import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors} from '../../utils'

export default function PesananBerlansung({navigation}) {
  return (
   
    <View style={{flex:1,  backgroundColor:"white", }}>
    <ScrollView style={{padding:0}}>

    <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10,
        width:360, height: 97, justifyContent:'center'
    }}>
       <View style={{flexDirection:"row", padding:10,}}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('ProfilePage')}>
            <View>
                <Image source={require('../../assets/tombolkembali.png')}
                style={{
                    width:10, height:19,top:4
                    
                }}/>

            </View>
        </TouchableNativeFeedback>
                <Text style={{fontFamily:fonts.primary[600], fontSize:18, left:10}}>Pesanan Saya</Text>
       </View>
        </ImageBackground>

          {/* [GRUB NOTIF] */}
      <View style={{padding:10, }}>
        
        <ScrollView horizontal>
      <View style={{flexDirection:"row", }}>
                

                <TouchableNativeFeedback onPress={() => navigation.navigate('PesananSaya')}>
                    <View style={{marginRight:10}}>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:12,}}>Belum dibayar</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                    <View style={{marginRight:10}}>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:12,  color:colors.fontcolor}}>Pesanan Berlangsung</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                    <View style={{marginRight:10}}>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Selesai</Text>
                    </View>
                </TouchableNativeFeedback>

                    
                <TouchableNativeFeedback>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Pengembalian</Text>
                </TouchableNativeFeedback>

      </View>
        </ScrollView>
      
      <View style={{justifyContent:"center", alignItems:"center", marginTop:'10%'}}>
        <Image source={require('../../assets/pesananberlansung.png')} style={{
            width:334,
            height:386,

        }}/>
      </View>
            
      </View>
    </ScrollView>
   </View>
  
  )
}