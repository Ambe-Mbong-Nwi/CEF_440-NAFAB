import { SafeAreaView, StyleSheet, Text, View,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { React, useState } from 'react'
import { Feather,AntDesign, MaterialCommunityIcons,SimpleLineIcons,Ionicons} from '@expo/vector-icons';

export default function CreateShop(){

    const [selectedValue, setSelectedValue] = useState('');    //for different values of the picker

    const [isDetailsVisible, setDetailsVisible] = useState(false);  //for hiding details.

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    return(
        <ScrollView>
              <View style={styles.View1} >
                <Text style={styles.text}>Add Shop</Text>
                {/* switch between both icons on button click  */}
                <TouchableOpacity onPress={toggleDetails}>
                   {isDetailsVisible ? (
                    <AntDesign name="minuscircleo" size={24} color="black" />
                   ) : (
                    <AntDesign name="pluscircleo" size={24} color="black" />
                    )}
                </TouchableOpacity>
              </View>


            {/* //display details only if condition is true */}
            {isDetailsVisible && (
            <View>
              <View style={styles.allpickers}>
                <View style={styles.dropdowncontainer}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="Shop name" value="option0" />
                        <Picker.Item label="Naura's Shop" value="option2" />
                        <Picker.Item label="Ambe's Shop" value="option3" />
                        <Picker.Item label="Bruno's Shop" value="option4" />
                        <Picker.Item label="Frank's Shop" value="option5" />
                        <Picker.Item label="Bertin's Shop" value="option6" />
                        <Picker.Item label="Tasha's Shop" value="option7" />
                        
                    </Picker>
                    </View>
                    <View style={styles.dropdowncontainer}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={styles.dropdown}
                    >
                        <Picker.Item label="Address" value="option0" />
                        <Picker.Item label="Muea market entrance" value="option2" />
                        <Picker.Item label="Central market second line" value="option3" />
                        <Picker.Item label="Muea market back" value="option4" />
                        <Picker.Item label="OYC market second line" value="option5" />
                        <Picker.Item label="Malingo Junction" value="option6" />
                        <Picker.Item label="Ndongo" value="option7" />
                    </Picker>
                  </View>
                </View>

                <TouchableOpacity style={styles.add}>
                    <Text style={styles.addtext}>Create Shop</Text>
                </TouchableOpacity>
            </View>
             )}
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
            width: '50%',
            alignSelf: 'flex-end',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
    
    
        },

        addtext: {
            color: 'white',
            fontSize: 15
        }

          

    })