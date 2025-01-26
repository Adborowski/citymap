import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { getDummyMarkers } from "../util";
import MapMarker from "./MapMarker";
import React from "react";

const MapMarkers = () => {
  const [selectedMarker, setSelectedMarker] = useState();
  const [markers, setMarkers] = useState(getDummyMarkers());

  return (
    <>
      {markers.map((marker) => (
        <MapMarker
          key={`${marker.title}${marker.coordinate.latitude.toString()}`}
          marker={marker}
          setSelectedMarker={setSelectedMarker}
        />
      ))}
    </>
  );
};

export default MapMarkers;

const styles = StyleSheet.create({});
