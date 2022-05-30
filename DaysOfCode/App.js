import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {

  console.log("App Executed");

  
  return (

    <View style={styles.container}>
    <ImageBackground
       source={require('./assets/2346198.jpg')} 
       style={{height:'100%', width:'100%'}}
      >

    <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,0,0,2)']}
        style={styles.background}
      />

      <Text style={styles.myText}> hello </Text>
      <StatusBar style="auto" />
  
      </ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  myText:{
    position: 'absolute',
    textAlign: 'center',
    color: '#fff',
    top:'50%',
    left:'50%',
  },
});
