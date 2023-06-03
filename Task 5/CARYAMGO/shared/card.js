import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
 //TouchableOpacity replaces button so it can be styled

//taking in navigation prop from parent to use to navigate to another screen
export default function Card({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Order');
    }

    return(
        // <ScrollView>
        <View>
            <View style={styles.item}>
                <Image source = {require('../assets/cabbage.png')} style={styles.itemImage} />
                <View style={styles.info}>
                    <View style={styles.nameprice}>
                        <Text style={styles.itemName}>WHITE CABBAGE</Text>
                        <Text style={styles.itemPrice}>XAF 500</Text>    
                    </View>
                    <View style={styles.amountquantity}>
                        <Text style={styles.itemQuantity}>Quantity:<Text style={styles.number}>200</Text></Text>
                        <Text style={styles.itemAmount}>Left:<Text style={styles.percentage}>20%</Text></Text>    
                    </View>
                    <Text style={styles.itemshop}>Ambe's Shop</Text>
                    <Text style={styles.itemdirection}>Muea Market: Shade 13</Text>
                    <TouchableOpacity style={styles.orderbutton} onPress={ pressHandler }>
                        <Text style={styles.ordertext}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.item}>
                <Image source = {require('../assets/tomate.png')} style={styles.itemImage} />
                <View style={styles.info}>
                    <View style={styles.nameprice}>
                        <Text style={styles.itemName}>TOMATOES</Text>
                        <Text style={styles.itemPrice}>XAF 500</Text>    
                    </View>
                    <View style={styles.amountquantity}>
                        <Text style={styles.itemQuantity}>Quantity:<Text style={styles.number}>200</Text></Text>
                        <Text style={styles.itemAmount}>Left:<Text style={styles.percentage}>20%</Text></Text>    
                    </View>
                    <Text style={styles.itemshop}>Ambe's Shop</Text>
                    <Text style={styles.itemdirection}>Muea Market: Shade 13</Text>
                    <TouchableOpacity style={styles.orderbutton} onPress={ pressHandler }>
                        <Text style={styles.ordertext}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.item}>
                <Image source = {require('../assets/carrots.png')} style={styles.itemImage} />
                <View style={styles.info}>
                    <View style={styles.nameprice}>
                        <Text style={styles.itemName}>CARROTS</Text>
                        <Text style={styles.itemPrice}>XAF 500</Text>    
                    </View>
                    <View style={styles.amountquantity}>
                        <Text style={styles.itemQuantity}>Quantity:<Text style={styles.number}>200</Text></Text>
                        <Text style={styles.itemAmount}>Left:<Text style={styles.percentage}>20%</Text></Text>  
                    </View>
                    <Text style={styles.itemshop}>Ambe's Shop</Text>
                    <Text style={styles.itemdirection}>Muea Market: Shade 13</Text>
                    <TouchableOpacity style={styles.orderbutton} onPress={ pressHandler }>
                        <Text style={styles.ordertext}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        // </ScrollView>
        

    )
}

//flex: 1, means container should occupy entire screen. and flex items automatically tke up all the height in case of row direction
//default flexdirection for box flexitems is column ie horizontal
//giving all flex items a flex of 1 enables them grow at the same rate.

const styles = StyleSheet.create({
    
    
    item: {
        flex: 1,
        width: 150,
        height: 113,
        marginTop: 10,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 5,
    },

    itemImage: {
        width: 150,
        height: 140,
        borderRadius: 10,
    },

    info: {
        padding: 2,
    },

    nameprice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    itemName: {
        fontSize: 10,
        color: 'black',
        fontWeight: '900'
    },

    itemPrice: {
        fontSize: 10,
        color: 'green',
        fontWeight: '900',
    },

    amountquantity:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 1,
    },

    itemAmount:{
        fontSize: 10,
    },

    itemQuantity: {
        fontSize: 10,
    },

    number: {
        color: 'green',
    },

    percentage: {
        color: 'green',
    },

    itemshop: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center',
    },

    itemdirection: {
        fontSize: 10,
        color: 'black',
        marginBottom: 10,
        textAlign: 'center',
    },

    orderbutton: {
        backgroundColor: 'green',
        borderRadius: 10,
        width: 90,
        marginLeft: 25,
        padding: 3,
    },

    ordertext: {
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
    }
})
