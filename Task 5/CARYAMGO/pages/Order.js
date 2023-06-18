import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import OrderHeader from "../shared/OrderHeader";


export default function Order({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack();
      };

    return(
        <View style={styles.container}>
           <OrderHeader onBackPress={handleBackPress} />
         <Text>ORDER PAGE</Text>
            
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