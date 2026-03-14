import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import getAuth as well
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebase'


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
 




  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        console.log('Navigating to SigninScreen');
        // Pass a parameter indicating successful registration
        navigation.navigate("SigninScreen", { justRegistered: true });
      })
      .catch(error => {
        console.log('Registration Error:', error.message);
        Alert.alert('Registration Error', error.message);
      });
  };
  
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email "
          placeholderTextColor="#c7c7c7" // Placeholder color
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#c7c7c7" // Placeholder color
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
      <Text>If you already have an account </Text>
        <TouchableOpacity   onPress={()=>{navigation.navigate("SigninScreen")}}>
          <Text style={styles.loginLink}>Login Here.</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefaf5',
  },

  topSection: {
    backgroundColor: '#ffa100', // Yellow top section
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Dark text color
  },
  inputContainer: {
    width: '80%',
  },

  input: {
    backgroundColor: '#f2f2f2', // Light background for input
    color: '#000', // Dark text color
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  button: {
    backgroundColor: '#ffa100',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  footer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },

  loginLink: {
    color: '#ffa100', // Orange text for the "Login Here" link
  },

  /*buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },*/
});

export default Registration;

