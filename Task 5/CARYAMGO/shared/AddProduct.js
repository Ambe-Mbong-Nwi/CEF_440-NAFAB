import { SafeAreaView, StyleSheet, Text, View,TextInput ,TouchableOpacity,ScrollView } from 'react-native'
import {React, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Feather,AntDesign,MaterialCommunityIcons,SimpleLineIcons,Ionicons} from '@expo/vector-icons';


    //Add Product componrnt 

    export default function AddProduct(){

         //give two selected values to make them independent.
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');

        return(
            <View style={styles.container}>
              <View style={styles.View1} >
                <Text style={styles.text}>Add Product</Text>
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
                        <Picker.Item label="Product name" value="option0" />
                        <Picker.Item label="Mango" value="option2" />
                        <Picker.Item label="Carrot" value="option3" />
                        <Picker.Item label="Garri" value="option4" />
                        <Picker.Item label="Onion" value="option5" />
                        <Picker.Item label="Conchaff" value="option6" />
                        <Picker.Item label="Net" value="option7" />
                        
                    </Picker>
                    </View>
                    <View style={styles.dropdowncontainer}>
                    <Picker
                        selectedValue={selectedValue2}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="Price" value="option51" />
                        <Picker.Item label="1000" value="option52" />
                        <Picker.Item label="5000" value="option53" />
                        <Picker.Item label="10 000" value="option54" />
                        <Picker.Item label="20 000" value="option55" />
                        <Picker.Item label="50 000" value="option56" />
                        <Picker.Item label="100 000" value="option57" />
                    </Picker>
                  </View>
                  <View style={styles.dropdowncontainer}>
                    <Picker
                        selectedValue={selectedValue3}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="Quantity" value="option51" />
                        <Picker.Item label="100" value="option52" />
                        <Picker.Item label="200" value="option53" />
                        <Picker.Item label="566" value="option54" />
                        <Picker.Item label="3233" value="option55" />
                        <Picker.Item label="564" value="option56" />
                        <Picker.Item label="10" value="option57" />
                    </Picker>
                  </View>
                </View>

             {/* upload image */}
             <View style={styles.upload} >
                <View style={styles.box} >
                    <AntDesign name="clouduploado" size={24} color="#0A9100" />
                    <Text>add an image</Text>
                </View>
                {/* rounded box uoload image section  */}
                <View>
                <TouchableOpacity 
                style={styles.button1} >
              <Text style={styles.btnText}  >upload</Text>
              <Feather name="upload" size={24} color="white" />
               </TouchableOpacity>
                </View>
                <View style={styles.Viewbtn} >
            <TouchableOpacity 
              style={styles.button} >
              <Text style={styles.btnText}  >Add</Text>
             </TouchableOpacity> 
            </View>
             </View>
    
            </View>
        )
    }


    const styles = StyleSheet.create({

        container: {
            marginTop: 30
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

        button:{
            backgroundColor:'#0A9100',
            paddingTop:7,
            paddingBottom:7,
            width:70,
            borderRadius:10,
            marginTop: 10,
            marginBottom:15, 
          },

          btnText:{
            color:'white',
            fontSize:16,
            textAlign:'center'
          },

          button1:{
            backgroundColor:'#0A9100',
            paddingRight:10,
            paddingLeft:10,
            paddingTop:7,
            paddingBottom:7,
            width:100,
            borderRadius:7,
            marginBottom:15, 
            flexDirection:"row",
            justifyContent:"space-between", 
            marginTop:40
          },
          box:{
            borderColor: 'gray',
            borderWidth: 1,
            height:80,
            padding:10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15
          },
          upload:{
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:20,
            borderRadius: 20
          },
          Viewbtn:{
            marginTop:80 
          }, 
          View1:{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingBottom:10
        },
        })