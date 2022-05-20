import React, { useReducer } from "react";

import ImageContext, { imageReducer, ImageSlice } from "./ImageContext";
import SearchContext, { searchReducer, SearchSlice } from "./SearchContext";

interface StoreProviderProps {
  children: React.ReactNode;
}

const imageState: ImageSlice = {
  id: -1,
  title: "",
  description: "",
  url: "",
};

const searchState: SearchSlice = {
  query: "",
  results: [],
  page: 1,
  count: -1,
  isOnInit: true,
  isSearching: false,
  isSearchingForNextPage: false,
};

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [imageSlice, dispatchImage] = useReducer(imageReducer, imageState);
  const [searchSlice, dispatchSearch] = useReducer(searchReducer, searchState);

  return (
    <ImageContext.Provider value={{ imageSlice, dispatch: dispatchImage }}>
      <SearchContext.Provider value={{ searchSlice, dispatch: dispatchSearch }}>
        {children}
      </SearchContext.Provider>
    </ImageContext.Provider>
  );
};

export default StoreProvider;
