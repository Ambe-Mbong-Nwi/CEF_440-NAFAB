import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ChatHeader from "../shared/ChatHeader";
import ChatInput from "../shared/ChatInput";
import MessageList from "../shared/MessageList";
import Messaging from "./Messaging";

export default function Chat({ navigation, route }) {
    const handleBackPress = () => {
        navigation.goBack();
      };

    return(
        <View style={styles.container}>
            <ChatHeader
            onBackPress={handleBackPress}
            />
            <ScrollView>
                <MessageList />
            </ScrollView>
            
            <ChatInput />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
})