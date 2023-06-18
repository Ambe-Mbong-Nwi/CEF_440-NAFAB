import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';


export default function SeeMore() {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    //adding background-color when clicked.
    const [selectedText, setSelectedText] = useState(null);
      
        const handleClick = (id) => {
            if (selectedText === id) {
              setSelectedText(null);
            } else {
              setSelectedText(id);
            }
          };
      
        const isTextSelected = (id) => selectedText === id;

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.seemore}>See more...</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide-down"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
            <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPressOut={toggleModal}
            >
                <View style={styles.modalContent}>
                    <Text>This product was purchased 3 days ago from Mami Naura at the price of XAF25,000</Text>
                    <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.seeless}>See less</Text>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )}


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          //justifyContent: 'center',
          alignItems: 'center',
        },

        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 20,
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
    