import { StyleSheet, Text, View, LayoutAnimation } from "react-native";
import { Marker } from "react-native-maps";
import MarkerPin from "./MarkerPin";
import React from "react";

const MapMarker = ({ marker, setSelectedMarker }) => {
  const { coordinate, title } = marker;
  return (
    <Marker
      {...marker}
      onSelect={(e) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setSelectedMarker(marker);
      }}
      onDeselect={(e) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setSelectedMarker();
      }}
    >
      <MarkerPin />
    </Marker>
  );
};

export default MapMarker;

const styles = StyleSheet.create({});
