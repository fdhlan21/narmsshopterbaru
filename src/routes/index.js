import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Konten,
  TanyaJawab,
  Notifikasi,
  Artikel,
  ArtikelDetail,
  Video,
  VideoDetail,
  Resep,
  ResepDetail,
  AsupanMpasi,
  AsupanAsi,
  StatusGizi,
  StatusGiziHasil,
  KursionerVark,
  GayaBelajarVisual,
  GayaBelajarAudio,
  GayaBelajarReading,
  

  GayaBelajarKinaesthetic,
  Diagnosa2,
  Periksagigimu,
  Gigilubang,
  TumpatanGigi,
  PaketUmrah,
  Pendaftaran,
  UpdateSeat,
  Pembayaran,
  Saldoku,
  DataJamaah,
  DataJamaah2,
  Royalti,
  MakananBalita,
  ResepMakananBalita,
  MakananIbuhamil,
  ResepMakananIbuHamil,
  konsultasionline,
  ProfileAplikasi,
  IMTCalculator,
  HasilIMTCalculator,
  HomeAnemia,
  WhatsIsAnemia,
  AnemiaCouses,
  AnemiaHelt,
  ArtikelLainnya,
  NextPageSatu,
  NextPageDua,
  NextPageTiga,
  OTPPage,
  VerivikasiOTP,
  PromoMember,
  LagiDiskon,
  SliderPage,
  KoinPage,
  NotifikasiPage,
  SearchPage,
  Kategori,
  KategoriPertama,
  SembakoPage,
  TepungPage,
  TepungSatu,
  TepungDua,
  TepungKoalaPage,
  SelengkapnyaKoala,
  SelengkapnyaKoalaDua,
  TepungKobePage,
  SelengkapnyaKobe,
  TepungKobeDua,
  TepungKobeTiga,
  SukaKecap,
  SukaPage,
  AkunMember,
  PesananSayaPage,
  PesananBerlansung,
  MemberPoint,
  SembakoPageSecond,
  TepungPageSecond,
  TepungPageTreeSecond,
  KeranjangPage,
  BuatPesananPage,
  DetailInformasi,
  TambahAlamat,
  KeranjangPageSecond,
  AkunMemberSecond,
  Pesanan,
  MetodePembayaran,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import Diagnosa from '../pages/Diagnosa';
import TypeAnemia from '../pages/Anemia/typeanemia';
import ProfilePage from '../pages/ProfilePage';
import KategoriPage from './kategori';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Category" component={KategoriPage} />
//       <Tab.Screen name="Wishlist" component={SukaPage} />
//       <Tab.Screen name="Profile" component={ProfilePage} />
//     </Tab.Navigator>
//   );
// };




export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="KeranjangPage"
        component={KeranjangPage}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="MetodePembayaran"
        component={MetodePembayaran}
        options={{
          headerShown: false,
        }}
      />


      
<Stack.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="KeranjangPageSecond"
        component={KeranjangPageSecond}
        options={{
          headerShown: false,
        }}
      />

      
<Stack.Screen
        name="TambahAlamat"
        component={TambahAlamat}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="DetailInformasi"
        component={DetailInformasi}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="BuatPesananPage"
        component={BuatPesananPage}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="TepungPageTreeSecond"
        component={TepungPageTreeSecond}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="TepungPageSecond"
        component={TepungPageSecond}
        options={{
          headerShown: false,
        }}
      />

      
<Stack.Screen
        name="SembakoPageSecond"
        component={SembakoPageSecond}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="SukaPage"
        component={SukaPage}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="MemberPoint"
        component={MemberPoint}
        options={{
          headerShown: false,
        }}
      />
<Stack.Screen
        name="PesananBerlansung"
        component={PesananBerlansung}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="PesananSaya"
        component={PesananSayaPage}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="AkunMember"
        component={AkunMember}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="AkunMemberSecond"
        component={AkunMemberSecond}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

<Stack.Screen
        name="NextPageSatu"
        component={NextPageSatu}
        options={{
          headerShown: false,

        }}
      />


      
<Stack.Screen
        name="NextPageDua"
        component={NextPageDua}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="NextPageTiga"
        component={NextPageTiga}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="PromoMember"
        component={PromoMember}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="OTPPage"
        component={OTPPage}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="VerivikasiOTP"
        component={VerivikasiOTP}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Diskonan"
        component={LagiDiskon}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="SliderPage"
        component={SliderPage}
        options={{
          headerShown: false,

        }}
      />


      
<Stack.Screen
        name="KoinPage"
        component={KoinPage}
        options={{
          headerShown: false,

        }}
      />





<Stack.Screen
        name="NotifikasiPage"
        component={NotifikasiPage}
        options={{
          headerShown: false,

        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SembakoPage"
        component={SembakoPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TepungPage"
        component={TepungPage}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="TepungSatu"
        component={TepungSatu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TepungDua"
        component={TepungDua}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="KategoriPertama"
        component={KategoriPertama}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TepungKoalaPage"
        component={TepungKoalaPage}
        options={{
          headerShown: false,
          
          
        }}
      />


      <Stack.Screen
        name="SelengkapnyaKoala"
        component={SelengkapnyaKoala}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SelengkapnyaKoalaDua"
        component={SelengkapnyaKoalaDua}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TepungKobePage"
        component={TepungKobePage}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="SelengkapnyaKobeSatu"
        component={SelengkapnyaKobe}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="TepungKobeDua"
        component={TepungKobeDua}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="TepungKobeTiga"
        component={TepungKobeTiga}
        options={{
          headerShown: false,
        }}
      />


<Stack.Screen
        name="SukaKecap"
        component={SukaKecap}
        options={{
          headerShown: false,
        }}
      />















    </Stack.Navigator>
  );
}
