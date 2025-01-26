import { StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import MarkerPin from "./MarkerPin";
import React from "react";

const MapMarker = (markerData) => {
  const { coordinate, title } = markerData;
  return (
    <Marker
      {...markerData}
      onPress={(e) => {
        console.log(e.nativeEvent);
      }}
    >
      <MarkerPin />
    </Marker>
  );
};

export default MapMarker;

const styles = StyleSheet.create({});
