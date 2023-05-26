import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Card from '../shared/card';
import Footer from '../shared/footer';

export default function WelcomePage() {
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
                <Ionicons name="settings-sharp" size={24} color="black" style={styles.settingicon}/>
            </View>
            <Text style={styles.welcomemessage}>Welcome to CARYAMGO</Text>
            <Text style={styles.welcomename}>Fonge Bertin</Text>
            <Text style={styles.topproducts}>Top Products</Text>
            <View style={styles.layout}>
                <Card />
                <Card />
                <Card />
            </View>
        </ScrollView>
        <Footer />
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
            width: 260,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 30,
            padding: 7,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
        },

        settingicon: {
            marginRight: 15,
            paddingTop: 10,
        },

        welcomemessage: {
            fontSize: 17,
            color: 'black',
            textAlign: 'center',
            fontWeight: '600',
            marginTop: 5,
        },

        welcomename: {
            fontSize: 15,
            color: 'green',
            textAlign: 'center',
            fontWeight: '600',
        },

        topproducts: {
            fontSize: 20,
            color: 'black',
            textAlign: 'left',
            fontWeight: '600',
            marginTop: 10,
            marginLeft: 5,
        },
        
    })