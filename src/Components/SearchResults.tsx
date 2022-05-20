import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Loading from "../Common/Loading";
import SearchContext from "../Context/SearchContext";
import ImageCard from "./ImageCard";

const SearchResults: React.FC = () => {
  const {
    searchSlice: { results, isSearching },
  } = useContext(SearchContext);

  if (isSearching) {
    return <Loading />;
  }

  return (
    <View style={styles.searchResults}>
      <FlatList
        data={results}
        keyExtractor={(item) => (item as { id: string }).id}
        renderItem={({ item }) => (
          <ImageCard
            id={item.id}
            title={item.alt_description}
            url={item.urls.small}
            description={item.description}
            likes={item.likes}
          />
        )}
        showsVerticalScrollIndicator={false}
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
