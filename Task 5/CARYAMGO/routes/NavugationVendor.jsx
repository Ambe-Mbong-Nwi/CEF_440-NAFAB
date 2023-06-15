import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import SearchBar from '../pages/SearchBar';
import Discount from '../pages/Discount';

export default function NavugationVendor() {
  const profileimage = require('../assets/marketlady.png')
  return (
    <SafeAreaView style={styles.Container} >
    <SearchBar/>
    <Discount
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
    <View style={styles.see} >
      <Text style={styles.see}>See more</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container:{
    marginTop:50,
    margin:15, 
  },
  see:{
    flexDirection:'row',
    justifyContent:'flex-end',
    fontSize:15,
    fontWeight:'500',
    marginBottom:5,
  }
  
})