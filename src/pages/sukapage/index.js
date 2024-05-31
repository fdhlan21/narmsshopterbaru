import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors, MyDimensi} from '../../utils'
import { MyGap } from '../../components'

export default function SukaPage({navigation}) {
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

          {/* [GRUB ] */}
      <View style={{padding:10, alignItems:'center'}}>
                
         <View>
            <Image source={require('../../assets/kertaskosong.png')} style={{
                width:280,
                height:250,

            }}/>
         </View>

         <MyGap jarak={50}/>


               <TouchableWithoutFeedback onPress={() => navigation.navigate('KategoriPertama')}>
         <View>
            <Image source={require('../../assets/pemberitahuansuka.png')} style={{
                width:286,
                height:53,

            }}/>
         </View>
                </TouchableWithoutFeedback>      
      </View>
    </ScrollView>

    <View style={{padding:10,  flexDirection:"row", justifyContent:"space-around"}}>
        {/* 1 */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
          <View style={{padding:10,}}>
            <Image source={require('../../assets/home-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 2 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('KategoriPertama')}>
          <View style={{padding:10,}}>
          <Image source={require('../../assets/category-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 3 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('SukaPage')}>
          <View style={{padding:10,}}>
          <Image source={require('../../assets/wishlist.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 4 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('ProfilePage')}> 
          <View style={{padding:10,}}>
          <Image source={require('../../assets/profile-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>
      </View>
   </View>
  
  )
}