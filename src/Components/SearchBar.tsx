import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

import { debounce } from "lodash";
import { Feather } from "@expo/vector-icons";
import unsplashSearch from "../Api/unsplashSearch";
import SearchContext, {
  applyResults,
  setSearchingStatus,
} from "../Context/SearchContext";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const {
    searchSlice: { count },
    dispatch,
  } = useContext(SearchContext);

  const doSearch = useCallback(async () => {
    dispatch(setSearchingStatus({ status: true }));
    try {
      const { data } = await unsplashSearch.get("/", {
        params: { query },
      });

      dispatch(setSearchingStatus({ status: false }));
      dispatch(applyResults({ results: data.results, count: data.total }));
    } catch (err) {
      console.log(err, "\n");
      console.log(err.response, "\n");
    }
  }, [dispatch, query]);

  const debouncedSearch = useMemo(() => debounce(doSearch, 500), [doSearch]);

  useEffect(() => {
    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <View style={styles.searchBar}>
      <View style={styles.safeView}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={30}
          color="black"
        />
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          autoComplete={"off"}
          autoCorrect={false}
          autoCapitalize={"none"}
          placeholder={"Search..."}
        />
      </View>
      {count > 0 && <Text style={styles.total}>Total Results : {count}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 15,
    marginTop: 12,
    marginBottom: 5,
  },
  safeView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 999,
    elevation: 15,
    shadowColor: "#ccc",
  },
  searchInput: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#808080",
    flex: 1,
  },
  searchIcon: {
    alignSelf: "center",
  },
  total: {
    textAlign: "center",
    marginTop: 7,
    fontSize: 13,
    fontWeight: "bold",
    color: "dimgray",
  },
});

export default SearchBar;
