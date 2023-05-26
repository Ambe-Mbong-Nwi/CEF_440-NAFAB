import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { AntDesign, EvilIcons, MaterialIcons, Ionicons} from '@expo/vector-icons';
 


export default function Footer() {
    return(
        <View style={styles.footericons}>
            <AntDesign name="home" size={24} color="black" />
            <AntDesign name="message1" size={24} color="black" />
            <MaterialIcons name="add-shopping-cart" size={24} color="black" style={styles.carticon}/>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Ionicons name="person-outline" size={24} color="black" />
        </View>
    )}


    const styles = StyleSheet.create({
    
        footericons: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#EFFAEE',
            borderRadius: 30,
            width: 290,
            height: 60,
            marginLeft: 10,
            marginVertical: 10,
        },
    })