import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
// import { FontAwesome } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons,Entypo ,FontAwesome } from '@expo/vector-icons';

export default function Card(props) {
  return (
    // <View style={styles.cards} >  
    <View style={styles.card}  >
            <View style={styles.imageIcon}> 
                <View style={styles.image1} >  
                <Image style={styles.image} source={props.src}/>
                </View>
            <View style={styles.icons}>
            <MaterialCommunityIcons name="pencil-outline" size={24} color="black" style={styles.iconz}  />
            <Entypo name="megaphone" size={24} color="red" style={styles.iconz} />
            </View>
            </View>
        <View style={styles.description}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.price}>XAF {props.price}/unit</Text>
        </View>
        <View style={styles.qty}>
            <Text style={styles.qty1}> <Text>Quasntity: </Text> <Text>{props.Qty}</Text></Text>
            <Text style={styles.qty1}> <Text>Amount Left:</Text> <Text>{props.QtyLeft}%</Text></Text>
        </View>
        <View style={styles.Amount}>
        <FontAwesome name="toggle-up" size={30} color='#0A9100' style={styles.font} />
        <TextInput
        placeholder='Amount'
        // Value={value}
        style={styles.Input}
        />
        <FontAwesome name="toggle-down" size={30} color='#0A9100' style={styles.font}/>
        </View>
        <View style={styles.bottom} >  
            <Text style={styles.owner}>{props.owner}'s shop</Text>
            <Text  style={styles.marketname}>{props.marketname}</Text>
         </View>
    </View>
    // </View>
    
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