import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, TouchableOpacity, Button, TextInput, Text, View, Touchable, _ScrollView } from 'react-native';

import SignIn from './src/Signin';
import Signup from './src/signup';

export default function App() {

return(
<>
<ScrollView>
<Signup/>
  <SignIn/>
  </ScrollView>
</>
  
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
