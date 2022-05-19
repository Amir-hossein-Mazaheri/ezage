import { createContext } from "react";
import { ActionCreator, Dispatch, Reducer } from "Store";

export interface ImageSlice {
  id: number | string;
  title: string;
  description: string;
  url: string;
}

export interface ImageContext {
  imageSlice: ImageSlice;
  dispatch: Dispatch;
}

// Context that gets a reducer
const ImageContext = createContext<ImageContext>({
  imageSlice: null,
  dispatch: null,
});

// Actions
export enum ImageActions {
  SET_IMAGE_DETAILS,
}

// Action Creators
export const setImageDetails: ActionCreator<ImageSlice> = (payload) => ({
  type: ImageActions.SET_IMAGE_DETAILS,
  payload,
});

export const imageReducer: Reducer<ImageSlice> = (store, action) => {
  switch (action.type) {
    case ImageActions.SET_IMAGE_DETAILS: {
      if (!("payload" in action)) {
        console.assert("payload didn't provided!");
        return;
      }
      return { ...action.payload } as ImageSlice;
    }

    default:
      return store;
  }
};

export default ImageContext;
