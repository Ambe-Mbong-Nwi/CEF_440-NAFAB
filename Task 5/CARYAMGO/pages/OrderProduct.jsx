import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Card1 from '../shared/Card1';
// receive the data from the Navigation buyer ( The component it is routed from )
export default function OrderProduct({ route }) {
  const { data } = route.params;

  const {
    product_image,
    product_name,
    product_price,
    product_quantity,
    seller_name,
    name_market,
  } = data;

  return (
    <SafeAreaView style={{ backgroundColor: 'green', width: '100%' }}>
      <View style={styles.container1}>
        <Text>OrderProduct</Text>
        <Card1
          src={{ uri: product_image }}
          name={product_name}
          price={product_price}
          Qty={product_quantity}
          owner={seller_name}
          marketname={name_market}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#fff',
    marginTop: 100,
    padding: 15,
    paddingTop: 50,
    width: '100%',
    height: '100%',
    padding: 30,
  },
});
