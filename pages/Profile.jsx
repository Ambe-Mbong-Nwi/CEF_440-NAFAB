import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign,FontAwesome, FontAwesome5,MaterialCommunityIcons,Feather } from '@expo/vector-icons';



export default function Profile(props) {
  return (
 <SafeAreaView> 
    <View>
        {/* first views */}
        <View>
        <AntDesign  name="arrowleft" size={24} color="black" /> 
        <Text> Profile </Text>
         <AntDesign name="poweroff" size={24} color="black" />
        </View>
{/* second view */}
        <View>
            {/* view for the image  */}
            <View></View>
            <Text>Muea Market </Text>
            <Text>Leony Shop</Text>
        </View>
        {/* third view */}
        <View>
            <Text>Profile Details </Text>
            <Feather name="alert-circle" size={24} color="black" />
        </View>
        {/* fourth virew */}
        <View>
            <View>           
                <View>
                <FontAwesome name="envelope-o" size={24} color="black" />
                <Text>props.email</Text>
                </View>
                <FontAwesome5 name="pencil-alt" size={24} color="black" />
            </View>
            <View>           
                <View>
                <FontAwesome5 name="phone-alt" size={24} color="black" />
                <Text>props.phonenumber</Text>
                </View>
                <FontAwesome5 name="pencil-alt" size={24} color="black" />
            </View>
            <View>           
                <View>
                <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                <Text>props.profile</Text>
                </View>
                <FontAwesome5 name="pencil-alt" size={24} color="black" />
            </View>
            <View>           
                <View>
                <MaterialCommunityIcons name="map-marker-outline" size={24} color="black" />
                <Text>props.location</Text>
                </View>
                <FontAwesome5 name="pencil-alt" size={24} color="black" />
            </View>
            
            <View>           
                <View>
                <AntDesign name="home" size={24} color="black" />
                <Text>props.market</Text>
                </View>
                <FontAwesome5 name="pencil-alt" size={24} color="black" />
            </View>
            <View>           
                <View>
                <MaterialCommunityIcons name="greenhouse" size={24} color="black" />
                <Text>props.shade</Text>
                </View>
                <FontAwesome5 name="pencil-alt" size={24} color="black" />
            </View>
            <Feather name="lock" size={24} color="black" />
            <View>           
                <View>
                <MaterialCommunityIcons name="greenhouse" size={24} color="black" />
                <Text>props.password</Text>
                </View>
                <FontAwesome5 name="pencil-alt" size={24} color="black" />
            </View>
        </View>
   
    </View>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({})