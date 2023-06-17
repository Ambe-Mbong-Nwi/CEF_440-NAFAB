import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function Discount1(props) {
  return (
    <View style={styles.container} >
    <Image source={props.src} />
    <View>
        <Text style={{ color:'#0CAA00',fontSize:18, fontWeight:'500'   }}  >{props.Discount} </Text>
        <Text
         style={{fontSize:18,fontWeight:'500'   }} 
        >{props.product}  </Text>
        <Text>
             <Text
             style={{ color:'#0CAA00', fontSize:16,fontWeight:'600'   }} 
             >{props.discounted} </Text>
        <Text
        style={{
             color:'black',
              fontSize:16,
              fontWeight:'500',
            textDecorationLine:'line-through'
            }}
        >{props.original} </Text> </Text>
        <Text> {props.name} </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:4,
        backgroundColor:'#92D98C33',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:8,
        marginTop:10,

    }
})