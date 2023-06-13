import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function MessagingItem({ picture, userName, bio, lastMessage, time, notification, isBlocked, isMuted, hasStory}) {

    const showStoryCircle = () => {

    }

    const showNotification = (type) => {
            if (notification && type === 'number') {
                return (
                    <View style={styles.NotificationContainer}>
                        <Text style={styles.Notification}>{ notification }</Text>
                    </View>
                );
            } else if (notification && type === 'imageCircle') {
                return {
                    borderColor: '#0A9100'
                }
            }
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.conversation}>
                <TouchableOpacity style={[styles.ImageContainer, showStoryCircle()]}>
                    <Image style={styles.Image} source={ picture } />

                </TouchableOpacity>
            
            <View style={styles.MessageInfo}>
                <View style={styles.nameTime}>
                    <Text numberOfLines={1} style={styles.username}>{ userName }</Text>
                    <Text style={styles.time}>{ time }</Text>
                </View>
                <View style={styles.MessageNotification}>
                    <Text style={styles.Message}>{ lastMessage }</Text>
                    { showNotification('number') }
                </View>
                <View style={styles.line}></View>
            </View>
            </TouchableOpacity> 
        

        </View>
    )}

    const styles = StyleSheet.create({

        container: {
            
        },
        conversation: {
            flexDirection: 'row',
            paddingBottom: 25,
            paddingRight: 20,
            paddingLeft: 10,
        },
        MessageInfo: {
            flex: 1,
            justifyContent: 'center',

        },

        ImageContainer: {
            marginRight: 15,
            borderRadius: 25,
            height: 50,
            width: 50,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        },

        Image: {
            height: 55,
            width: 55,
        },

        nameTime: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 2,
        },

        MessageNotification: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        username: {
            fontSize: 18,
        },

        line: {
            borderWidth: 0.5,
            width: 230,
            marginTop: 15,
        },

        Message: {
            fontWeight: 300,
        },

        time: {
            fontWeight: 300,
        },

        Notification: {
            fontWeight: 'bold',
            color: 'white',
        },

        NotificationContainer: {
            backgroundColor: '#0A9100',
            color: 'black',
            borderRadius: 50,
            width: 20,
            height: 20,
            marginRight: 5,
            alignItems: 'center',
            justifyContent: 'center',  
        },
    })