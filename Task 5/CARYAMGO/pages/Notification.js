import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign, Feather} from '@expo/vector-icons';
import NotificationModal from '../shared/NotificationModal';
import { useNavigation } from '@react-navigation/native';


export default function Notification() {

    const navigation = useNavigation();   //defining navigation
    //going to previous page
    const handleBackPress = () => {
        navigation.goBack();
      };
    //   handle the notification
    const [data, setData] = useState([]);
    const handleProductFetch = () => {
        fetch('https://carryamgo.onrender.com/api/notifications/')
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
            <Text style={styles.product1} > Loading Notifications... </Text>
          </View>
        )
      }

    return(
        
        <View style={styles.container}>
            <View style={styles.notificationbar}>
                <TouchableOpacity onPress={handleBackPress}>
                     <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.notificationbartext}>Notification</Text>
                <NotificationModal />
            </View>
            <ScrollView>
            <View style={styles.notificationtext}>
                    <Text style={styles.information}>Fear ohhh!!! Buy one take two okrica at central market today</Text>
                    <Text style={styles.time}>1hour ago</Text>
                </View>
            
            <View style={styles.content}>
                <Text style={styles.day}>Today</Text>
                </View>
                <Text > Here is the Mappeds data</Text> 
                {/* fetching the notifications from the Api  */}
                <View style={styles.notify} >   
                {data.map(notification => (
            <Text style={styles.info} key={notification.id}>{notification.notification}</Text>
          ))}
                </View> 

                {/* end of changes done  */}
                
            
            </ScrollView>
         
            </View>
            
    )}

    const styles = StyleSheet.create({
    
        container: {
            flex: 1,
        },
        
        notificationbar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingTop: 40,
            paddingBottom: 10,
            backgroundColor: '#097C00',
            marginBottom: 5,
        },

        notificationbartext: {
            color: 'white',
            fontSize: 18,
            alignSelf: 'center',
            justifyContent: 'center',
            marginLeft: 45,
            marginRight: 40,
        },

        notificationbaricon: {
            marginLeft: 10,
        },

        content: {
            padding: 20,
        },

        day: {
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
        },
    
        notificationtext: {
            backgroundColor: '#0CAA0069',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
            width: '95%',
        },
        notify:{
            justifyContent: 'center',
        },
    
        info: {
            margin: 15,
            backgroundColor: '#0CAA0069',
            marginTop: 6,
            marginBottom: 6,
            borderRadius: 7,
            fontSize:15,
            padding:20
            
        },
        notif:{
            backgroundColor: 'yellow',   
        },
    
        time: {
            fontWeight: '100',
            textAlign: 'left',
        },
        product:{
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
    
    })