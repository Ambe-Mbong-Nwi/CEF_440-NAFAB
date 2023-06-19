import { StyleSheet, Text, View, SafeAreaView, ScrollView,Image,TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';

export default function OrderProduct({ route,navigation }) {
  const carbage = require('../assets/cabbage.png')
  // get the states 
  const [total,setTotal]= useState(0);
  const [quantity,setQuantity ]= useState('')
  const [formErrors, setFormErrors] = useState({});
  // import the data gotten from the prop 
  const { data } = route.params;
  const {
    product_image,
    product_name,
    product_price,
    product_quantity,
    seller_name,
    name_market,
  } = data;
  // implement the logic about calculating the products 
  let totalprice=0;
  const placeOrder =()=>{
     // Validate username
     const errors = {};
  if (!quantity) {
    errors.quantity = 'Quantity is required';
    setFormErrors(errors);
  }
    if(quantity<=product_quantity){
      totalprice = quantity*product_price,
      setTotal(totalprice)
    }
 else{
  alert('invalid Order')
 } 
  }
  console.log(total);
  // Route to messaging page 
  const routePage=()=>{
    if(total>=product_price){
navigation.navigate('MessageChatStack')
    }
    else if(total<=product_price){
      alert('place avlid order')
    }

  }

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.mainCtainer} >  
    <AntDesign      
      onPress={() => navigation.navigate('Navigation1')}   
    name="arrowleft" size={24} color="black" />

    <View  style={styles.info1}>
      <Text style={styles.seller} >{seller_name}</Text>
      <Text style={styles.market} >{name_market}</Text>
      </View>
      <View style={styles.info2}>
        <View style={styles.imagediv}>  
      <Image style={styles.image} source={{uri:product_image}}  />
      </View>
      <Text style={styles.name}>{product_name}</Text> 
      <View style={styles.qty}>
        <Text style={styles.qty1}> Quantity:{product_quantity} </Text>
      </View>
      <View style={styles.info3}> 
      <Text style={styles.price}>{product_price}</Text> 
      {/* flexed view */}
      <View style={styles.flexed} >  
        <View style={styles.flexed1}> 
        <TextInput
          keyboardType="phone-pad"
          placeholder='Quantity'
          // style={[styles.Textinput,formErrors.market && styles.inputError]}
          style={[styles.Quantity,formErrors.quantity && styles.inputError]}
          value={quantity}
          onChangeText={setQuantity}
        />
         {formErrors.quantity && <Text style={styles.error}>{formErrors.quantity}</Text>}
         </View>
          <View style={styles.flexed2}> 
          <TouchableOpacity
            style={styles.button1}
            onPress={placeOrder}
            >
            <Text style={styles.text}>Check-Total </Text>
          </TouchableOpacity>
        </View>
       </View> 
       <Text style={styles.Total}>TOTAL AMOUNT</Text>
       <Text style={styles.totalAmt}>XAF {total} </Text>
       <View style={styles.buttondiv}> 
       <TouchableOpacity
        style={styles.button}
        onPress={routePage}
        >
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
     backgroundColor:'white',
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
    backgroundColor:'gray',
    borderRadius:10
  },
  image:{
    width:'100%',
    height:300,
    borderRadius:10
  },
  flexed:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
  },
  flexed1:{
  width:'60%',
  marginRight:5
  },
  flexed2:{
    width:'45%',
    marginLeft:5,
  },
  button1:{
    backgroundColor:'#0A9100',
    padding:7,
    borderRadius:8,
    width:'80%',
    paddingTop:12,
    paddingBottom:12
  },
     // display the errors incase the form values are incorrect 
     error: {
      color: 'red',
      marginTop: -10,
      fontSize:13
    },
    inputError: {
      borderColor: 'red',
    },
})
