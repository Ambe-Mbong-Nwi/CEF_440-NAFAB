import React from 'react';
import MessagingItem from '../shared/MessageItem';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

export default function Messaging({ children }) {
    return(
        <View>
        <ScrollView>
<<<<<<< HEAD
            {children}
            <MessagingItem
                picture = {require('../assets/Besingi.png')} style={styles.sellerImage}
                userName = "Naura babe"
                bio = "My name is Naura"
                lastMessage = "Hello i wish to buy"
                time = "2:00pm"
                notification = "3"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/Bertin.jpg')} style={styles.sellerImage}
                userName = "Bertin"
                bio = "My name is Bertin"
                lastMessage = "I am on my way"
                time = "4:00pm"
                notification = "1"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/Abong.jpg')} style={styles.sellerImage}
                userName = "Ambe babe"
                bio = "My name is Ambe"
                lastMessage = "Fear!! abeg reduce price"
                time = "1:00pm"
                notification = "2"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/naura.png')} style={styles.sellerImage}
                userName = "Naura babe"
                bio = "My name is Naura"
                lastMessage = "Hello"
                time = "2:00pm"
                notification = "3"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/Ambe.jpg')} style={styles.sellerImage}
                userName = "Ambe babe"
                bio = "My name is Ambe"
                lastMessage = "Wahala"
                time = "2:00pm"
                notification = "3"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/Besingi.png')} style={styles.sellerImage}
                userName = "Naura babe"
                bio = "My name is Naura"
                lastMessage = "Hello i wish to buy"
                time = "2:00pm"
                notification = "3"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/Bertin.jpg')} style={styles.sellerImage}
                userName = "Bertin"
                bio = "My name is Bertin"
                lastMessage = "I am on my way"
                time = "4:00pm"
                notification = "1"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/Abong.jpg')} style={styles.sellerImage}
                userName = "Ambe babe"
                bio = "My name is Ambe"
                lastMessage = "Fear!! abeg reduce price"
                time = "1:00pm"
                notification = "2"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/naura.png')} style={styles.sellerImage}
                userName = "Naura babe"
                bio = "My name is Naura"
                lastMessage = "Hello"
                time = "2:00pm"
                notification = "3"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>

            <MessagingItem
                picture = {require('../assets/Ambe.jpg')} style={styles.sellerImage}
                userName = "Ambe babe"
                bio = "My name is Ambe"
                lastMessage = "Wahala"
                time = "2:00pm"
                notification = "3"
                isBlocked
                isMuted
                hasStory 
            >
            </MessagingItem>
=======
            <Text>messago</Text>
>>>>>>> b939560f (subscription page)
        </ScrollView>

        </View>
    )}

    const styles = StyleSheet.create({

        sellerImage: {

        },
    })