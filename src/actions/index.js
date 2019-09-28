import { token } from "../data";
import axios from "axios";

export const HERO_LOADING = "HERO_LOADING";
export const HERO_SUCCESS = "HERO_SUCCESS";
export const HERO_FAIL = "HERO_FAIL";
export const UPDATE_HERO = "UPDATE_HERO";

export const loadHero = (e, hero) => dispatch => {
  e.preventDefault();
  dispatch({ type: HERO_LOADING, payload: hero });

  axios
    .get(`https://superheroapi.com/api/${token}/search/${hero}`)
    .then(res => dispatch({ type: HERO_SUCCESS, payload: res.data.results }))
    .catch(err => dispatch({ type: HERO_FAIL, payload: err }));
};

export const updateHero = hero => dispatch => {
  dispatch({ type: UPDATE_HERO, payload: hero });
};
