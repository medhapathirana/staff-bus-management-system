import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const BustypeRow = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/imgs/bus.png.jpg')} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    Staff KduSC Bus <Ionicons name="person" size={16} />
                </Text>
                <Text style={styles.time}>8.03 drop off</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10,
    },
    image: {
        width: 70,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    middleContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',
        marginHorizontal : 10
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333',
        marginBottom: 4,
    },
    time: {
        fontSize: 14,
        color: '#666',
    },
});

export default BustypeRow;
