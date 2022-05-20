import React from "react";
import { View, Text, StyleSheet } from "react-native";

import * as Progress from "react-native-progress";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Progress.CircleSnail
        size={50}
        color={"white"}
        style={{ marginBottom: 12 }}
      />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Loading;
