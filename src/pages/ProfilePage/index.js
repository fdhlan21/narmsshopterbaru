import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TouchableWithoutFeedback, Modal,
    StyleSheet
 } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { fonts, colors, MyDimensi} from '../../utils'
import { MyGap } from '../../components'
import { TextInput } from 'react-native'

export default function ProfilePage({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
  
    const handleLogout = () => {
       navigation.navigate('Login')
      };
  return (
   
    <View style={{flex:1,  backgroundColor:"white", }}>
    <ScrollView style={{padding:0}} scrollEnabled={false}>

    <ImageBackground source={require('../../assets/bgtopheader.png')} style={{padding:10,
        width:360, height: 97,  flexDirection:"row"
    }}>
       <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
            <View style={{justifyContent:"center"}}>
                <Image source={require('../../assets/tombolkembali.png')}
                style={{
                    width:10, height:19,top:4
                    
                }}/>

            </View>
        </TouchableNativeFeedback>


        <View style={{justifyContent:"center", top:5, marginLeft:10}}>
          <Text style={{fontFamily:fonts.primary[600], fontSize:15}}>Profil</Text>
        </View>
        </ImageBackground>

          {/* [GRUB ] */}
      <View style={{padding:10, }}>
                
                {/* MEMBER CARD */}
                <View style={{padding:10, alignItems:'center'}}>
                    <Image source={require('../../assets/membercard.png')}
                    style={{
                        width:328,
                        height:142,
                    }}/>
                </View>

                {/* INFORMASI AKUN */}
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:15}}>Informasi Akun</Text>
                    {/* PROFILE */}
                    <TouchableNativeFeedback onPress={() => navigation.navigate('AkunMember')}>
                        <Image source={require('../../assets/profilesaya.png')} style={{
                            width:118,
                            height:32,
                            
                          }}/>
                    </TouchableNativeFeedback>
                          <MyGap jarak={10}/>
                          <View style={{padding:1, backgroundColor:'#C8CDD1'}}></View>
                          <MyGap jarak={10}/>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('MemberPoint')}>
                        <Image source={require('../../assets/memberpoint.png')} style={{
                            width:139,
                            height:32,
                            
                        }}/>
                    </TouchableNativeFeedback>
                    <MyGap jarak={10}/>
                          <View style={{padding:1, backgroundColor:'#C8CDD1'}}></View>
                          <MyGap jarak={10}/>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('PesananSaya')}>
                        <Image source={require('../../assets/pesanansaya.png')} style={{
                            width:135,
                            height:24,
                            
                        }}/>
                    </TouchableNativeFeedback>
                    <MyGap jarak={10}/>
                          <View style={{padding:1, backgroundColor:'#C8CDD1'}}></View>
                          <MyGap jarak={10}/>
                </View>

                     {/* INFORMASI LAIN */}
                     <View style={{padding:10, top: -15}}>
                     <Text style={{fontFamily:fonts.primary[600], fontSize:15}}>Informasi Lainnya</Text>
                    {/* PROFILE */}
                    <TouchableNativeFeedback>
                        <Image source={require('../../assets/kebijakanprivasi.png')} style={{
                            width:159,
                            height:32,
                            
                        }}/>
                    </TouchableNativeFeedback>
                          <MyGap jarak={10}/>
                          <View style={{padding:1, backgroundColor:'#C8CDD1'}}></View>
                          <MyGap jarak={10}/>
                    <TouchableNativeFeedback>
                        <Image source={require('../../assets/bantuan.png')} style={{
                            width:108,
                            height:32,
                            
                        }}/>
                    </TouchableNativeFeedback>
                    <MyGap jarak={10}/>
                          <View style={{padding:1, backgroundColor:'#C8CDD1'}}></View>
                          <MyGap jarak={10}/>
                </View>

                {/* PENGATURAN  AKUN */}
<View style={{padding:10, top: -25}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:15}}>Pengaturan Akun</Text>
{/* PROFILE */}
<TouchableNativeFeedback  onPress={() => setDeleteModalVisible(true)}>
   <Image source={require('../../assets/hapusakun.png')} style={{
       width:127,
       height:32,
       
   }}/>
</TouchableNativeFeedback>
<MyGap jarak={10}/>
                          <View style={{padding:1, backgroundColor:'#C8CDD1'}}></View>
                          <MyGap jarak={10}/>
<Modal
              animationType="slide"
              transparent={true}
              visible={deleteModalVisible}
              onRequestClose={() => setDeleteModalVisible(false)}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>
                  Anda yakin ingin menghapus akun?{'\n'}
                  Tuliskan alasan Anda menghapus akun
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Alasan mengapa ingin menghapus akun"
                    placeholderTextColor="#999"
                    multiline={true}
                    numberOfLines={4}
                    value={deleteReason}
                    onChangeText={(text) => setDeleteReason(text)}
                  />
                  <View style={styles.buttonGroup}>
                    <TouchableNativeFeedback
                      onPress={() => {
                        setDeleteModalVisible(false);
                        navigation.navigate('Login')
                      }}>
                      <View
                        style={[
                          styles.modalButton,
                          { backgroundColor: '#007bff' },
                        ]}>
                        <Text
                          style={[
                            styles.buttonText,
                            { color: '#fff' },
                          ]}>Ya</Text>
                      </View>
                    </TouchableNativeFeedback>

                    
                    <TouchableNativeFeedback
                      onPress={() => setDeleteModalVisible(false)}>
                      <View
                        style={[
                          styles.modalButton,
                          { backgroundColor: '#dc3545' },
                        ]}>
                        <Text
                          style={[
                            styles.buttonText,
                            { color: '#fff' },
                          ]}>Tidak</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
            </Modal>

<TouchableNativeFeedback onPress={() => setModalVisible(true)}>
   <Image source={require('../../assets/keluarakun.png')} style={{
       width:131,
       height:32,
       
   }}/>
</TouchableNativeFeedback>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Anda yakin ingin keluar?</Text>
            <View style={styles.buttonGroup}>
              {/* Tombol Ya */}
              <TouchableNativeFeedback onPress={() => {
                setModalVisible(false);
                navigation.navigate('Login')
              }}>
                <View style={[styles.modalButton, { backgroundColor: '#007bff' }]}>
                  <Text style={[styles.buttonText, { color: '#fff' }]}>Ya</Text>
                </View>
              </TouchableNativeFeedback>
              {/* Tombol Tidak */}
              <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
                <View style={[styles.modalButton, { backgroundColor: '#dc3545' }]}>
                  <Text style={[styles.buttonText, { color: '#fff' }]}>Tidak</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Modal>

</View>
         
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
          <Image source={require('../../assets/wishlist-outline.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>

            {/* 4 */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('ProfilePage')}> 
          <View style={{padding:10,}}>
          <Image source={require('../../assets/profile.png')}  style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}/>
          </View>
        </TouchableNativeFeedback>
      </View>
   </View>
  
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 8,
      alignSelf: 'center',
      marginTop: 20,
    },
    buttonText: {
      fontFamily: fonts.primary[600],
      fontSize: 16,
      color: '#fff',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      elevation: 5,
      width: '80%',
    },
    modalText: {
      fontFamily: fonts.primary[600],
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      padding: 10,
      borderRadius: 8,
      width: '45%',
      alignItems: 'center',
    },
  });