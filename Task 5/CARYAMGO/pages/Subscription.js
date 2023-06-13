import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Subscription() {
    return(
        <View>
        <ScrollView>
            <Text>Subscription</Text>
            <View View style={styles.page}>
                <View style={styles.plan}>
                    <Text style={styles.planName}>Basic</Text>
                    <View style={styles.planPayInfo}>
                        <Text style={styles.plancurrency}>XAF</Text>
                        <Text style={styles.planamount}>5000</Text>
                        <Text style={styles.planduration}>/Month</Text>
                    </View>
                    <Text style={styles.planbest}>The best way to get started with our services</Text>
                    <View style={styles.planinventorytot}>
                        <AntDesign name="check" size={24} color="black" />
                        <Text style={styles.planinventory}>Inventory space of 25 items</Text>
                    </View>
                    <TouchableOpacity style={styles.planbutton}>
                        <Text style={styles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.plan}>
                    <Text style={styles.planName}>Professional</Text>
                    <View style={styles.planPayInfo}>
                        <Text style={styles.plancurrency}>XAF</Text>
                        <Text style={styles.planamount}>9000</Text>
                        <Text style={styles.planduration}>/Month</Text>
                    </View>
                    <Text style={styles.planbest}>The best way to get started with our services</Text>
                    <View style={styles.planinventorytot}>
                        <AntDesign name="check" size={24} color="black" />
                        <Text style={styles.planinventory}>Inventory space of 25 items</Text>
                    </View>
                    <TouchableOpacity style={styles.planbutton}>
                        <Text style={styles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

        </View>
    )}

    const styles = StyleSheet.create({
        page: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center'
        },

        plan: {
            width: 270,
            height: 240,
            marginTop: 15,
            borderColor: 'grey',
            borderWidth: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 15,
        },

        planName: {
            fontSize: 25,
            fontWeight: '900',
        },

        planPayInfo: {
            flexDirection: 'row',
            paddingTop: 10,
        },

        plancurrency: {
            fontSize: 30,
            //fontFamily: ' PlayfairDisplay',
        },

        planamount: {
            fontSize: 30,
            color: '#0A9100',
            marginLeft: 8,
            marginRight: 20,
        },

        planduration: {
            fontSize: 20,
            marginTop: 8,
        },

        planbest: {
            fontSize: 15,
            marginVertical: 5,
            fontWeight: '500',
        },

        planinventorytot: {
            flexDirection: 'row',
        },

        planinventory: {
            fontSize: 15,
            fontWeight: '500', 
            marginBottom: 10,
        },

        planbutton: {
            backgroundColor: 'white',
            borderRadius: 5,
            width: 110,
            marginLeft: 60,
            marginTop: 15,
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderColor: '#0A9100',
            borderWidth: 1,
        },
    
        buttonText: {
            textAlign: 'center',
            color: '#0A9100',
            fontSize: 17,
        }
          
        });