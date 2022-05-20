import { createContext } from "react";
import { ActionCreator, Dispatch, Reducer } from "Store";

export interface ResultItem {
  id: string;
  alt_description: string;
  urls: { small: string };
  description: string;
  likes: number;
}

export interface SearchSlice {
  results: ResultItem[];
  count: number;
  page: number;
  isSearching: boolean;
}

export interface SearchContext {
  searchSlice: SearchSlice;
  dispatch: Dispatch;
}

const SearchContext = createContext<SearchContext>({
  searchSlice: null,
  dispatch: null,
});

// Actions
enum SearchActions {
  APPLY_RESULTS,
  ADD_TO_RESULTS,
  SET_SEARCHING_STATUS,
}

// Action Creators
export const applyResults: ActionCreator<
  Omit<SearchSlice, "isSearching" | "page">
> = (payload) => ({
  type: SearchActions.APPLY_RESULTS,
  payload,
});

export const setSearchingStatus: ActionCreator<{ status: boolean }> = (
  payload
) => ({
  type: SearchActions.SET_SEARCHING_STATUS,
  payload,
});

export const searchReducer: Reducer<SearchSlice> = (store, action) => {
  switch (action.type) {
    case SearchActions.APPLY_RESULTS: {
      if (!("payload" in action)) {
        console.assert("payload didn't provided!");
        return store;
      }
      if (!("results" in action.payload)) {
        console.assert("results in action payload didn't provided!");
        return store;
      }
      const { results, count } = action.payload as {
        results: ResultItem[];
        count: number;
      };
      return { ...store, results, count };
    }

    case SearchActions.ADD_TO_RESULTS: {
      if (!("payload" in action)) {
        console.assert("payload didn't provided!");
        return store;
      }
      if (!("results" in action.payload)) {
        console.assert("results in action payload didn't provided!");
        return store;
      }
      const results = (action.payload as { results: ResultItem[] }).results;
      const combinedResults = [...store.results, ...results];
      return {
        ...store,
        results: combinedResults,
        count: combinedResults.length,
      };
    }

    case SearchActions.SET_SEARCHING_STATUS: {
      if (!("payload" in action)) {
        console.assert("payload didn't provided!");
        return store;
      }
      const { status } = action.payload as { status: boolean };
      return {
        ...store,
        isSearching: status,
      };
    }

    default:
      return store;
  }
};

export default SearchContext;
