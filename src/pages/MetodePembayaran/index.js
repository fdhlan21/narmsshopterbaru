import { View, Text, ImageBackground, TouchableNativeFeedback, Image, Modal, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { fonts, colors } from '../../utils';
import { MyGap } from '../../components';
import { MYAPP } from '../../utils/localStorage';

export default function MetodePembayaran({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
    const [selectedValue, setSelectedValue] = useState('option3'); // Default select to option3

    const Back = () => {
        navigation.goBack();
    };

    const handleRadioButtonPress = (value) => {
        setSelectedValue(value);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView style={{ padding: 0 }}>
                <ImageBackground source={require('../../assets/bgtopheader.png')} style={{ padding: 10, width: 360, height: 97, flexDirection: "row" }}>
                    <TouchableNativeFeedback onPress={Back}>
                        <View style={{ justifyContent: "center" }}>
                            <Image source={require('../../assets/tombolkembali.png')}
                                style={{
                                    width: 10, height: 19, top: 4
                                }} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={{ justifyContent: "center", top: 5, marginLeft: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 15 }}>Metode Pembayaran</Text>
                    </View>
                </ImageBackground>

                {/* [GRUB ] */}
                <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => handleRadioButtonPress('option1')} style={styles.radioButton}>
                            {selectedValue === 'option1' && <View style={styles.radioButtonInner} />}
                        </TouchableOpacity>
                        <Image source={require('../../assets/gambar1.png')} style={{ width: 26, height: 20, marginRight: 10, marginLeft: 10 }} />
                        <Text style={{ fontFamily: fonts.primary[600], left: 35 }}>Credit / Debit Card</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => handleRadioButtonPress('option2')} style={styles.radioButton}>
                            {selectedValue === 'option2' && <View style={styles.radioButtonInner} />}
                        </TouchableOpacity>
                        <Image source={require('../../assets/gambar2.png')} style={{ width: 60, height: 38, marginRight: 10, marginLeft: 10 }} />
                        <Text style={{ fontFamily: fonts.primary[600] }}>GO-PAY</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => handleRadioButtonPress('option3')} style={styles.radioButton}>
                            {selectedValue === 'option3' && <View style={styles.radioButtonInner} />}
                        </TouchableOpacity>
                        <Image source={require('../../assets/gambar3.png')} style={{ width: 60, height: 16, marginRight: 10, marginLeft: 10 }} />
                        <Text style={{ fontFamily: fonts.primary[600] }}>Dana</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => handleRadioButtonPress('option4')} style={styles.radioButton}>
                            {selectedValue === 'option4' && <View style={styles.radioButtonInner} />}
                        </TouchableOpacity>
                        <Image source={require('../../assets/gambar4.png')} style={{ width: 50, height: 26, marginRight: 10, marginLeft: 10 }} />
                        <Text style={{ fontFamily: fonts.primary[600], left: 10 }}>ShopeePay</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#848484',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    radioButtonInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.fontcolor,
    },
    radioText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: '#000',
    },
});
