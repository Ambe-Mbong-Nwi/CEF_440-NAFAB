import { SafeAreaView, StyleSheet, Text, View,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { React, useState } from 'react'
import { Feather,AntDesign, MaterialCommunityIcons,SimpleLineIcons,Ionicons} from '@expo/vector-icons';

export default function EditProduct(){

    //give two selected values to make them independent.
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');

    return(
        <ScrollView>
              <View style={styles.View1} >
                <Text style={styles.text}>Edit Products</Text>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View style={styles.allpickers}>
                <View style={styles.dropdowncontainer}>
                    <Picker
                        selectedValue={selectedValue1}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="Market place" value="option0" />
                        <Picker.Item label="Muea" value="option2" />
                        <Picker.Item label="Central" value="option3" />
                        <Picker.Item label="Ndongo" value="option4" />
                        <Picker.Item label="OYC" value="option5" />
                        <Picker.Item label="Central" value="option6" />
                        <Picker.Item label="NFC" value="option7" />
                        
                    </Picker>
                    </View>
                    <View style={styles.dropdowncontainer}>
                    <Picker
                        selectedValue={selectedValue2}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="Category" value="option51" />
                        <Picker.Item label="Vegetables" value="option52" />
                        <Picker.Item label="Raw food" value="option53" />
                        <Picker.Item label="Fruits" value="option54" />
                        <Picker.Item label="Vegetables" value="option55" />
                        <Picker.Item label="Fries56" />
                        <Picker.Item label="Fruits" value="option57" />
                    </Picker>
                  </View>
                </View>

                <TouchableOpacity style={styles.add}>
                    <Text style={styles.addtext}>Find</Text>
                </TouchableOpacity>
             
    
            </ScrollView>
        )
    }


    const styles = StyleSheet.create({

          View1:{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingBottom:10,
            marginTop: 20
        },

        text: {
            fontSize: 17,
        },

        allpickers: {
            flexDirection: 'column',
            justifyContent: 'center',
        },

        dropdowncontainer: {
            borderWidth: 0.5,
            borderColor: 'black',
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 2,
            marginBottom: 12,
            alignItems: 'center',
            justifyContent: 'center',
        },

        dropdown: {
            height: 20,
            width: '90%',
           
          },

        Item: {
            textAlign: 'center',
          },

          add: {
            marginTop: 5,
            backgroundColor: '#0A9100',
            paddingVertical: 10,
            paddingHorizontal: 5,
            width: '32%',
            alignSelf: 'flex-end',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'
    
    
        },

        addtext: {
            color: 'white',
            fontSize: 15
        }

          

    })