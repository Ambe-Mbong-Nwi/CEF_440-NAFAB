import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card1() {
  return (
    <View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:150,
      marginBottom:10,
      borderTopLeftRadius:15,
      borderTopRightRadius:15
    },
    image1:{
           position:'relative',   
    },
    icons:{
        position:'absolute',
        left:290,
    },
    iconz:{
        backgroundColor:'white',
        marginTop:4,
        width:30,
        height:30,
        borderRadius:50,
        textAlign:'center'  
    },
    card:{   
    width:'100%',
    // height:'65%',
    borderColor:'black',
    borderWidth:1,
    borderRadius:15,
    marginBottom:10
    },
    name:{
        textTransform:'uppercase',
        fontWeight:'600',
        fontSize:16,
    },
    price:{
        fontWeight:'600',
        fontSize:16,
        color:'#0A9100',
    },
    description:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        marginTop:-10
    },
    qty:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
    },
    qty1:{
        fontSize:17,  
        color:'#000000 ' 
    },
    Amount:{
        flexDirection:'row',
        justifyContent:'center', 
        // marginTop:10
    },
    Input:{
        width:100,
        borderColor:'#0A9100',
        borderWidth:3,
        margin:5,
        paddingL:5
    },
    font:{
       marginTop:7 
    },
    owner:{
        fontSize:17,  
        color:'#000000 ',
        textAlign:'center'     
    },
    marketname:{
        fontSize:17,  
        color:'black' ,
        fontWeight:'600',
        textAlign:'center' ,
         marginBottom:5,
    },
})