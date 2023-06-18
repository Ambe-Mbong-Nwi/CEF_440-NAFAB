import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons,EvilIcons, FontAwesome } from '@expo/vector-icons';
import CustomerSupport from '../pages/CustomerSupport';


export default function CustomerSupportModal() {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal}>
                <FontAwesome name="question-circle" size={28} color="green" style={styles.cussupport} />
            </TouchableOpacity>
            <Modal
                animationType="slide-down"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContent}>
                    <CustomerSupport toggleModal={toggleModal} />
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
        }
      });
    