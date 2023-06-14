import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Message({ time, isLeft, message }) {

    const isOnLeft = type => {
        if (isLeft && type === 'messageContainer') {
            return {
                alignSelf: 'flex-start',
                backgroundColor: '#E1E3E0',
                borderTopLeftRadius: 0,
            };
        } else if (isLeft && type === 'message') {
            return {
                color: '#000',
            };
        } else if (isLeft && type === 'time') {
            return {
                color: 'darkgray',
            };
        } else {
            return {
                borderTopRightRadius: 0,
            };
        }
    }
   
    return(
        <View style={styles.container}>
            <View style={[styles.messageContainer, isOnLeft('messageContainer')]}>
                <View style={styles.messageView}>
                    <Text style={[styles.message, isOnLeft('message')]}>{ message }</Text>
                </View>
                <View style={styles.timeView}>
                    <Text style={[styles.time, isOnLeft('time')]}>{ time }</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 10,
        marginVertical: 10,
    },

    messageContainer: {
        backgroundColor: '#0CAA00',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        maxWidth: '80%',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
    },

    messageView: {
        backgroundColor: 'transparent',
        maxWidth: '80%',
    },

    timeView: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        paddingLeft: 10,
    },

    message: {
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 15.
    },

    time: {
        alignSelf: 'flex-end',
        color: 'lightgray',
        fontSize: 10
    }
})