import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';


export default function MessageHeader1({ onBackPress }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            
               <Text style={styles.Message}>Messaging</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: '#097C00',
        marginBottom: 5,
    },

    backButton: {
        flex: 1,
        alignSelf: 'center',
        paddingHorizontal: '3%',
    },

    Message: {
        flex: 2,
        color: 'white',
        fontSize: 19,
    },
})