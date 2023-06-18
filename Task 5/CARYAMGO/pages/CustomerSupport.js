import React from 'react';
import Navigation from '../routes/Navigation';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons, Feather} from '@expo/vector-icons';
import CustomerSupportHeader from '../shared/CustomerSupportHeader';


export default function CustomerSupport({ toggleModal }) {

    return(
        <ScrollView style={styles.container}> 
     
            <View>
                <CustomerSupportHeader toggleModal={toggleModal} />
            </View>
            <View style={styles.innercontainer}>
            <Text style={styles.contacts}>Our Contacts</Text>
            <View style={styles.mobileemail}> 
                <View style={styles.mobile}>
                    <Text style={styles.mtext}>Mobile:</Text>
                    <Text style={styles.mtext}>+237-678-529-147</Text>
                </View>
                <View style={styles.email}>
                    <Text style={styles.mtext}>Email:</Text>
                    <Text style={styles.mtext}>fongebertin@gmail.com</Text>
                </View>
            </View>

            <Text style={styles.feedback}>Feedback/Suggestions</Text>

            <View style={styles.inputs}> 
            <TextInput
                        multiline
                        placeholder="Your Email"
                        style={styles.input}
                        // onChangeText={(text) => setMessage(text)}
                    />
            <TextInput
                        multiline
                        placeholder="Email Subject"
                        style={styles.input}
                        // onChangeText={(text) => setMessage(text)}
                    />
            <TextInput
                        multiline
                        placeholder="Content of the Email"
                        style={styles.inputemail} 
                        // onChangeText={(text) => setMessage(text)}
                    />
            </View>

            <TouchableOpacity style={styles.upload}>
                <Text style={styles.text}>Send</Text>
                <Feather name="upload" size={17} color="white" />
            </TouchableOpacity>
            </View>
        {/* <Navigation /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },

    innercontainer: {
        paddingVertical: 15,
        paddingHorizontal: 25
    },

    contacts: {
        fontSize: 21,
        fontWeight: '600',
        textAlign: 'left',
    },

    mobileemail: {
        flexDirection: 'column',
        marginBottom: 20
    },

    mobile: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    email: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mtext: {
        fontSize: 16,
        lineHeight: 25
    },

    feedback: {
        fontSize: 21,
        fontWeight: '600',
        textAlign: 'left',
    },

    inputs: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
    },

    input: {
        width: '100%',
        height: 40,
        borderRadius: 2,
        paddingHorizontal: 20,
        borderWidth: 0.19,
        marginBottom: 11,
        
    },

    inputemail: {
        width: '100%',
        height: 170,
        borderRadius: 4,
        paddingHorizontal: 5,
        borderWidth: 0.19,
        marginBottom: 12,
    },

    
    upload: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0A9100',
        paddingVertical: 10,
        paddingHorizontal: 18,
        width: '35%',
        alignSelf: 'center',
        borderRadius: 8

    },

    text: {
        color: 'white',
    },

    

})
