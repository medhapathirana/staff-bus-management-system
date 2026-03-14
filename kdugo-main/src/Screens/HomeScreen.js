import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import HomeHeader from "../Components/HomeHeader";// Importing HomeHeader component
import { colors } from "../global/styles";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() { 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* HomeHeader */}
        <HomeHeader />

      {/* New Buttons */}
      <View style={styles.newButtonsContainer}>
        <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('StoppingInterchanges')}>
          <Text style={styles.newButtonText}>Southern Expressway Interchanges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('DistanceBetweenDestinations')}>
          <Text style={styles.newButtonText}>Distance Between Destinations</Text>
        </TouchableOpacity>
      </View>
        
        <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        stickyHeaderIndices={[0]} // Ensure the stickyHeaderIndices index is correctly set
        showsVerticalScrollIndicator={true}
        >
        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('HomeSearch')}>
            <View style={[styles.deliveryButton]}>
              <Text style={styles.deliveryText}>Where is the Bus?</Text>
            </View>
          </TouchableOpacity> */}

          {/* <TouchableOpacity onPress={() => navigation.navigate('DestinationSearch')}>
            <View style={[styles.deliveryButton, !delivery && styles.activeButton]}>
              <Text style={[styles.deliveryText, !delivery && styles.activeText]}>KM for your Destination</Text>
            </View>
           </TouchableOpacity> */}


        {/* Search bar */}
          <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate("DestinationSearch")}>
            <Icon name="map-marker" type="material-community" color={colors.grey1} size={24} />
            <Text style={styles.searchText}>Choose Your Destination..</Text>
            <TouchableOpacity style={styles.nowButton}>
              <Text style={styles.nowText}>Now</Text>
            </TouchableOpacity>
          </TouchableOpacity>

             {/* Buttons Grid */}
             <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("BookSeats")}>
                    <Text style={styles.gridButtonText}>Seat Reservation</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("TicketRollover")}>
                    <Text style={styles.gridButtonText}>Ticket Rollover</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("Details")}>
                    <Text style={styles.gridButtonText}>Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("NewLost")}>
                    <Text style={styles.gridButtonText}>Lost & Found</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("Emergency")}>
                    <Text style={styles.gridButtonText}>Emergency</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate("Feedback")}>
                    <Text style={styles.gridButtonText}>Feedback & Complaints</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f7f6f2",
      paddingHorizontal: 16,
      paddingTop: 0,
      justifyContent: "space-evenly",  // To move container style to push the gridContainer to the bottom of the screen.
    },
  //   headerContainer: {
  //     width: "100%", // Full width for the header container
  // },
    // headerContainer: {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   zIndex: 1, // Ensures the header stays on top of other content
    // },
    // header: {
    //   backgroundColor: "#F8A600",
    //   paddingVertical: 15,
    //   alignItems: "center",
    //   width: '100%', // Makes sure header stretches across the screen
    // },

    buttonContainer: {
      flex: 1, // Ensure the container takes available space
    },

    newButtonsContainer: {
      flexDirection: "column", // Stack buttons vertically
      justifyContent: "center",
      marginVertical: 30,
    },
    newButton: {
      backgroundColor: "#F8A600",
      width: "100%",
      paddingVertical: 15,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginBottom: 10, // Add space between buttons
    },
    newButtonText: {
      color: "#192226",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
    },
    headerText: {
      fontSize: 22,
      color: "#fff",
      fontWeight: "bold",
    },
    searchBar: {
      flexDirection: "row",
      backgroundColor: "#ececec",
      borderRadius: 10,
      padding: 12,
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 20,
    },
    searchText: {
      color: "#7a7a7a",
      fontSize: 16,
      flex: 1,
      marginLeft: 10,
    },
    nowButton: {
      backgroundColor: "#F8A600",
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 15,
    },
    nowText: {
      color: "#fff",
      fontSize: 14,
    },
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      marginBottom: 20, // To add space between the grid and the bottom of the screen
    },
    gridButton: {
      backgroundColor: "#2c2c2c",
      width: "48%",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 1,
      marginVertical: 10,
    },
    gridButtonText: {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
    },
  });
