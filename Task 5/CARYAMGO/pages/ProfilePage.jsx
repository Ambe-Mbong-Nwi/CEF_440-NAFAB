import { SafeAreaView, StyleSheet, Text, View,TextInput ,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { Feather,AntDesign,MaterialCommunityIcons,SimpleLineIcons,Ionicons} from '@expo/vector-icons';
import AddProduct from '../shared/AddProduct';
import CreateShop from '../shared/CreateShop';
import SubscriptionComponent from '../shared/SubscriptionComponent';
import EditProduct from '../shared/EditProduct';


export default function ProfilePage(props) {
  return (
   <SafeAreaView style={styles.safeare}  >  
   <ScrollView >    
    <View  style={styles.main} >
        <View style={styles.main1} >  
        <AntDesign name="arrowleft" size={24} color="white" /> 
        <Text style={{fontSize:21,color:"white"  }}  >Profile</Text>
        <AntDesign name="poweroff" size={24} color="white" />
        </View>
        {/* view for the profile image */}
        <View></View>
        <View >
            <Text style={{
                fontSize:16,
                textAlign:"center",
                color:"white",
                fontWeight:'600'
                 } } > {props.shopnmame}</Text>
            <Text style={{textAlign:"center",
            fontSize:15,
            color:"white" ,
            fontWeight:'600'} }>{props.market} </Text>
        </View> 
    </View>
    <View style={styles.main2}>
        <View style={styles.View1} >
            <Text>Profile Details</Text>
            <AntDesign name="minuscircleo" size={24} color="black" />
        </View>
        {/* profile informations  */}
       <View style={styles.View1} >
            <View style={styles.View11} > 
            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
            <Text style={{marginTop:2,marginLeft:3  }}  > {props.Email} </Text>
            </View>
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>
        <View style={styles.View1} >
            <View style={styles.View11} > 
            <SimpleLineIcons name="phone" size={24} color="black" />
            <Text style={{marginTop:2,marginLeft:3  }}  > {props.Phonenumber} </Text>
            </View>
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>
        <View style={styles.View1} >
            <View style={styles.View11} > 
            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
            <Text style={{marginTop:2,marginLeft:3 }}  > {props.profilestatus} </Text>
            </View>   
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>
        <View style={styles.View1} >
            <View style={styles.View11} > 
            <Feather name="map-pin" size={24} color="black" />
            <Text style={{marginTop:2,marginLeft:3 }}  > {props.location} </Text>
            </View>   
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>
        <View style={styles.View1} >
            <View style={styles.View11} > 
            <Feather name="home" size={24} color="black" />
            <Text style={{marginTop:2,marginLeft:3 }}  > {props.marketname} </Text>
            </View>   
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>
        <View style={styles.View1} >
            <View style={styles.View11} > 
            <MaterialCommunityIcons name="home-variant-outline" size={24} color="black" />
            <Text style={{marginTop:2,marginLeft:3 }}  > {props.shadename} </Text>
            </View>   
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>
        {/* password , may lead to further logis in hashing  */}
        <View style={styles.View1} >
            <View style={styles.View11} > 
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <Text style={{marginTop:2,marginLeft:3 }}  > {props.password} </Text>
            </View>   
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
        </View>

        <CreateShop />

        <SubscriptionComponent />

        <EditProduct />
      
        <AddProduct/>
    </View>
    </ScrollView>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
safeare:{
    backgroundColor:'white',
    width:"100%",
    height:"100%", 
},
main:{
 backgroundColor:'#0A9100',
 padding:15,
paddingTop:70,
borderBottomLeftRadius:20,
borderBottomRightRadius:20


},
main1:{
    flexDirection:"row",
    justifyContent:"space-between",
},
main2:{
 padding:15,
},
View1:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingBottom:10
},
View11:{
    flexDirection:"row",
    justifyContent:"space-between", 
    paddingLeft:10,
},

})