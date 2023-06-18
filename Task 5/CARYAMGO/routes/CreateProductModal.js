import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons,EvilIcons, FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Product from '../pages/Product';


export default function CreateProductModal() {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

   
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal}>
            <View style={styles.create} >  
                <Text style={{color:'#0A9100',fontSize:20,marginRight:7  }} >Create Product</Text>
                <AntDesign name="pluscircleo" size={24} color="#0A9100" />
            </View>
            </TouchableOpacity>
            <Modal
                animationType="slide-down"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContent}>
                    <Product toggleModal={toggleModal} />
                </View>
            </Modal>
        </View>
    )}


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          //justifyContent: 'center',
          alignItems: 'center',
        },

        modalContent: {
          flex: 1,
          backgroundColor: 'white',
         // padding: 20,
          borderRadius: 5,
        },
        seeless: {
            marginTop: 10,
            fontWeight: '300',
        },
        seemore: {
            fontWeight: '300',
        },
        create:{
            flexDirection:'row',
          },
      });
    