import React from 'react';
import Navigation from '../routes/Navigation';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import MessageHeader1 from '../shared/MessagingHeader1';

export default function Messaging1({ navigation, children }) {

    const handleBackPress = () => {
        navigation.goBack();
      };

    return(
        <View style={styles.container}> 
        <ScrollView >
            <View>
                <MessageHeader1 onBackPress={handleBackPress} />
            </View>
            <View style={styles.search}>
                    <EvilIcons name="search" size={24} color="black" />
                    <TextInput 
                        style={StyleSheet.searchinput}
                        placeholder='Search'
                        multiple
                    />
            </View>
            <View style={styles.emailmessage}>
                <Image source = {require('../assets/email.jpg')} style={styles.mailimage} />
                <View style={styles.message}>
                    <Text> You can start your</Text>
                    <Text> chats here</Text>
                </View>
            </View> 
          
        </ScrollView>
        {/* <Navigation /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1
    },
    mailimage: {
    },
    search: {
        width: '85%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 30,
        padding: 7,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '7%',

    },

    emailmessage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    message: {
        marginTop: 20,
        fontSize: 25,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    

})
