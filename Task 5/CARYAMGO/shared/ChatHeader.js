import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

export default function ChatHeader({ onBackPress }) {

    const route = useRoute();
    const { userName, picture } = route.params;
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={ onBackPress }>
                <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.ProfileOptions}>
                <TouchableOpacity style={styles.Profile}>
                    <Image style={styles.image} source={ picture } />
                    <View style={styles.userNameStatus}>
                        <Text style={styles.userName}>{ userName }</Text>
                        <Text style={styles.activestate}>Active now</Text>
                        {/* <Text style={styles.onlineStatus}>{ onlineStatus }</Text> */}
                    </View>
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
    },

    backButton: {
        alignSelf: 'center',
        paddingHorizontal: 10,
    },

    ProfileOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 5,
    },

    Profile: {
        flexDirection: 'row',
        flex: 4,
    },

    image: {
        height: 55,
        width: 55,
        borderRadius: 32.5,
    },

    userNameStatus: {
        marginLeft: 15,
        justifyContent: 'flex-end',
    },

    activestate: {
        fontWeight: '100',
        fontSize: 13,
        color: 'white',
    },

    userName: {
        color: 'white',
        fontSize: 19
    }
})