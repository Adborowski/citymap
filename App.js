import { Pressable, StyleSheet, View, Text } from "react-native";
import {
  ansiColors,
  fluctuate,
  getDummyMarkers,
  randomWords,
  roll,
} from "./util";
import { useEffect, useState } from "react";
import MapView from "react-native-maps";
import MapMarkers from "./components/MapMarkers";
import Button from "./components/Button";
import uuid from "react-native-uuid";
import { saveMarker, getMarkers } from "./database";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { useRef } from "react";

export default function App() {
  const warsawCoordinate = { latitude: 52.2297, longitude: 21.0122 };
  const wwa = warsawCoordinate;
  const ac = ansiColors;
  const zoom = 25; // camera height
  const delta = zoom * 0.001;

  const createMarker = () => {
    let newMarker = {
      id: uuid.v4(),
      title: roll(randomWords),
      coordinate: {
        latitude: fluctuate(wwa.latitude, 0.05),
        longitude: fluctuate(wwa.longitude, 0.05),
      },
    };

    saveMarker(newMarker);
  };

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    getMarkers().then((x) => {
      console.log(x);
    });
  }, []);

  useEffect(() => {
    console.log("marker update in app.js");
  }, [markers]);

  return (
    <View
      key={() => {
        return Date.now();
      }}
      style={styles.container}
    >
      <MapView
        onMapReady={() => {
          console.log(ac.green + "map ready" + ac.reset);
        }}
        style={styles.map}
        initialRegion={{
          latitude: 52.2297,
          longitude: 21.0122,
          latitudeDelta: delta,
          longitudeDelta: delta,
        }}
      >
        <MapMarkers markers={markers} />
      </MapView>
      <View style={styles.controls}>
        <Button label={"New Marker"} onPress={createMarker} />
      </View>
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
    flex: 5,
    width: "100%",
  },
  controls: {
    flex: 1,
    padding: 18,
  },
});
