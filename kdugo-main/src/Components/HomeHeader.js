import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../global/styles';

export default function HomeHeader() {
    // Use the withBadge HOC to wrap the Icon component with a badge
    const BadgeIcon = withBadge(0)(Icon); // Replace 0 with your badge count

    return (
        <View style={styles.header}>
            <View style={styles.iconContainer}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.cardbackground}
                    size={32}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Kdugo</Text>
            </View>
            <View style={styles.iconContainer}>
                <BadgeIcon
                    type="material-community"
                    name="bell" // Updated to notification icon
                    size={30}
                    color={colors.cardbackground}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: "#F8A600", // Background color updated
        height: parameters.headerHeight,
        alignItems: 'center', // Ensure items are centered vertically
        justifyContent: 'space-around', // Distribute space between child elements
        width: '100%', // Ensure header spans the full width
        paddingHorizontal: 16, // Add padding for better layout
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10, // Updated for consistency
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    titleText: {
        color: "#192226", // Updated text color
        fontSize: 25,
        fontWeight: 'bold', // Updated to bold
        fontFamily: "Jomolhari", // Updated font
    },
});
