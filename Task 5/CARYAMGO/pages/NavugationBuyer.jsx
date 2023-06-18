import React, { Component,useEffect,useState } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,EvilIcons,AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import Discount1 from './Discount1';
import Card1 from '../shared/Card1';
import { useNavigation } from '@react-navigation/native';

export default function NavugationBuyer({ navigation }) {
  // export default function NavugationBuyer() {
  // const navigation = useNavigation();
    const profileimage = require('../assets/marketlady.png')
    const carbage = require('../assets/cabbage.png')
    const tomato = require('../assets/tomate.png') 
    const carrot = require('../assets/carrots.png')
    const sneqakers = 'https://carryamgo.onrender.com/media/Product%20Image/sneaker1.jpeg';
    // below are the changes required to fetch the data from the Api 
    const [data, setData] = useState([]);
     // handle the Api fetch using Fetch  
     const results=0;
     const handleProductFetch =()=>{
      fetch(`https://carryamgo.onrender.com/api/products/`)
      .then(res => res.json())
      .then(
        (results) => { 
          setData(results)
        },
      )
    }
  useEffect(() => {
    handleProductFetch()
  }, []) 
  return (
    <SafeAreaView style={styles.Container} >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      style={styles.Container1}> 
    <SearchBar/>
    <Discount1
    src={profileimage}
    Discount='40% OFF'
    discounted='XAF 150'
    product='ON APPLE'
    original='XAF 250'
    name='Mami Abong'
    />
    <View style={styles.see} >
      <Text style={styles.see}>See more</Text>
    </View>
    <View style={styles.product}>
      <View> 
      <Text style={{fontSize:21,fontWeight:'600'  }}>Available Products  </Text>
      </View>
    </View>
    <View style={styles.cardsContainer}>
          <Card1 src={tomato} name='Red Tomato' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Buea market' />
          <Card1 src={carbage} name='White cabbage' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Muea market' />
          <Card1 src={carrot} name='Red Carrot' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Buea market' />
          <Card1 src={{ uri: sneqakers }} name='Red Tomato' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Buea market' />
        </View>

  
 <View style={styles.cardsContain}>
      {data.map(({ product_image,product_name, product_price,product_quantity, 
      QtyLeft, seller_name,name_market, product_id, product_description}) => (
     <TouchableOpacity
      key={product_id}
// exporting data such that it can be received as a prop in the ohter navigation 
      onPress={() => navigation.navigate('OrderProduct', { data: { product_image, product_name, product_price, product_quantity, seller_name, name_market } })}
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
    <Text></Text>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Container:{
        // marginTop:50,
        margin:15,
        // width: '100%',
      height:'100%',
      },
      Container1:{
    //  flexGrow:1  PASSWORD FOR WINSCRIBE: nMmNP3JC?un.c2y
    hide: true,
      },
      see:{
        flexDirection:'row',
        justifyContent:'flex-end',
        fontSize:15,
        fontWeight:'500',
        marginBottom:5,
      },
      create:{
        flexDirection:'row',
      },
      product:{
        flexDirection:'row',
        justifyContent:'space-between',
      },
      cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
      },
})