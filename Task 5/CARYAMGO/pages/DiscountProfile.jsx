import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput} from 'react-native-gesture-handler';
import SearchBar from '../pages/SearchBar';
import Discount from '../pages/Discount';

//On this page is normally supposed to be implemented a list
//  of products-discount-profiles that are displayed and  cancelled as the
//red button is clicked   

export default function DiscountProfile() {
    const profileimage = require('../assets/marketlady.png')
  return (
    <ScrollView>
    <SafeAreaView style={styles.Container} >
    <SearchBar/>
    <View style={styles.see} >
      <Text style={styles.see}>See Less</Text>
    </View>
    <Discount
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
       <Discount
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
       <Discount
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
       <Discount
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
           <Discount
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
           <Discount
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginTop:50,
        margin:15, 
      },
      see:{
        flexDirection:'row',
        justifyContent:'center',
        fontSize:16,
        fontWeight:'500',
        marginBottom:5,
      }
})