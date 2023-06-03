import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';

//taking in inbuilt navigation prop to use to navigate to another screen
export default function AddToCart({ navigation }) {
    return(
        <View>
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.search}>
                    <EvilIcons name="search" size={24} color="black" />
                    <TextInput 
                        style={StyleSheet.searchinput}
                        placeholder='Search'
                        multiple
                    />
                </View>
                <MaterialIcons name="add-shopping-cart" size={24} color="black" style={styles.carticon}/>
            </View>
            <View style={styles.searcheditems}>
                <Text style={styles.notfound}>Shirts</Text>
                <Text style={styles.found}>Food</Text>
                <Text style={styles.notfound}>Vegetables</Text>
            </View>
            <View style={styles.discount}>
                <Image source = {require('../assets/discountwoman.jpg')} style={styles.sellerImage} />
                <View style={styles.discountproduct}>
                    <Text style={styles.dispercent}>40% OFF</Text>
                    <Text style={styles.disproduct}>ON GARRI</Text>
                    <View style={styles.disorigprice}>
                    <Text style={styles.disprice}>XAF 150</Text><Text style={styles.originalprice}>XAF 250</Text>    
                    </View>
                    <Text style={styles.disseller}>Mami Abong</Text>
                </View>
            </View>
            <View style={styles.layout}>
                <Card navigation = { navigation }/>
                <Card navigation = { navigation }/>
                <Card navigation = { navigation }/>
            </View>
        </ScrollView>
      
        </View>
    )}

    const styles = StyleSheet.create({
    
        layout: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        },

        header: {
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },

        search: {
            width: 240,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 30,
            padding: 7,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
        },

        carticon: {
            marginRight: 15,
            paddingTop: 10,
            backgroundColor: '#D0F0C0',
            borderRadius: 60,
            width: 40,
            textAlign: 'center',
        },

       searcheditems:{
            flexDirection: 'row',
            justifyContent: 'space-around', 
            marginVertical: 10,
            marginRight: 12,
       },

       found: {
            borderColor: 'green',
            borderWidth: 2,
            borderRadius: 15,
            paddingVertical: 5,
            paddingHorizontal: 17,
            color: 'green',
       },

       notfound: {
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 15,
            paddingVertical: 5,
            paddingHorizontal: 17,
            color: 'black',
       },

       discount: {
        flexDirection: 'row',
        marginHorizontal: 25,
        marginBottom: 20,
        borderRadius: 25,
        backgroundColor: '#D0F0C0',
        width: 300,
        marginLeft: 10,
       },

       discountproduct: {
        borderRadius: 10,
        width: 190,
        paddingLeft: 20,
        paddingVertical: 8,
       },

       sellerImage: {
        width: 110,
        height: 120,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
       },

       dispercent: {
        fontSize: 20,
        color: 'green',
        },

        disproduct: {
         fontSize: 18,
         color: 'black',
         fontWeight: '500',   
        },

        disseller: {
            fontSize: 15,
            color: 'black', 
            fontWeight: '500', 
        },

        disorigprice: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 140,
        },

        disprice: {
            fontSize: 19,
            color: 'green',  
        },

        originalprice: {
            fontSize: 15,
            color: 'black',
            textDecorationLine: 'line-through',
            alignSelf: 'center',
        },

        
    })