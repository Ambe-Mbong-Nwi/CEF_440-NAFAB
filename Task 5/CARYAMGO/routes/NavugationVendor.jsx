import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default class NavugationVendor extends Component {
  render() {
    return (
     <SafeAreaView style={styles.Container} >
      <View style={styles.searchBar} >
      <Ionicons name="settings-sharp" size={28} color="black" />
      {/* ICON SECTION */}
      <View style={styles.search}  >
      <EvilIcons 
         style={{ 
          padding: 3,
          marginTop:3

          }}
      name="search" size={24} color="black" />
      <TextInput
      placeholder='Search'
      style={{ 
        width: 200,
        }}
      />
      </View>
      <MaterialIcons 
          style={{ 
            padding:2,
            }}
      name="add-shopping-cart" size={28} color="black" />
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
searchBar:{
flexDirection:"row",
marginLeft:20,
marginRight:20,
},
search:{
  borderColor: 'grey',
  borderWidth: 1,
  width: 250,
  flexDirection:"row",
  borderRadius: 30,
  marginLeft:5,
  marginRight:5,
},
Container:{
  marginTop:50,
}

})
