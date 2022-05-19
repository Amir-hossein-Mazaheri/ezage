import { createContext } from "react";
import { ActionCreator, Dispatch, Reducer } from "Store";

export interface SearchSlice {
  results: unknown[];
  count: number;
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
}

// Action Creators
export const applyResults: ActionCreator<SearchSlice> = (payload) => ({
  type: SearchActions.APPLY_RESULTS,
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
        results: unknown[];
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
      const results = (action.payload as { results: unknown[] }).results;
      const combinedResults = [...store.results, ...results];
      return { results: combinedResults, count: combinedResults.length };
    }

    default:
      return store;
  }
};

export default SearchContext;
