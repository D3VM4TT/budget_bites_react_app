import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors, parameters} from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';

const App = () => {
  return (
    <View style={styles.create}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor={colors.statusbar} 
      />
      <SignInScreen />
    </View>
  )
}

export default App

const styles =  StyleSheet.create({
  container: {flex:1}
})