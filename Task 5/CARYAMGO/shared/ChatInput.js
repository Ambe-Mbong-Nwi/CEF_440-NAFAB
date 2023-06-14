import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function ChatInput() {

    const [message, setMessage] = useState('')
    return(
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                
                    <TouchableOpacity style={styles.emogiButton}>
                        <Entypo name="emoji-flirt" size={24} color="green" />
                    </TouchableOpacity>
                    <TextInput
                        multiline
                        placeholder="Type message..."
                        style={styles.input}
                        onChangeText={(text) => setMessage(text)}
                    />
                    <View style={styles.sendmicrophone}>
                        <TouchableOpacity>
                            <FontAwesome name="location-arrow" size={24} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.microphone}>
                            <FontAwesome name="microphone" size={24} color="green" />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',

    },

    innercontainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },

    sendmicrophone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    input: {
        backgroundColor: '#E1E3E0',
        width: 210,
        height: 40,
        borderRadius: 25,
        paddingHorizontal: 20,
    },

    microphone: {
        marginLeft: 10,
    }

})