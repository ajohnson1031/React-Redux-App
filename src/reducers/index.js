import { initialState } from "../stores";
import {
  TOGGLE_URL,
  UPDATE_HERO,
  HERO_LOADING,
  HERO_SUCCESS,
  HERO_FAIL
} from "actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_URL:
      return { ...state, url: action.payload };
    case UPDATE_HERO:
      return { ...state, hero: action.payload, err: null };
    case HERO_LOADING:
      return { ...state, isLoading: true };
    case HERO_SUCCESS:
      return {
        ...state,
        hero: "",
        heroData: action.payload,
        isLoading: false
      };
    case HERO_FAIL:
      return {
        ...state,
        heroData: [],
        isLoading: false,
        err: action.payload
      };
    default:
      return state;
  }
};
