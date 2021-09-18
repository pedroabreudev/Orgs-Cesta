import React from 'react';
import { StatusBar } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';

import Basket from './src/screens/Basket';
import AppLoading from 'expo-app-loading';
import mock from './src/mocks/cesta';




export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar />
      <Basket {...mock}/>
    </>
  );
}
