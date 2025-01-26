import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IonIcon from "@reacticons/ionicons";
import { getRandomColor } from "../util";
import { PlatformColor } from "react-native";

const pinSize = 36;

const MarkerPin = () => {
  const pinColor = PlatformColor("systemBlue");

  return (
    <View style={[styles.markerPinWrapper, { backgroundColor: pinColor }]}>
      <View style={[styles.markerPinFoot, { backgroundColor: pinColor }]} />
      <Text style={styles.pinText}>!</Text>
    </View>
  );
};

export default MarkerPin;

const styles = StyleSheet.create({
  markerPinWrapper: {
    width: pinSize,
    height: pinSize,
    borderRadius: 60,
    flexDirection: "column",
    justifyContent: "center",
  },

  pinText: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    fontWeight: 600,
  },

  markerPinFoot: {
    position: "absolute",
    top: "60%",
    left: "25%",
    width: "50%",
    height: "50%",
    backgroundColor: "inherit",
    transform: [{ rotate: "45deg" }],
  },
});
