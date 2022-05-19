import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default Container;
