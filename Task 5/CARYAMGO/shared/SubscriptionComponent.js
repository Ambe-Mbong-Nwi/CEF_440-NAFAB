import { SafeAreaView, StyleSheet, Text, View,TextInput ,TouchableOpacity,ScrollView} from 'react-native'
import { React } from 'react'
import { Feather,AntDesign, MaterialCommunityIcons,SimpleLineIcons,Ionicons} from '@expo/vector-icons';

export default function SubscriptionComponent(){

    return(
        <ScrollView>
              <View style={styles.View1} >
                <Text style={styles.text}>Subscription</Text>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View style={styles.subscribe}>
                <Text style={styles.subscribetext}>To<Text style={styles.bold}> Subscribe to a Plan </Text>
                click on the Subscription button below</Text>
              </View>

              <TouchableOpacity style={styles.add}>
                    <Text style={styles.addtext}>Subscribe</Text>
              </TouchableOpacity>

              <View style={styles.upgrade}>
                <Text style={styles.subscribetext}>To<Text style={styles.bold}> Upgrade your Subscription </Text>
                click on the Upgrade button below</Text>
              </View>

                <TouchableOpacity style={styles.add}>
                    <Text style={styles.addtext}>Upgrade</Text>
                </TouchableOpacity>
             
    
            </ScrollView>
        )
    }


    const styles = StyleSheet.create({

          View1:{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingBottom:5,
            marginTop: 30
        },

        text: {
            fontSize: 17,
        },

        subscribe: {
            flexDirection: 'row',
            width: '90%',
            flexWrap: 'wrap',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 1
        },

        upgrade: {
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            width: '90%',
            marginBottom: 1
        },

        subscribetext: {
            lineHeight: 20,
            fontSize: 15
        },

        bold: {
            fontWeight: 'bold'
        },

        add: {
            marginTop: 5,
            backgroundColor: '#0A9100',
            paddingVertical: 10,
            paddingHorizontal: 5,
            width: '40%',
            alignSelf: 'flex-end',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15
    
        },

        addtext: {
            color: 'white',
            fontSize: 15
        }

          

    })