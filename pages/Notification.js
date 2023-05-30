import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AntDesign, EvilIcons, MaterialIcons, Ionicons, Entypo} from '@expo/vector-icons';
import Footer from '../shared/footer';
 


export default function Notification() {
    return(
        
        <View style={styles.container}>
            <View style={styles.notificationbar}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text style={styles.notificationbartext}>Notification</Text>
                <Entypo name="dots-three-vertical" size={24} color="white" style={styles.notificationbaricon} />
            </View>
            <ScrollView>
            
            <View style={styles.content}>
                <Text style={styles.day}>Today</Text>
                <View style={styles.notificationtext}>
                    <Text style={styles.information}>Fear ohhh!!! Buy one take two okrica at central market today</Text>
                    <Text style={styles.time}>1hour ago</Text>
                </View>
                <View style={styles.notificationtext}>
                    <Text style={styles.information}>You have a reccomendation for meat at muea market.</Text>
                    <Text style={styles.time}>2hours ago</Text>
                </View>
                <View style={styles.notificationtext}>
                    <Text style={styles.information}>You have a reccomendation for yams at Soppo market.</Text>
                    <Text style={styles.time}>3hours ago</Text>
                </View>
                <View style={styles.notificationtext}>
                    <Text style={styles.information}>Merde fish is cheaper at Soppo market.</Text>
                    <Text style={styles.time}>4hours ago</Text>
                </View>
                </View>
            
            </ScrollView>
            <Footer />
            </View>
            
    )}

    const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            paddingHorizontal: 10,
        },
        
        notificationbar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#097C00',
            width: '100%',
            height: 80,
        },

        notificationbartext: {
            color: 'white',
            fontSize: 18,
            alignSelf: 'center',
            justifyContent: 'center',
            marginLeft: 45,
            marginRight: 40,
        },

        notificationbaricon: {
            marginLeft: 10,
        },

        content: {
            padding: 20,
        },

        day: {
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
        },
    
        notificationtext: {
            backgroundColor: '#0CAA0069',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
            height: 70,
            width: 270,
        },
    
        information: {
            padding: 15,
        },
    
        time: {
            fontWeight: '100',
            textAlign: 'left',
        }
    
    })