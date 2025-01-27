import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Button = ({ onPress, children, label, style }) => {
  return (
    <Pressable style={[styles.buttonWrapper, style]} onPress={onPress}>
      <View style={styles.inner}>
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: "#ffdddd",
    padding: 9,
    borderRadius: 9,
  },
  text: {
    fontSize: 18,
  },
});
