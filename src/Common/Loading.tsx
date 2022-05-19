import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgb(0,0,0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
