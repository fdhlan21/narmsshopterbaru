import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyGap } from '../../components'

export default function NextPageTiga({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:"white",}}>
        <View style={{padding:10, }}>
            <Image source={require('../../assets/icon.png')} style={{
                width:60,
                height:25,
            }}/>
        </View>
        <ScrollView>
        <View style={{padding:10}}>
     <View style={{padding:10, alignItems:"center"}}>
        <Image source={require('../../assets/nextpage_3.png')} 
        style={{
            width:262,
            height:283,
        }}/>

<MyGap jarak={70}/>
<Image source={require('../../assets/titiktigatiga.png')} 
        style={{
            width:61,
            height:15,
        }}/>


        <Text style={{fontFamily:fonts.primary[800], fontSize:MyDimensi/2.2, 
        textAlign:"center", color:colors.fontcolor, marginTop:80}}>
  Nikmati Fitur Terbaru {'\n'}
  dan Tampilan yang {'\n'}
  Mengagumkan !! {'\n'}
        </Text>
     </View>
        </View>
        </ScrollView>
        <View style={{padding:10,  flexDirection:'row', justifyContent:'space-between'}}>
        {/* BACK BUTTON */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('NextPageDua')}>
                <View style={{}}>
                    <Image source={require('../../assets/backbutton.png')}
                    style={{
                        width:49,
                        height:44,
                         
                    }}/>
                </View>
            </TouchableWithoutFeedback>
           

           {/* NEXT BUTTON */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>

                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5}}>
                    <Text style={{fontFamily:fonts.primary[400], color:colors.fontcolor,}}>Mulai</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
       
    </View>
  )
}