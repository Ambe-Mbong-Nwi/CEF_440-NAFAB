import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import Discount1 from './Discount1';
import Card1 from '../shared/Card1';
import { useNavigation } from '@react-navigation/native';

export default function NavugationBuyer({ navigation }) {
  const profileimage = require('../assets/marketlady.png');
  const [data, setData] = useState([]);

  const handleProductFetch = () => {
    fetch('https://carryamgo.onrender.com/api/products/')
      .then(res => res.json())
      .then(results => {
        setData(results);
      });
  };

  useEffect(() => {
    handleProductFetch();
  }, []);
  // display  loading while waiting for Api data to loead
  if(data.length===0){
    return(
      <View style={styles.product}>
        <Text style={styles.product1} > Loading Products... </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.Container1}
      >
        <SearchBar />
        <Discount1 src={profileimage} Discount="40% OFF" discounted="XAF 150" product="ON APPLE" original="XAF 250" name="Mami Abong" />
        <View style={styles.see}>
          <Text style={styles.see}>See more</Text>
        </View>
        <View style={styles.product}>
          <View>
            <Text style={{ fontSize: 21, fontWeight: '600' }}>Available Products</Text>
          </View>
        </View>
        <View style={styles.cardsContainer}>
          {/* pass in the data that wil be received as props in the route  */}
          {data.map(({ product_image, product_name, product_price, product_quantity, QtyLeft, seller_name, name_market, product_id, product_description }, index) => (
            <TouchableOpacity
              key={product_id}
              onPress={() =>
                navigation.navigate('OrderProduct', {
                  data: {
                    product_image,
                    product_name,
                    product_price,
                    product_quantity,
                    seller_name,
                    name_market,
                  },
                })
              }
              style={index % 2 === 0 ? styles.cardContainerLeft : styles.cardContainerRight}
            >
              <Card1
                src={{ uri: product_image }}
                name={product_name}
                price={product_price}
                Qty={product_quantity}
                owner={seller_name}
                marketname={name_market}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text>Api values before </Text>
        <Text></Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    margin: 15,
    height: '100%',
  },
  Container1: {
    hide: true,
  },
  see: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  create: {
    flexDirection: 'row',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  cardContainerLeft: {
    width: '48%',
    marginBottom: 10,
  },
  cardContainerRight: {
    width: '48%',
    marginBottom: 10,
  },
  product:{
    // flex:1,
    // flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product1:{
    fontSize:20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '300',
  }
});

 