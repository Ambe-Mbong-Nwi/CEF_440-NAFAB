import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';


export default function MessageHeader({ onBackPress }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            
               <Text style={styles.Message}>Messaging</Text>
               <View style={styles.searchOptions}>
                    <TouchableOpacity style={styles.search}>
                        <FontAwesome5 name="search" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="options-vertical" size={24} color="white" />
                    </TouchableOpacity>
               </View>
         
            
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
        justifyContent: 'space-between',
    },

    backButton: {
        alignSelf: 'center',
        paddingHorizontal: 10,
    },

    MessageOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10,
    },

    searchOptions: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
    },

    Message: {
        color: 'white',
        fontSize: 19,
    },

    search: {
        marginRight: 5,
    }
})