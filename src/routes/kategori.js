import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KategoriPertama, SembakoPage, SembakoPageSecond, TepungDua, TepungKobeDua, TepungPage, TepungPageTreeSecond,
TepungSatu, TepungKoalaPage, SelengkapnyaKoalaDua } from '../pages';


const Stack = createStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="KategoriPertama">
      <Stack.Screen 
        name="KategoriPertama" 
        component={KategoriPertama} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="SembakoPage" 
        component={SembakoPage} 
        options={{ headerShown: false }} 
      />

<Stack.Screen 
        name="TepungPage" 
        component={TepungPage} 
        options={{ headerShown: false }} 
      />


<Stack.Screen 
        name="TepungKobeDua" 
        component={TepungKobeDua} 
        options={{ headerShown: false }} 
      />


<Stack.Screen 
        name="TepungPageTreeSecond" 
        component={TepungPageTreeSecond} 
        options={{ headerShown: false }} 
      />

<Stack.Screen 
        name="TepungSatu" 
        component={TepungSatu} 
        options={{ headerShown: false }} 
      />

<Stack.Screen 
        name="TepungDua" 
        component={TepungDua} 
        options={{ headerShown: false }} 
      />

<Stack.Screen 
        name="SembakoPageSecond" 
        component={SembakoPageSecond} 
        options={{ headerShown: false }} 
      />






    </Stack.Navigator>
  );
};

export default CategoryStack;
