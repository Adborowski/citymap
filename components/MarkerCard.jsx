import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import React from "react";

const MarkerCard = (marker) => {
  const { title, coordinate, description } = marker;
  const dummyImgUrl = require("../assets/dummy.jpg");
  return (
    <View style={styles.markerCardWrapper}>
      <Text style={styles.imageWrapper}>
        <Image style={styles.image} source={dummyImgUrl} />
      </Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.controls}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>View</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MarkerCard;

const styles = StyleSheet.create({
  markerCardWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 12,
  },
  imageWrapper: {
    width: "100%",
    backgroundColor: "lightgoldenrodyellow",
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    marginTop: 12,
  },
  description: {
    marginTop: 12,
  },
  controls: {
    flexDirection: "row",
    gap: 6,
  },
  button: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 12,
    marginTop: 12,
    borderRadius: 9,
  },
});
