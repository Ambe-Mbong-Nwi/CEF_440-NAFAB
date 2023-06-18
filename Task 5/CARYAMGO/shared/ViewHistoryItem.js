import { StyleSheet, Text, View,ScrollView, Image} from 'react-native'
import { React, useState } from 'react'
import SeeMore from './SeeMore';

export default function ViewHistoryItem(){

    const [isDetailsVisible, setDetailsVisible] = useState(false);  //for hiding details.

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible);
    };


    return(
        <ScrollView>
                <View style={styles.container}>
                    <Image source = {require('../assets/marketlady.png')} style={styles.itemImage} />
                    <View style={styles.productdetails}>
                        <Text>Product name</Text>
                        <Text>Amount</Text>
                        <Text>Status</Text>
                    </View>
                    <View style={styles.timeMore}>
                        <Text>Time</Text>
                       <SeeMore />
                     </View>  
                </View>
            
            </ScrollView>
    )}


    const styles = StyleSheet.create({

        container: {
            flexDirection: 'row',
            marginBottom: 10
        },

        itemImage: {
            flex: 0.6,
            borderRadius: 50,
            width: '20%',
            height: 55,
            overflow: 'hidden'
        },

        productdetails: {
            flex: 2,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 10,
        },

        timeMore: {
            flex: 0.9,
        }
        
    })