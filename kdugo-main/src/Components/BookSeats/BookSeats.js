import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

const initializeSeats = () =>
  Array.from({ length: 55 }, (_, index) => ({
    seatId: index + 1,
    seatNumber: index + 1,
    empty: true,
    selected: false,
    type: index < 20 ? 'lecture' : 'general', // First 20 seats for lectures, the rest for general
  }));

const BookSeats = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [seats, setSeats] = useState(initializeSeats());

  const fetchSeatData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'reservations'));
      const updatedSeats = seats.map((seat) => {
        const docSnapshot = querySnapshot.docs.find((doc) => doc.id === seat.seatId.toString());
        if (docSnapshot) {
          const seatData = docSnapshot.data();
          return {
            ...seat,
            empty: !seatData.seat_state,
          };
        }
        return seat;
      });
      setSeats(updatedSeats);
    } catch (error) {
      console.error('Error fetching seat data:', error);
    }
  };

  useEffect(() => {
    fetchSeatData();
    if (route.params?.refreshSeats) {
      fetchSeatData();
    }
  }, [route.params?.refreshSeats]);

  const onSelectSeat = (seat) => {
    if (!seat.empty) {
      Alert.alert('This seat is already booked');
      return;
    }

    navigation.navigate('BookRegistration', { seatNumber: seat.seatNumber, seatId: seat.seatId });
  };

  const renderSeat = ({ item }) => (
    <TouchableOpacity
      style={styles.seatContainer}
      onPress={() => onSelectSeat(item)}
      disabled={!item.empty}
    >
      <View style={styles.seatWrapper}>
        <Image
          source={require('../../../assets/imgs/car.png')}
          style={[
            styles.seatImage,
            item.type === 'lecture' ? styles.orangeSeat : styles.blackSeat, // Distinguish between lecture and general seats
            !item.empty && styles.bookedSeat,
          ]}
        />
        <Text style={styles.seatNumber}>{item.seatNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Seat</Text>

      <View style={styles.seatGrid}>
        <FlatList
          data={seats}
          renderItem={renderSeat}
          keyExtractor={(item) => item.seatId.toString()}
          numColumns={5}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <View style={[styles.colorBox, { backgroundColor: 'orange' }]} />
        <Text style={styles.descriptionText}>- Lectures Only (First 20 seats)</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={[styles.colorBox, { backgroundColor: 'black' }]} />
        <Text style={styles.descriptionText}>- All Others (Remaining 35 seats)</Text>
      </View>

      <Image
        source={require('../../../assets/imgs/bus.png.jpg')}
        style={styles.busImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    paddingVertical: 20,
    textAlign: 'center',
    letterSpacing: 1,
  },
  seatGrid: {
    width: '70%',
    height: '70%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8e8e8e',
    padding: 10,
  },
  seatContainer: {
    margin: 5,
    alignItems: 'center',
  },
  seatWrapper: {
    alignItems: 'center',
  },
  seatImage: {
    width: 24,
    height: 24,
  },
  seatNumber: {
    marginTop: 2,
    fontSize: 12,
    color: '#000',
  },
  orangeSeat: {
    tintColor: 'orange',
  },
  blackSeat: {
    tintColor: 'black',
  },
  bookedSeat: {
    tintColor: '#8e8e8e',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  busImage: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    margin: 10,
    opacity: 0.5,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft : 15
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
    alignItems: 'center',
  },
});

export default BookSeats;