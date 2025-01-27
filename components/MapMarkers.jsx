import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { ansiColors, getDummyMarkers } from "../util";
import MapMarker from "./MapMarker";
import React from "react";

const MapMarkers = ({ markers }) => {
  const [selectedMarker, setSelectedMarker] = useState();

  return (
    <>
      {markers.map((marker) => {
        return (
          <MapMarker
            key={`${marker.title}${marker.coordinate.latitude.toString()}`}
            marker={marker}
            setSelectedMarker={setSelectedMarker}
          />
        );
      })}
    </>
  );
};

export default MapMarkers;

const styles = StyleSheet.create({});
