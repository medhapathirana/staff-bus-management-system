import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; // Import Picker

export default function BookRegistration() {
  const [fullName, setName] = useState('');
  const [number, setNumber] = useState('');
  const [registrationNumber, setEmail] = useState('');
  const [destination, setDestination] = useState(''); // Destination state

  const route = useRoute();
  const navigation = useNavigation();
  const { seatNumber, seatId } = route.params; // Retrieve seatNumber and seatId from params

  // Function to handle seat selection
  const onSelectSeat = async () => {
    try {
      await setDoc(doc(db, 'reservations', seatId.toString()), {
        seat_state: true,
      });
      Alert.alert('Seat selected successfully');
    } catch (error) {
      console.error('Error booking seat:', error);
      Alert.alert('Failed to book the seat. Please try again.');
    }
  };

  async function create() {
    try {
      await setDoc(doc(db, 'reservations', seatId.toString()), {
        fullName,
        number,
        registrationNumber,
        destination, // Submit selected destination
        seatNumber: seatNumber,
        seat_state: true,
      });

      Alert.alert('Data submitted successfully');
      navigation.navigate('BookSeats', { refreshSeats: true });
    } catch (error) {
      console.log('Error submitting data:', error);
      Alert.alert('Failed to submit data. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      {/* Display seat number */}
      <Text style={styles.seatText}>Seat No : {seatNumber}</Text>

      {/* Input for Full Name */}
      <TextInput
        value={fullName}
        onChangeText={(text) => setName(text)}
        placeholder="Full Name"
        style={styles.input}
      />

      {/* Input for Registration Number */}
      <TextInput
        value={registrationNumber}
        onChangeText={(text) => setEmail(text)}
        placeholder="Reg. ID"
        style={styles.input}
      />

      {/* Destination Picker */}
      <Picker
        selectedValue={destination}
        onValueChange={(itemValue) => setDestination(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Destination" value="" />
        <Picker.Item label="KDU Rathmalana" value="KDU Rathmalana" />
        <Picker.Item label="Kadawatha Interchange (0 km)" value="Kadawatha Interchange" />
        <Picker.Item label="Kaduwela Interchange  (2.5 km)" value="Kaduwela Interchange " />
        <Picker.Item label="Kottawa Interchange  (2.5 km)" value="Kottawa Interchange " />
        <Picker.Item label="Kahathuduwa Interchange (5.9 km)" value="Kahathuduwa Interchange" />
        <Picker.Item label="Gelanigama Interchange (13.7 km)" value="Gelanigama Interchange" />
        <Picker.Item label="Dodangoda Interchange (34.8 km)" value="Dodangoda Interchange" />
        <Picker.Item label="Welipenna Interchange (46.0 km)" value="Welipenna Interchange" />
        <Picker.Item label="Kurudugahahethekma Interchange (67.6 km)" value="Kurudugahahethekma Interchange" />
        <Picker.Item label="Baddegama Interchange (79.8 km)" value="Baddegama Interchange" />
        <Picker.Item label="Pinnaduwa Interchange (95.3 km)" value="Pinnaduwa Interchange" />
        <Picker.Item label="Imaduwa Interchange (107.5 km)" value="Imaduwa Interchange" />
        <Picker.Item label="Kokmaduwa Interchange (115.2 km)" value="Kokmaduwa Interchange" />
        <Picker.Item label="Godagama Interchange (126.2 km)" value="Godagama Interchange" />
        <Picker.Item label="Godagama - Palatuwa Interchange (126.2 km)" value="Godagama - Palatuwa Interchange" />
        <Picker.Item label="Kapuduwa Interchange (130.2 km)" value="Kapuduwa Interchange" />
        <Picker.Item label="Aparekka Interchange (136 km)" value="Aparekka Interchange" />
        <Picker.Item label="Beliatta Interchange (151 km)" value="Beliatta Interchange" />
        <Picker.Item label="Bedigama Interchange (153.7 km)" value="Bedigama Interchange" />
        <Picker.Item label="Kasagala Interchange (164 km)" value="Kasagala Interchange" />
        <Picker.Item label="Angunukolapelessa Interchange (173 km)" value="Angunukolapelessa Interchange" />
        <Picker.Item label="Barawakubuka Interchange (181 km)" value="Barawakubuka Interchange" />
        <Picker.Item label="Sooriyawewa Interchange (191 km)" value="Sooriyawewa Interchange" />
        <Picker.Item label="KDUSC" value="KDUSC" />

      </Picker>

      {/* Submit button */}
      <Button title="Submit" onPress={create} color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  seatText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  picker: {
    height: 50,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
});
