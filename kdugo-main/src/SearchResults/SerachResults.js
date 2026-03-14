import React from "react";
import { View, StyleSheet } from "react-native";
import Bustypes from "../Components/BusTypes/Bustypes";
import Routemap from "../Components/Routemap";

const SearchResults = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <Routemap />
            </View>
            <View style={styles.bustypesContainer}>
                <Bustypes />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
    },
    mapContainer: {
        flex: 2, // Takes up 2/3 of the screen
        backgroundColor: "#eee", // Add a subtle background color to the map container if needed
    },
    bustypesContainer: {
        flex: 1, // Takes up 1/3 of the screen
        backgroundColor: "white", // Contrast with the map
        padding: 20, // Add some padding to the list of bus types
        borderTopLeftRadius: 20, // Rounded corners at the top of the bus types container
        borderTopRightRadius: 20, // Rounded corners at the top of the bus types container
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, // For Android shadow
    },
}); 
export default SearchResults;