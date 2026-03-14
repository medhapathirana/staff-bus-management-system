import React from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';



const GOOGLE_MAPS_APIKEY = 'AIzaSyB8SDuL-vEKer19D3XBIrNmO8-uuYN_mkI'

const Routemap = (props) => {
const origin = {
  latitude: 37.78825,
  longitude: -122.4324
}

const destination  = {
  latitude: 37.70125,
  longitude: -122.4234
}

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        scrollEnabled={true} // Enable scrolling on the map
      >
        <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={5}
    strokeColor="black"
       />
    <Marker
      coordinate={origin}
      title={'origin'}     
    />
    <Marker
      coordinate={destination}
      title={'Destination'}     
    />

      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, // Makes the view fill the entire screen
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
  },
  markerImage: {
    width: 90, // Set the width of the image
    height: 90, // Set the height of the image
    resizeMode: "contain", // Ensures the image is not stretched
  },
});

export default Routemap;
