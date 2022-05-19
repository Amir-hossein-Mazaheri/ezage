import * as React from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchResults />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
