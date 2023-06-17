import React from 'react';
import Navigation from '../routes/Navigation';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons, Feather} from '@expo/vector-icons';
import ProductHeader from '../ProductHeader';


export default function Product({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack();
      };

    return(
        <ScrollView style={styles.container}> 
     
            <View>
                <ProductHeader onBackPress={handleBackPress} />
            </View>
            <View style={styles.message}> 
                <Text style={styles.message1}>Create/edit your products with</Text>
                <Text style={styles.message2}>Carryam GO!</Text>
            </View>
            <View style={styles.inputs}> 
            <TextInput
                        multiline
                        placeholder="Product name"
                        style={styles.input}
                        // onChangeText={(text) => setMessage(text)}
                    />
            <TextInput
                        multiline
                        placeholder="Price"
                        style={styles.input}
                        // onChangeText={(text) => setMessage(text)}
                    />
            <TextInput
                        multiline
                        placeholder="Quantity"
                        style={styles.input}
                        // onChangeText={(text) => setMessage(text)}
                    />
            </View>

            <View style={styles.uploadText}>
                <Feather name="upload-cloud" size={24} color="green" />
                <Text style={styles.imagetext}>Add an image</Text>
            </View>

            <TouchableOpacity style={styles.upload}>
                <Text style={styles.text}>Upload</Text>
                <Feather name="upload" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.add}> 
                <Text style={styles.text}>Add</Text>
            </TouchableOpacity>

          
      
        {/* <Navigation /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1
    },

    message: {
        marginTop: 15,
        fontSize: 25,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    message1: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: '500',
        color: 'black'
    },

    message2: {
        fontSize: 22,
        lineHeight: 30,
        color: '#0CAA00',
    },

    inputs: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    input: {
        width: '90%',
        height: 40,
        borderRadius: 1,
        paddingHorizontal: 20,
        borderWidth: 0.19,
        marginBottom: 10,
    },

    uploadText: {
        width: '90%',
        height: 160,
        borderRadius: 5,
        paddingHorizontal: 20,
        borderWidth: 0.25,
        marginVertical: 10,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },

    imagetext: {
        fontWeight: '300'
    },

    upload: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0A9100',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '30%',
        alignSelf: 'center',
        borderRadius: 8

    },

    text: {
        color: 'white',
    },

    add: {
        marginTop: 15,
        backgroundColor: '#0A9100',
        paddingVertical: 7,
        paddingHorizontal: 10,
        width: '65%',
        alignSelf: 'center',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'


    }

    

})
