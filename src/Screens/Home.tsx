import React, { useContext, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import unsplash from "../Api/unsplash";

import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";
import SearchContext, {
  applyResults,
  setSearchingStatus,
  toggleOnInit,
} from "../Context/SearchContext";

const Home = () => {
  const { dispatch } = useContext(SearchContext);
  const dispatchRef = useRef(dispatch);

  useEffect(() => {
    dispatchRef.current(setSearchingStatus({ status: true }));
    (async () => {
      try {
        const { data } = await unsplash.get("/");
        dispatchRef.current(setSearchingStatus({ status: false }));
        dispatchRef.current(applyResults({ results: data, count: 10 }));
        dispatchRef.current(toggleOnInit());
      } catch (err) {
        console.log(err, "\n");
        console.log(err.response, "\n");
      }
    })();
  }, []);

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
