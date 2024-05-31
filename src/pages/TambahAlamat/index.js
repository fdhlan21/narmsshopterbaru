import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableNativeFeedback, Image, TextInput, StyleSheet, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fonts, colors } from '../../utils';
import { MyGap } from '../../components';

export default function TambahAlamat({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [deleteReason, setDeleteReason] = useState('');
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isMainAddress, setIsMainAddress] = useState(false);
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ padding: 0 }}>

        <ImageBackground source={require('../../assets/bgtopheader.png')} style={{ padding: 10, width: 360, height: 97, flexDirection: "row" }}>
          <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
            <View style={{ justifyContent: "center" }}>
              <Image source={require('../../assets/tombolkembali.png')}
                style={{
                  width: 10, height: 19, top: 4
                }} />
            </View>
          </TouchableNativeFeedback>
          <View style={{ justifyContent: "center", top: 5, marginLeft: 10 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15 }}>Detail Alamat</Text>
          </View>
        </ImageBackground>

        {/* [GRUB ] */}
        <View style={{ padding: 10, }}>
          {/* KONTAK */}
          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, }}>Kontak</Text>
            {/* NAMA LENGKAP */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, }}>Nama Lengkap</Text>
              <TextInput
                defaultValue="Putri Puspa"
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 12,
                  fontFamily: fonts.primary[400],
                  paddingLeft:10,
                }}
              />
            </View>
            {/* Nomor Telepon */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, }}>Nomor Telepon</Text>
              <TextInput
                defaultValue="081234567890"
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 12,
                  fontFamily: fonts.primary[400],
                  paddingLeft:10,
                }}
              />
            </View>
          </View>

          <MyGap jarak={20}/>
             {/* ALAMAT */}
             <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, }}>Alamat</Text>
            {/* LABEL ALAMAT */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, }}>Label Alamat</Text>
              <TextInput
                defaultValue="Rumah"
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 12,
                  fontFamily: fonts.primary[400],
                  paddingLeft:10,
                }}
              />
            </View>

            {/* PROVINSI */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, }}>Provinsi, Kota, Kecamatan, Kode Pos</Text>
              <TextInput
                defaultValue="Jawa Barat, Bogor, Cileungsi, 16829"
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 12,
                  fontFamily: fonts.primary[400],
                  paddingLeft:10,
                }}
              />
            </View>

               {/* PROVINSI */}
              <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 13, }}>Alamat Jalan</Text>
              <TextInput
                defaultValue="Jalan Anggrek 2, No 22 A"
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 12,
                  fontFamily: fonts.primary[400],
                  paddingLeft:10,
                }}
              />
            </View>
          </View>

          <MyGap jarak={20}/>
             {/* ALAMAT */}
             <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, }}>Pengaturan</Text>
            {/* LABEL ALAMAT */}
            <View style={{ marginTop: 10, flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:13, }}>Atur sebagai Alamat Utama</Text>
           
           <TouchableNativeFeedback>
                <View>
                <Switch
              value={isMainAddress}
              onValueChange={(newValue) => setIsMainAddress(newValue)}
            />
                </View>
           </TouchableNativeFeedback>
            </View>
          </View>

        </View>
      </ScrollView>

      <View style={{ padding: 10, alignItems: "center", marginBottom: 20 }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('KeranjangPageSecond')}>
          <View>
            <Image source={require('../../assets/tombolkirim.png')} style={{ width: 183, height: 38 }} />
          </View>
        </TouchableNativeFeedback>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  radioButtonAtas: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#848484',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  radioButtonBawah: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#848484',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    top: 10
  },
  radioButtonSelected: {
    backgroundColor: 'transparent',
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
