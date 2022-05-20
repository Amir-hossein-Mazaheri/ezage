import React, { useCallback, useContext } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import unsplashSearch from "../Api/unsplashSearch";
import Loading from "../Common/Loading";
import SearchContext, {
  addToResults,
  incrementPage,
  setNextPageSearchingStatus,
} from "../Context/SearchContext";
import ImageCard from "./ImageCard";

const SearchResults: React.FC = () => {
  const {
    searchSlice: { results, isSearching, page, query, isSearchingForNextPage },
    dispatch,
  } = useContext(SearchContext);

  const getNextPage = useCallback(async () => {
    dispatch(setNextPageSearchingStatus({ status: true }));
    dispatch(incrementPage());
    try {
      const { data } = await unsplashSearch.get("/", {
        params: { query, page: page + 1 },
      });

      dispatch(setNextPageSearchingStatus({ status: false }));
      dispatch(addToResults({ results: data.results, count: data.total }));
    } catch (err) {
      console.log(err, "\n");
      console.log(err.response, "\n");
    }
  }, [dispatch, page, query]);

  if (isSearching) {
    return <Loading />;
  }

  return (
    <View style={styles.searchResults}>
      <FlatList
        data={results}
        keyExtractor={(item) => (item as { id: string }).id}
        onEndReached={getNextPage}
        ListFooterComponent={isSearchingForNextPage && <Text>Loading...</Text>}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageCard
            id={item.id}
            title={item.alt_description}
            url={item.urls.small}
            description={item.description}
            likes={item.likes}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchResults: {
    marginVertical: 15,
    paddingHorizontal: 15,
    flex: 1,
  },
});

export default SearchResults;
