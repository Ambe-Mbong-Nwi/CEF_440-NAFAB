import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,EvilIcons, FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import CustomerSupportModal from '../routes/CustomerSupportModal';


export default function SearchBar() {
  return (
    // <SafeAreaView style={styles.Container} >
    <View style={styles.searchBar} >
      <Ionicons name="settings-sharp" size={28} color="black" style={styles.settings}/>
      {/* ICON SECTION */}
      <View style={styles.search}  >
        <EvilIcons 
          style={{ 
            padding: 3,
            marginTop:3,

            }}
        name="search" size={24} color="black" />
        <TextInput
        placeholder='Search'
        style={{ 
          width: 200,
          }}
        />
      </View>
      <TouchableOpacity >
        <CustomerSupportModal />
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    searchBar:{
    flexDirection:"row",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    },

    search:{
      flex: 4,
      borderColor: 'grey',
      borderWidth: 1,
      width: 250,
      flexDirection:"row",
      borderRadius: 30,
      marginHorizontal: 5
    },

    settings: {
      flex: 0.5
    },

    cussupport: {
      flex: 0.5,
      alignSelf: 'center',
      justifyContent: 'flex-end'
    }
})