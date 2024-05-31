import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyGap } from '../../components'

export default function NextPageSatu({navigation}) {
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
        <Image source={require('../../assets/nextpage_1.png')} 
        style={{
            width:270,
            height:328,
        }}/>
    <MyGap jarak={20}/>
<Image source={require('../../assets/titiktiga.png')} 
        style={{
            width:61,
            height:15,
        }}/>

        <Text style={{fontFamily:fonts.primary[800], fontSize:MyDimensi/2.1, 
        textAlign:"center", color:colors.fontcolor, marginTop:80}}>
        Hallo Sobat Narma !!{'\n'}
        Selamat datang di {'\n'}
        NARMA SHOP{'\n'}

        </Text>
     </View>
        </View>
        </ScrollView>
        <View style={{padding:10, flexDirection:'row', justifyContent:'flex-end'}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('NextPageDua')}>
                <View>
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