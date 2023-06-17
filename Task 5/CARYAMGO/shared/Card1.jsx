import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons,Entypo ,FontAwesome,MaterialIcons,EvilIcons  } from '@expo/vector-icons';

export default function Card1(props) {
  return (
    <View style={styles.card}  >
    <View style={styles.imageIcon}> 
        <View style={styles.image1} >  
        <Image style={styles.image} source={props.src}/>
        </View>
        {/* shopping bad  */}
    <View style={styles.icon}>
    <MaterialIcons name="shopping-bag" size={24} color="black" style={styles.iconz} />  
    </View>
    {/*cart informations*/}
    <View style={styles.info} >
    <View style={styles.stars}>
    <EvilIcons name="star" size={22} color="black" />
    <EvilIcons name="star" size={22} color="black" />
    <EvilIcons name="star" size={22} color="black" />
    <EvilIcons name="star" size={22} color="black" />
    <EvilIcons name="star" size={22} color="black" />
    </View>
    <View style={styles.bottoms} >  
    <Text  style={styles.marketnames}>{props.marketname}</Text>
 </View>
<View style={styles.descriptions}>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.price}>XAF {props.price}/unit</Text>
</View>
</View>
  </View>
</View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:150,
    //   marginBottom:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    image1:{
           position:'relative',   
    },
    icon:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:-20
    },
    iconz:{
        backgroundColor:'#D9D9D9',
        marginTop:4,
        borderRadius:50,
        textAlign:'center',
        padding:5,
        width:35,
        height:35,  
    },
    stars:{
    flexDirection:'row',
    marginTop:-10
    },
    card:{   
    width:'48%',
    // height:'65%',
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
    marginBottom:10,
    paddingBottom:5,
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
    marketname:{
        fontSize:17,  
        color:'black' ,
        fontWeight:'600',
        textAlign:'center' ,
         marginBottom:5,
    },
    info:{
        paddingLeft:5
    }
})