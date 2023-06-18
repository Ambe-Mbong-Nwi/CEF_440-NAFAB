import { StyleSheet, Text, View,TouchableOpacity,ScrollView, Image} from 'react-native';
import { React, useState } from 'react'
import { AntDesign} from '@expo/vector-icons';
import ViewHistoryItem from './ViewHistoryItem';

export default function ViewHistory(){

    const [isDetailsVisible, setDetailsVisible] = useState(false);  //for hiding details.

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    return(
        <ScrollView>
              <View style={styles.View1} >
                <Text style={styles.text}>View History</Text>
                {/* switch between both icons on button click  */}
                <TouchableOpacity onPress={toggleDetails}>
                   {isDetailsVisible ? (
                    <AntDesign name="minuscircleo" size={24} color="black" />
                   ) : (
                    <AntDesign name="pluscircleo" size={24} color="black" />
                    )}
                </TouchableOpacity>
              </View>


            {/* //display details only if condition is true */}
            {isDetailsVisible && (
            <View>
               <ViewHistoryItem />
               <ViewHistoryItem />
               <ViewHistoryItem />
               <ViewHistoryItem />
               <ViewHistoryItem />
               <ViewHistoryItem />
               <ViewHistoryItem />
               <ViewHistoryItem />
            </View>
            )}
            </ScrollView>
    )}


    const styles = StyleSheet.create({

        View1:{
          flexDirection:"row",
          justifyContent:"space-between",
          paddingBottom:10,
          marginTop: 20
      },

      text: {
          fontSize: 17,
      },
    })