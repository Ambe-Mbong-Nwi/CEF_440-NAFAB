import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather} from '@expo/vector-icons';


export default function NotificationModal() {

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
        const getBackgroundColor = (id) => (isTextSelected(id) ? 'green' : 'transparent');
        const getColor = (id) => (isTextSelected(id) ? 'white' : 'black');

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal}>
                <Feather name="sliders" size={24} color="white" />
            </TouchableOpacity>
            <Modal
                animationType="slide-down"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => handleClick(1)}>
                        <View style={[{ backgroundColor: getBackgroundColor(1) }]}>
                            <Text style={[{ Color: getColor(1) }]}>All</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick(2)}>
                        <View style={[{ backgroundColor: getBackgroundColor(2)}]}>
                            <Text style={[{ Color: getColor(2) }]}>Read</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick(3)}>
                        <View style={[ { backgroundColor: getBackgroundColor(3)}]}>
                            <Text style={[{ Color: getColor(3) }]}>Unread</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )}


    const styles = StyleSheet.create({
        container: {
          //flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        modalContainer: {
          //flex: 1,
          backgroundColor: 'white',
          marginTop: 60,
          marginRight: 10,
          marginLeft: 'auto',
          padding: 15,
          borderRadius: 10,
          width: '45%'
        },
      });
    