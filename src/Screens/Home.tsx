import * as React from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
