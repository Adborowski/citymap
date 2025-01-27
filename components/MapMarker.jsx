import { StyleSheet, Text, View, LayoutAnimation } from "react-native";
import { useRef, useEffect } from "react";
import { Marker, Callout } from "react-native-maps";
import MarkerPin from "./MarkerPin";
import React from "react";
import MarkerCard from "./MarkerCard";

const MapMarker = ({ marker, setSelectedMarker }) => {
  const { coordinate, title } = marker;
  return (
    <Marker
      style={styles.markerWrapper}
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
      <Callout style={styles.calloutWrapper}>
        <MarkerCard {...marker} />
      </Callout>
    </Marker>
  );
};

export default MapMarker;

const styles = StyleSheet.create({
  marker: {},
  calloutWrapper: {
    width: 300,
  },
});
