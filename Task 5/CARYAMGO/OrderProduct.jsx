import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Card1 from './shared/Card1';

export default function OrderProduct({ route }) {
  const { data } = route.params;
  return (
    <SafeAreaView style={{  backgroundColor:'green', width:'100%',  }} >
       <View style={styles.container1} >
      <Text>OrderProduct</Text>
      {/* <Card1
            src={{ uri: product_image }}
            name={product_name}
            price={product_price}
            Qty={product_quantity}
            owner={seller_name}
            marketname={name_market}
          /> */}
      </View>
     </SafeAreaView>
     
  )
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#fff',
    marginTop:100,
    padding:15,
    paddingTop:50,
    width:'100%',
    height:'100%',
    padding:30 
}
})