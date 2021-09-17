import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Basket from './src/screens/Basket';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Basket/>      
    </SafeAreaView>
  );
}

