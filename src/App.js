import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import MainNavigation from './navigation/MainNavigation';
import { PaperProvider } from 'react-native-paper';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <MainNavigation/>
    
      
    </SafeAreaView>
   
  );
};

export default App;

const styles = StyleSheet.create({});
