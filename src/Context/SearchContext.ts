import { createContext } from "react";
import { ActionCreator, Dispatch, Reducer, SimpleActionCreator } from "Store";

export interface ResultItem {
  id: string;
  alt_description: string;
  urls: { small: string };
  description: string;
  likes: number;
}

export interface SearchSlice {
  query: string;
  results: ResultItem[];
  count: number;
  page: number;
  isSearching: boolean;
  isSearchingForNextPage: boolean;
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
  SET_QUERY,
  APPLY_RESULTS,
  ADD_TO_RESULTS,
  SET_SEARCHING_STATUS,
  INCREMENT_LIKE,
  INCREMENT_PAGE,
}

type ResultSetter = Pick<SearchSlice, "results" | "count">;

// Action Creators
export const applyResults: ActionCreator<ResultSetter> = (payload) => ({
  type: SearchActions.APPLY_RESULTS,
  payload,
});

export const addToResults: ActionCreator<ResultSetter> = (payload) => ({
  type: SearchActions.ADD_TO_RESULTS,
  payload,
});

export const setQuery: ActionCreator<{ query: string }> = (payload) => ({
  type: SearchActions.SET_QUERY,
  payload,
});

export const setSearchingStatus: ActionCreator<{ status: boolean }> = (
  payload
) => ({
  type: SearchActions.SET_SEARCHING_STATUS,
  payload,
});

export const incrementLike: ActionCreator<{ id: string }> = (payload) => ({
  type: SearchActions.INCREMENT_LIKE,
  payload,
});

export const incrementPage: SimpleActionCreator = () => ({
  type: SearchActions.INCREMENT_PAGE,
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
      const { results, count } = action.payload as {
        results: ResultItem[];
        count: number;
      };
      const combinedResults = [...store.results, ...results];
      return {
        ...store,
        results: combinedResults,
        count,
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

    case SearchActions.INCREMENT_LIKE: {
      if (!("payload" in action)) {
        console.assert("payload didn't provided!");
        return store;
      }

      const { id } = action.payload as { id: string };
      const cStore = { ...store };
      const wantedImageIndex = cStore.results.findIndex(
        (item) => item.id === id
      );
      const wantedImage = cStore.results[wantedImageIndex];
      wantedImage.likes++;
      return cStore;
    }

    case SearchActions.INCREMENT_PAGE: {
      const currentPage = store.page;
      return { ...store, page: currentPage + 1 };
    }

    case SearchActions.SET_QUERY: {
      if (!("payload" in action)) {
        console.assert("payload didn't provided!");
        return store;
      }

      return { ...store, query: (action.payload as { query: string }).query };
    }

    default:
      return store;
  }
};

export default SearchContext;
