import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { fonts, colors} from '../../utils'
import { MyGap, MyPicker } from '../../components'

export default function AkunMemberSecond({navigation}) {
    const [selectedGender, setSelectedGender] = useState('Perempuan');
    const [selectedToko, setSelectedToko] = useState('');
  return (
   
    <View style={{flex:1,  backgroundColor:"white", }}>
    <ScrollView style={{padding:0}}>

    <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10,
        width:360, height: 97, justifyContent:'center'
    }}>
       <View style={{flexDirection:"row", padding:10,}}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('KeranjangPageSecond')}>
            <View>
                <Image source={require('../../assets/tombolkembali.png')}
                style={{
                    width:10, height:19,top:4
                    
                }}/>

            </View>
        </TouchableNativeFeedback>
                <Text style={{fontFamily:fonts.primary[600], fontSize:18, left:10}}>Profile</Text>
       </View>
        </ImageBackground>

          {/* [GRUB ] */}
      <View style={{padding:10,}}>
                
        {/* FOTO */}

        <View style={{alignItems:'center'}}>
                <Image source={require('../../assets/profileku.png')}
                 style={{width:108, height:102, }}/>
        </View>
            
            <MyGap jarak={20}/>
            <View>
            <Text style={{fontFamily:fonts.primary[600], fontSize:12, padding:10}}>Nama Lengkap</Text>
            <MyGap jarak={0}/>
        <TextInput style={{ borderWidth:1,  borderRadius:10, fontFamily:fonts.primary[600], fontSize:12, height:40, paddingLeft:10}} placeholder='Della Chintiya'/>
            </View>

            <View>
            <Text style={{fontFamily:fonts.primary[600], fontSize:12, padding:10}}>Nomor Telepon</Text>
            <MyGap jarak={0}/>
        <TextInput style={{ borderWidth:1,  borderRadius:10, fontFamily:fonts.primary[600], fontSize:12, height:40, paddingLeft:10}} placeholder='081234567890'/>
            </View>

            <View>
            <Text style={{fontFamily:fonts.primary[600], fontSize:12, padding:10}}>Email</Text>
            <MyGap jarak={0}/>
        <TextInput style={{ borderWidth:1,  borderRadius:10, fontFamily:fonts.primary[600], fontSize:12, height:40, paddingLeft:10}} placeholder='della.chntya@gmail.com'/>
            </View>

                <MyGap jarak={10}/>
                
                {/* JENIS KELAMIN */}
                <View>
                <Text style={{fontFamily:fonts.primary[600], fontSize:12, padding:10}}>Jenis Kelamin</Text>
    
                <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
                  
                  <View>
                <TouchableOpacity
            style={styles.radioButtonContainer}
            onPress={() => setSelectedGender('Laki-Laki')}
          >
            <View style={[
              styles.radioButton,
              selectedGender === 'Laki-Laki' && styles.radioButtonSelected
            ]}/>
            <Text style={styles.genderText}>Laki-Laki</Text>
          </TouchableOpacity>
                  </View>
            
            <View style={{marginLeft:10}}>
          <TouchableOpacity
            style={styles.radioButtonContainer}
            onPress={() => setSelectedGender('Perempuan')}
          >
            <View style={[
              styles.radioButton,
              selectedGender === 'Perempuan' && styles.radioButtonSelected
            ]}/>
            <Text style={styles.genderText}>Perempuan</Text>
          </TouchableOpacity>

            </View>
                </View>

          <MyGap jarak={10}/>
                </View>

                {/* ALAMT */}
                <View>
                <Text style={{fontFamily:fonts.primary[600], fontSize:12, padding:10}}>Alamat Pengiriman</Text>
                <MyGap jarak={0}/>
        <TextInput style={{ borderWidth:1,  borderRadius:10, fontFamily:fonts.primary[600], fontSize:12, height:40, paddingLeft:10}} placeholder='Jalan Kramat Rt 04/02 No.22A'/>
                </View>
                <MyGap jarak={10}/>

                 {/* TOKO */}
                 <View>
                <Text style={{fontFamily:fonts.primary[600], fontSize:12, padding:10}}>Toko Narma Terdekat</Text>
                <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setSelectedToko('Narma Toserba Narogong')}
            >
              <View
                style={[
                  styles.radioButton,
                  selectedToko === 'Narma Toserba Narogong' && styles.radioButtonSelected,
                ]}
              />
              <Text style={styles.genderText}>Narma Toserba Narogong</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setSelectedToko('Narma Toserba Djole')}
            >
              <View
                style={[
                  styles.radioButton,
                  selectedToko === 'Narma Toserba Djole' && styles.radioButtonSelected,
                ]}
              />
              <Text style={styles.genderText}>Narma Toserba Djole</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setSelectedToko('Narma Toserba Harvest City')}
            >
              <View
                style={[
                  styles.radioButton,
                  selectedToko === 'Narma Toserba Harvest City' && styles.radioButtonSelected,
                ]}
              />
              <Text style={styles.genderText}>Narma Toserba Harvest City</Text>
            </TouchableOpacity>
                
          
                </View>
            <MyGap jarak={50}/>
                {/* BUTOON SIMPAN */}
                <View style={{alignItems:'center'}}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('KeranjangPageSecond')}>
                        <View>
                            <Image source={require('../../assets/buttonsimpan.png')}
                            style={{width:166, height:38,}}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
      </View>
    </ScrollView>
   </View>
  
  );

}


const styles = StyleSheet.create({
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 10,
    },
    radioButtonSelected: {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
    },
    genderText: {
      fontFamily: fonts.primary[600],
      fontSize: 12,
      color: '#000',
    },
  });