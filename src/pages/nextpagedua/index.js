import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyGap } from '../../components'

export default function NextPageDua({navigation}) {
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
        <Image source={require('../../assets/nextpage_2.png')} 
        style={{
            width:300,
            height:286,
        }}/>

<MyGap jarak={60}/>
<Image source={require('../../assets/titiktigadua.png')} 
        style={{
            width:61,
            height:15,
        }}/>

        <Text style={{fontFamily:fonts.primary[800], fontSize:MyDimensi/2.4, 
        textAlign:"center", color:colors.fontcolor, marginTop:50}}>
        Kualitas Terbaik, {'\n'}
        Harga Terjangkau, {'\n'}
        Temukan Semua yang {'\n'}
        Anda Butuhkan di Sini!
        </Text>
     </View>
        </View>
        </ScrollView>
        <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
        {/* BACK BUTTON */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('NextPageSatu')}>
                <View style={{}}>
                    <Image source={require('../../assets/backbutton.png')}
                    style={{
                        width:49,
                        height:44,
                         
                    }}/>
                </View>
            </TouchableWithoutFeedback>
           

           {/* NEXT BUTTON */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate('NextPageTiga')}>

                <View style={{}}>
                    
               

                    <Image source={require('../../assets/nextbutton.png')}
                    style={{
                        width:49,
                        height:44,
                         
                    }}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
       
    </View>
  )
}