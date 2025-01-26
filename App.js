import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { ansiColors, fluctuate, getRandomColor } from "./util";
export default function App() {
  const coordWarsaw = { latitude: 52.2297, longitude: 21.0122 };
  const ac = ansiColors;

  const getDummyMarkers = () => {
    const markerCount = 50;
    const markerSpread = 0.03;
    const dummyMarkers = [];

    const primeDummy = {
      title: `marker-prime`,
      coordinate: coordWarsaw,
      pinColor: "#ff0000",
    };

    dummyMarkers.push(primeDummy);

    for (let i = 0; i < markerCount; i++) {
      const latitude = fluctuate(coordWarsaw.latitude, markerSpread);
      const longitude = fluctuate(coordWarsaw.longitude, markerSpread);

      dummyMarkers.push({
        title: `marker-${i}`,
        coordinate: { latitude: latitude, longitude: longitude },
        pinColor: getRandomColor(),
      });
    }

    console.log(`${ac.yellow}${dummyMarkers.length} dummy markers ${ac.reset}`);
    console.log(dummyMarkers[0]);
    return dummyMarkers;
  };

  const zoom = 25; // camera height
  const delta = zoom * 0.001;

  const markers = getDummyMarkers();

  return (
    <View style={styles.container}>
      <Text>Welcome to Warsaw</Text>
      <MapView
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 52.2297,
          longitude: 21.0122,
          latitudeDelta: delta,
          longitudeDelta: delta,
        }}
      >
        {markers.map((marker) => (
          <Marker key={marker.title} {...marker} />
        ))}
      </MapView>
      <StatusBar style="auto" />
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
    width: "100%",
    height: "100%",
  },
});
