import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import cesta from './src/mocks/cesta'

import Cesta from './src/telas/Cesta/index';
 
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta  {...cesta}/>
    </SafeAreaView>
  );
}