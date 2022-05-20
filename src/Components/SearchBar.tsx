import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

import { debounce } from "lodash";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import unsplashSearch from "../Api/unsplashSearch";
import SearchContext, {
  applyResults,
  setQuery,
  setSearchingStatus,
  toggleOnInit,
} from "../Context/SearchContext";
import styles from "./SearchBarStyle";

const SearchBar: React.FC = () => {
  const searchInput = useRef<TextInput>(null);
  const [showClearInput, setShowClearInput] = useState(false);
  const {
    searchSlice: { count, query },
    dispatch,
  } = useContext(SearchContext);

  const setQ = useCallback(
    (query: string) => {
      if (!query.trim()) {
        console.log("empty query \n");
        dispatch(toggleOnInit());
      }
      dispatch(setQuery({ query }));
    },
    [dispatch]
  );

  const clearSearch = useCallback(() => {
    setQ("");
    setShowClearInput(false);
    searchInput.current.blur();
  }, [setQ]);

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
          ref={searchInput}
          onChangeText={setQ}
          onFocus={() => setShowClearInput(true)}
          onBlur={() => setShowClearInput(false)}
          autoComplete={"off"}
          autoCorrect={false}
          autoCapitalize={"none"}
          placeholder={"Search..."}
        />
        {showClearInput && (
          <TouchableOpacity style={styles.clearInput} onPress={clearSearch}>
            <FontAwesome name="times" size={24} color="lightgray" />
          </TouchableOpacity>
        )}
      </View>
      {count > 0 && <Text style={styles.total}>Total Results : {count}</Text>}
    </View>
  );
};

export default SearchBar;
