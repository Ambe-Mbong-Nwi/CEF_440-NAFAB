import React, { Component,useEffect,useState } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import Discount from './Discount';
import { AntDesign } from '@expo/vector-icons';
import Card from '../shared/Card';
import Card1 from '../shared/Card1';
import axios from 'axios'

export default function NavugationBuyer({ navigation }) {
    const profileimage = require('../assets/marketlady.png')
    const carbage = require('../assets/cabbage.png')
    const tomato = require('../assets/tomate.png') 
    const carrot = require('../assets/carrots.png')
    const sneqakers = 'https://carryamgo.onrender.com/media/Product%20Image/sneaker1.jpeg';
    // below are the changes required to fetch the data from the Api 
    const [data, setData] = useState([]);
     // handle the Api fetch using Fetch  
     const handleProductFetch =()=>{
      fetch(`https://carryamgo.onrender.com/api/products/`)
      .then(res => res.json())
      .then(
        (results) => {
          console.log(results);
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
    <Discount
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
      <Text style={{fontSize:21,fontWeight:'600'  }}>All Products  </Text>
      </View>
        <View style={styles.create} >  
        <Text style={{color:'#0A9100',fontSize:20,marginRight:7  }} >Create Product</Text>
        <AntDesign name="pluscircleo" size={24} color="#0A9100" />
        </View>
    </View>
    <View style={styles.cardsContainer}>
          <Card1 src={tomato} name='Red Tomato' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Buea market' />
          <Card1 src={carbage} name='White cabbage' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Muea market' />
          <Card1 src={carrot} name='Red Carrot' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Buea market' />
          <Card1 src={tomato} name='White cabbage' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Muea market' />
          <Card1 src={sneqakers} name='White cabbage' price='500' Qty="200" QtyLeft='10' owner='Amber' marketname='Muea market' />
        </View>

    {/* getting data from the user and mapping throughs to display each  */}
    {/* <View>
      {data.map(({ product_image,product_name, product_price,product_quantity, QtyLeft, seller_name,name_market, product_id}) => (
        <Card
          key={product_id}
          src={product_image}
          name={product_name}
          price={product_price}
          Qty={product_quantity}
          owner={seller_name}
          marketname={name_market}
        />
      ))}
    </View> */}
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