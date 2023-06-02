import { SafeAreaView, StyleSheet, Text, View,TextInput ,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { Feather,AntDesign,MaterialCommunityIcons,SimpleLineIcons,Ionicons} from '@expo/vector-icons';

// Edit PRODUCT component 
const EditProduct =()=>{
return(
    <View>
        <TextInput style={styles.Textinput} placeholder='market place' />
        <TextInput style={styles.Textinput} placeholder='category' />
        <View style={{justifyContent:"flex-end" ,flexDirection:"row" }} >
        <TouchableOpacity 
      style={styles.button} >
          <Text style={styles.btnText}  >Edit</Text>
  </TouchableOpacity>
        </View>
     
    </View>
)
}
//Add Product componrnt 
const AddProduct=()=>{
    return(
        <View>
         <TextInput style={styles.Textinput} placeholder='Productname' />   
         <TextInput style={styles.Textinput} placeholder='Price' />
         <TextInput style={styles.Textinput} placeholder='Quantity' />
         {/* upload image */}
         <View style={styles.upload} >
            <View style={styles.box} >
                <Text>add an image</Text>
                <AntDesign name="clouduploado" size={24} color="#0A9100" />
            </View>
            {/* rounded box uoload image section  */}
            <View>
            <TouchableOpacity 
            style={styles.button1} >
          <Text style={styles.btnText}  >upload</Text>
          <Feather name="upload" size={24} color="white" />
           </TouchableOpacity>
            </View>
            <View style={styles.Viewbtn} >
        <TouchableOpacity 
          style={styles.button} >
          <Text style={styles.btnText}  >Add</Text>
         </TouchableOpacity> 
        </View>
         </View>

        </View>
    )
}

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
                fontWeight:600
                 } } > {props.shopnmame}</Text>
            <Text style={{textAlign:"center",
            fontSize:15,
            color:"white" ,
            fontWeight:600} }>{props.market} </Text>
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

        <View style={styles.View1} >
            <Text>Edit prpoducts </Text>
            <AntDesign name="minuscircleo" size={24} color="black" />
        </View>
        <EditProduct/>
        <View style={styles.View1} >
            <Text>Add products </Text>
            <AntDesign name="minuscircleo" size={24} color="black" />
        </View>
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
Textinput:{
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop:5,
    marginTop:8,
    marginBottom:10,
    borderRadius:7,
    paddingLeft:7  
},
button:{
    backgroundColor:'#0A9100',
    paddingTop:7,
    paddingBottom:7,
    width:70,
    borderRadius:7,
    marginBottom:15, 
  },
  btnText:{
    color:'white',
    fontSize:16,
    textAlign:'center'
  },
  button1:{
    backgroundColor:'#0A9100',
    paddingRight:10,
    paddingLeft:10,
    paddingTop:7,
    paddingBottom:7,
    width:100,
    borderRadius:7,
    marginBottom:15, 
    flexDirection:"row",
    justifyContent:"space-between", 
    marginTop:40
  },
  box:{
    borderColor: 'gray',
    borderWidth: 1,
    height:70,
    padding:10
  },
  upload:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:20
  },
  Viewbtn:{
    marginTop:80 
  }
})