import { StyleSheet, Text, View, SafeAreaView, ScrollView,Image,TextInput,TouchableOpacity } from 'react-native';
import React from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';

export default function OrderProduct() {
  // const Image = require('../assets/tomate.png')
  const carbage = require('../assets/cabbage.png')
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.mainCtainer} >  
    <AntDesign 
      // onPress={() => navigation.navigate('NavugationBuyer')}
    name="arrowleft" size={24} color="black" />
    {/* import the props for seller name {seller_name} */}
    <View  style={styles.info1}>
      <Text style={styles.seller} >Ambe's Shop </Text>
      <Text style={styles.market} >Muea Market</Text>
      </View>
      <View style={styles.info2}>
        <View style={styles.imagediv}>  
      <Image style={styles.image} source={carbage}  />
      </View>
      <Text style={styles.name}>Apple</Text> 
      {/* for the quantity info */}
      <View style={styles.qty}>
        <Text style={styles.qty1}> Quantity:200 </Text>
        <Text style={styles.amt}>Amount Left: 10%  </Text>
      </View>
      <View style={styles.info3}> 
      <Text style={styles.price}>150 XAF/unit </Text>
      <TextInput
         placeholder='Quantity'
         style={styles.Quantity}
       />
       <Text style={styles.Total}>TOTAL AMOUNT</Text>
       <Text style={styles.totalAmt}>XAF XXX</Text>
       <View style={styles.buttondiv}> 
       <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Order </Text>
       </TouchableOpacity>
       </View>
      </View>
      </View>
     
   

    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:8,
     paddingTop:80,
  },
  mainCtainer:{
    backgroundColor:'white',
  },
  seller:{
    fontSize:22,
    fontWeight:'600',
    textAlign:'center',
  },
   market:{
    textAlign:'center',
    fontSize:18,
    // color:'gray',
  },
  name:{
    fontSize:22,
    fontWeight:'600',
  },
  qty1:{
    fontSize:17, 
  },
  amt :{
    fontSize:17, 
  },
  qty:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  price:{
    color:'#7CD175',
    fontSize:23,
    fontWeight:'400',
  },
  Quantity:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    padding:6,
    paddingLeft:10,
    marginBottom:6,
  },
  Total:{
    fontSize:20,
    fontWeight:'600',
    marginTop:5,
  },
  totalAmt:{
    fontSize:23,
    fontWeight:'600',
    marginTop:5,
    marginBottom:5,
    color:'#0A9100'
  },
  button:{
    backgroundColor:'#0A9100',
    padding:7,
    borderRadius:8,
    width:'80%',
   
  },
  buttondiv:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  text:{
    color:'white',
    textAlign:'center',
    fontSize:16,
  },
  imagediv:{
    width:'100%',
    backgroundColor:'red',
    borderRadius:10
  },
  image:{
    width:'100%',
    height:300,
    borderRadius:10
  }
 
})
