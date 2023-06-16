import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,Switch,
  Select,SafeAreaView, ViewBase } from 'react-native'
import { useState,React } from 'react';
import { Feather,AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignUpVendor({navigation}) {

      // states to validate the form 
const [username, setUsername] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [email, setEmail] = useState('');
const [market,setMarket ] = useState('');
// const [shadeNumber, setShadeNumber] = useState('');
const [town,setTown]= useState('')
const [password, setPassword] = useState('');
const [toggleSwitch, setToggleSwitch] = useState(false);
const [formErrors, setFormErrors] = useState({});

//Logic to validate the form 
const validateForm = () => {
  const errors = {};

  // Validate username
  if (!username) {
    errors.username = 'Username is required';
  }
    // Validate market
    if (!market) {
      errors.market = 'Market is required';
    }
    // Validate email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }
  // Validate phone number
  if (!phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!validatePhoneNumber(phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number';
  }

  // Validate Town 
  if(!town){
    errors.town= "Address is required"
  }
  // Validate password
  if (!password) {
    errors.password = 'Password is required';
  }
 setFormErrors(errors);

  // Check if there are any errors
  if (Object.keys(errors).length === 0) {
    // navigation.navigate('WelcomePage');
    navigation.navigate('Navigation');
    // reset form values after submitting the form 
    setUsername("")
    setEmail("")
    setPhoneNumber("")
    setPassword("")
    setToggleSwitch("")
  }
};


const validatePhoneNumber = (phoneNumber) => {
  // Regular expression for phone number validation
  const phoneNumberRegex = /^[0-9]{0,10}$/;
  return phoneNumberRegex.test(phoneNumber);
};

// subjected to changes 
const validateEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateshadeNumber = (shadeNumber) => {
  // Regular expression for phone number validation
  const shadeNUmberRegex = /^[0-9]{0,10}$/;
  return shadeNUmberRegex.test(shadeNumber);
};
  return (
   <ScrollView> 
    <SafeAreaView style={{  backgroundColor:'green' }} > 
    <View style={styles.container1} >  
    <AntDesign 
      onPress={() => navigation.navigate('Home')}
    name="arrowleft" size={24} color="black" />
 
    <Text
      style={{
      marginBottom:25,
      fontSize:20,
      textAlign:'center'
       }}
    >
   Sign Up with
   <Text 
          style={{
            color:'#0CAA00'
          }}
   >  Carryam-GO</Text> 
  
  </Text>
  <View>
        {/* validate the username field  */}
        <TextInput
     style={[styles.Textinput, formErrors.username && styles.inputError]}
     placeholder="Username"
     value={username}
     onChangeText={setUsername}
  />
   {formErrors.username && <Text style={styles.error}>{formErrors.username}</Text>}

{/* validate the phone number input field  */}
<TextInput
      keyboardType="phone-pad"
      style={[styles.Textinput,formErrors.phoneNumber && styles.inputError  ]}
      placeholder='Phone number'
      value={phoneNumber}
      onChangeText={setPhoneNumber}
  />
  {formErrors.phoneNumber && <Text style={styles.error}>{formErrors.phoneNumber}</Text>} 
     {/* validate the email input field */}
     <TextInput
            style={[styles.Textinput,formErrors.email && styles.inputError]}
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
  />
    {formErrors.email && <Text style={styles.error}>{formErrors.email}</Text>}
  {/* validate the town form  */}
 <TextInput
style={[styles.Textinput, formErrors.town && styles.inputError]}
placeholder='Address'  
value={town} 
onChangeText={setTown} 
  />
    {formErrors.town && <Text style={styles.error}>{formErrors.town}</Text>} 

{/* validate the market name field  */}

<TextInput
style={[styles.Textinput,formErrors.market && styles.inputError]}
placeholder='Name of Market'  
value={market} 
onChangeText={setMarket} 
  />
{formErrors.market && <Text style={styles.error}>{formErrors.market}</Text>} 
 
{/* validate the password field  */}
<TextInput
style={[styles.Textinput,formErrors.password && styles.inputError]}
 secureTextEntry={true}
 placeholder='password'
 value={password}
 onChangeText={setPassword}
  />
   {formErrors.password && <Text style={styles.error}>{formErrors.password}</Text>}
  {/*check bok area */}
          <View
          style={{flexDirection:'row'   }}>        
          <View
          > 
               <Switch
              style={{  height:30 }} 
              value={toggleSwitch}
               onValueChange={setToggleSwitch}        
             /> 
              </View>

          <View style={{ width:'85%' }}>          
            <Text>I agree to the
              <Text> Terms</Text> and  <Text>Policies </Text> 
              of CarryAm Go
             </Text>
          
           </View>
          </View>

  <View style={styles.container}>
      <TouchableOpacity 
      onPress={validateForm}
      style={styles.button} >
          <Text style={styles.btnText}  >Sign Up</Text>
  </TouchableOpacity>
  <Text style={{fontSize:15  }}  >Already have an account
     <Text style={styles.text} > Sign in </Text> </Text>
    </View>

  </View>
  </View>
  </SafeAreaView>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    Textinput:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:8,
        marginBottom:10,
        borderRadius:7,
        paddingLeft:7  
    },
    Textinput1:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:8,
        marginBottom:10,
        borderRadius:7,
        paddingLeft:7,
        flex:1,
        marginRight:10
    },
    Textinput2:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:8,
        marginBottom:10,
        borderRadius:7,
        paddingLeft:7,
        flex:1,
        marginLeft:10
    },
    btnText:{
      color:'white',
      fontSize:17,
      textAlign:'center'
    },
    button:{
      backgroundColor:'#0A9100',
      paddingTop:7,
      paddingBottom:7,
      width:150,
      borderRadius:7,
      marginBottom:15,
      marginTop:20   
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      color:'#0CAA00'
    },
    container1: {
        backgroundColor: '#fff',
        marginTop:80,
        padding:15,
        paddingTop:50,
        width:'100%',
        height:'100%'
    },
       // display the errors incase the form values are incorrect 
       error: {
        color: 'red',
        marginTop: -10,
        fontSize:13
      },
      inputError: {
        borderColor: 'red',
      },
})