import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const Gradiente = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
      colors={['#59C173','#a17fe0','#5D26C1']} 
      style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}}
      >

      <TouchableOpacity onPress={()=>{Alert.alert('Mensaje')}}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}>
          <Text style={styles.text}>Sign in with Facebook</Text>
        </LinearGradient>
      </TouchableOpacity>

      </LinearGradient>
    </SafeAreaView>
  )
}

export default Gradiente

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    //height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
})