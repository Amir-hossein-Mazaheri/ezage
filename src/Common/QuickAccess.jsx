import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WIDTH = 40;
const HEIGHT = WIDTH;

const QuickAccess = () => {
  return (
    <View style={styles.quickAccess}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quickAccess: {
    position: "absolute",
    alignSelf: "flex-end",
    right: "10%",
    top: "1200%",
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 999,
    backgroundColor: "#000",
  },
});

export default QuickAccess;
