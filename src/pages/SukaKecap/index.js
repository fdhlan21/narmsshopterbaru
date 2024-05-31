import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors} from '../../utils'

export default function SukaKecap({navigation}) {
  return (
   
    <View style={{flex:1,  backgroundColor:"white", }}>
    <ScrollView style={{padding:0}}>

    <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10,
        width:360, height: 97, justifyContent:'center'
    }}>
       <View style={{flexDirection:"row", padding:10,}}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
            <View>
                <Image source={require('../../assets/tombolkembali.png')}
                style={{
                    width:10, height:19,top:4
                    
                }}/>

            </View>
        </TouchableNativeFeedback>
                <Text style={{fontFamily:fonts.primary[600], fontSize:18, left:10}}>Wishlist</Text>
       </View>
        </ImageBackground>

          {/* [GRUB NOTIF] */}
      <View style={{padding:10, }}>
                
           {/* ABC KECAP PEDAS */}
           <View style={{
            width:163,
            height:283,
            borderWidth:0.3,
            borderRadius:10,
            padding:0
          }}>
            <Image source={require('../../assets/produkabckecappedas.png')} style={{
              width:112, height:111, alignItems:'center', alignSelf:'center',
              marginTop:5
            }}/>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <ImageBackground source={require('../../assets/bgteksproduk.png')} style={{padding:10, 
              
              }}><Text style={{fontFamily:fonts.primary[600],fontSize:10,}}>ABC Kecap Extra Pedas </Text></ImageBackground>

              <TouchableWithoutFeedback>
                <View style={{backgroundColor:"white", justifyContent:"center", padding:10, left:-10, borderRadius:20,
                  width:25, 
                }}>
                  <Image source={require('../../assets/lopejadi.png')} style={{
                    height:14,
                    width:15,

                  }}/>
                </View>
              </TouchableWithoutFeedback>
            </View>


            {/* JUDUL PRODUK*/}
            <View style={{padding:10, alignItems:'center'}}>
              <Text style={{fontFamily:fonts.primary[600], fontSize:12, alignSelf:"flex-start"}}>ABC Kecap Extra Pedas{'\n'}135 ml</Text>
              <Text style={{fontFamily:fonts.primary[600], fontSize:10, color:"gray", textAlign:'left', alignSelf:"flex-start"}}>135 ml / botol</Text>
            </View>


              {/* PROMO !! */}
              <View style={{padding:10, top:-17}}>
                <Image source={require('../../assets/promotoko.png')} style={{
                  width:99,
                  height:19
                }}/>
              </View>

              {/* HARGA */}
              <View style={{padding:10, top:-25}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:13, color:colors.fontcolor}}>Rp11.600</Text>
              </View>
                
          </View>
            
      </View>
    </ScrollView>
   </View>
  
  )
}