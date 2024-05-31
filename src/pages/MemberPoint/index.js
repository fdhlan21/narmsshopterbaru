import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors} from '../../utils'
import { MyGap } from '../../components'

export default function MemberPoint({navigation}) {
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
                <Text style={{fontFamily:fonts.primary[600], fontSize:18, left:10}}>Point Saya</Text>
       </View>
        </ImageBackground>

          {/* [GRUB NOTIF] */}
      <View style={{padding:10, }}>

         <View style={{alignItems:"center"}}>
        <Image source={require('../../assets/jumlahpoin.png')} style={{
            width:150,
            height:156,
        }}/>    
        </View>     


        <MyGap jarak={50}/>
         <View style={{alignItems:"center"}}>
        <Image source={require('../../assets/riwayattransaksi.png')} style={{
            width:309,
            height:457,
        }}/>    
        </View>      
         
      </View>
    </ScrollView>
   </View>
  )
}