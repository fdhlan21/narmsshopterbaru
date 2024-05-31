import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableNativeFeedback,
    TextInput,
    Modal,
    Alert,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts } from '../../utils/fonts';
import { MyGap } from '../../components';

export default function Register({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

   
    const handleRegister = () => {
        if (!userName || !phoneNumber) {
            Alert.alert('Notifikasi', 'Harap isi nama lengkap & nomor handphone!');
        } else {
            setModalVisible(true);
        }
    };
    const handleOtpChange = (index, text) => {
        if (/^\d*$/.test(text) && text.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
        }
    };

    const handleOtpSubmit = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length === 4) {
            Alert.alert('OTP Submitted', `Your OTP is ${enteredOtp}`);
            setModalVisible(false);
            // Clear OTP input
            setOtp(['', '', '', '']);
            navigation.replace('VerivikasiOTP')
        } else {
            Alert.alert('Invalid OTP', 'Please enter a valid 4-digit OTP');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' , position:"relative"}}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <ImageBackground source={require('../../assets/bglogin.png')} style={{
                    flex:1,
                    width:'100%',
                    height:'100%',

                }}>
                <View style={{ padding: 10 }}>
                    <View style={{ alignItems: 'center', marginTop: '10%' }}>
                        <Image source={require('../../assets/icon.png')} style={{ width: 205, height: 88 }} />
                    </View>
                    <View style={{ padding: 10, marginTop: '10%' }}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: MyDimensi / 2.5, color: colors.fontcolor }}>Daftar</Text>
                        <Text style={{ fontFamily: fonts.primary[400], fontSize: MyDimensi / 4.1 }}><Text style={{color:"red"}}>*</Text> Nama Pengguna</Text>
                        <TextInput style={styles.input} placeholder='Masukan Nama' value={userName}
                        onChangeText={setUserName}/>
                        <MyGap jarak={10} />
                        <Text style={{ fontFamily: fonts.primary[400], fontSize: MyDimensi / 4.1 }}><Text style={{color:"red"}}>*</Text> Nomor Handphone</Text>
                        <TextInput style={styles.input} placeholder='Masukan Nomor Handphone' keyboardType='numeric'
                        value={phoneNumber} onChangeText={setPhoneNumber}/>
                    </View>
                    <View style={{alignItems:"center", marginTop:'1%'}}>
        <TouchableNativeFeedback onPress={handleRegister}>
          <View style={{padding:10, 
            
          }}>
           <Image source={require('../../assets/tomboldaftar.png')}
           style={{
            width:169, height:36
           }}/>
          </View>
        </TouchableNativeFeedback>
            </View>
                    <View style={{ flexDirection: "row", padding: 10, marginTop: '20%' }}>
                        <Image source={require('../../assets/lock.png')} style={{ width: 18, height: 20 }} />
                        <Text style={styles.termsText}>Dengan menggunakan layanan Narma Shop, Anda{'\n'}telah menyetujui <Text style={styles.linkText}>Syarat dan Ketentuan</Text> serta{'\n'}<Text style={styles.linkText}>Kebijakan Privasi</Text> kami.</Text>
                    </View>
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center' }}>Atau Masuk Dengan</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/facebookbutton.png')} style={{ width: 138, height: 39 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <Image source={require('../../assets/googlebutton.png')} style={{ width: 138, height: 39 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                </ImageBackground>
            </ScrollView>
            <View style={{ padding: 10, alignItems: 'center', top:-10 }}>
                <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
                    <View>
                        <Text style={{ fontFamily: fonts.primary[600] }}>Sudah punya Akun ? <Text style={styles.linkText}>Masuk Sekarang</Text></Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            {/* OTP Modal */}
           {/* OTP Modal */}
           <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Konfirmasi Kode OTP</Text>
                        <Text style={{fontFamily:fonts.primary[300], fontSize:10,}}>Masukkan kode OTP yang dikirim melalui sms</Text>
                        <View style={styles.otpContainer}>
                            {[0, 1, 2, 3].map((index) => (
                                <TextInput
                                    key={index}
                                    style={styles.otpInput}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={otp[index]}
                                    onChangeText={(text) => handleOtpChange(index, text)}
                                />
                            ))}
                        </View>
                        <TouchableOpacity style={styles.buttonSubmit} onPress={handleOtpSubmit}>
                            <Text style={styles.textStyle}>Kirim</Text>
                        </TouchableOpacity>
                        
                        <TouchableNativeFeedback>
                            <View style={{alignSelf:'flex-start', top:20}}>
                                <Text style={{fontFamily:fonts.primary[300], fontSize:10, }}>Tidak menerima kode OTP?</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: fonts.primary[400],
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 45,
        fontSize: 12
    },
    button: {
        padding: 10,
        backgroundColor: colors.fontcolor,
        borderRadius: 10,
        width: 169,
    },
    buttonText: {
        fontFamily: fonts.primary[600],
        color: "white",
        fontSize: MyDimensi / 4.1,
        textAlign: "center",
    },
    termsText: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        marginLeft: 5
    },
    linkText: {
        color: colors.fontcolor
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 17,
        color:'black'
    },
    otpInput: {
        height: 50,
        width: 50,
        marginHorizontal: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 24,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    buttonClose: {
        backgroundColor: '#f44336',
       
    },
    buttonSubmit: {
        backgroundColor: '#4CAF50',
        marginTop:10,
        borderRadius:10,
        width:100
    },
    textStyle: {
        color: 'white',
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        padding: 10
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
});
