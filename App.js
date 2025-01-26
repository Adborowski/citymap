import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LayoutAnimation } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { ansiColors, fluctuate, getRandomColor, getDummyMarkers } from "./util";
import { useState, useEffect, useMemo } from "react";
import MapMarker from "./components/MapMarker";
import MapMarkers from "./components/MapMarkers";
export default function App() {
  const ac = ansiColors;
  const zoom = 25; // camera height
  const delta = zoom * 0.001;

  const [selectedMarker, setSelectedMarker] = useState();
  const [markers, setMarkers] = useState(getDummyMarkers());

  const MarkerDetails = (markerData) => {
    return (
      <View style={{ flex: 1 }}>
        <Text>Some marker</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={() => {
          console.log(ac.green + "map loaded" + ac.reset);
        }}
        style={styles.map}
        initialRegion={{
          latitude: 52.2297,
          longitude: 21.0122,
          latitudeDelta: delta,
          longitudeDelta: delta,
        }}
      >
        <MapMarkers />
      </MapView>
      {selectedMarker && <MarkerDetails {...selectedMarker} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 3,
    width: "100%",
  },
});
