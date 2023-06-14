import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Message from "./Message";

export default function MessageList() {
    const [messages, setMessages] = useState([
        {
            user: 0,
            time: '12:00',
            content: 'Na wa oh'
        },

        {
            user: 1,
            time: '12:02',
            content: 'What is it?'
        },

        {
            user: 1,
            time: '12:03',
            content: 'Abeg jist me customer'
        },

        {
            user: 0,
            time: '12:05',
            content: 'Ill come get some stuff today. i saw you reduced some prices'
        },
    ]);

    const user = useRef(0);
    const scrollView = useRef();

    return(
        <ScrollView
          
            ref = {ref => scrollView.current = ref}
            onContentChange={() => {
                scrollView.current.scrollToEnd({ animated: true })
            }}
        >
            {messages.map((message, index) => (
                <Message 
                key={index}
                time={message.time}
                isLeft={message.user !== user.current}
                message={message.content} />
            ))}
        </ScrollView>
    )
}