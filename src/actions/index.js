import React from "react";
import { token } from "../data";
import axios from "axios";

export const HERO_LOADING = "HERO_LOADING";
export const HERO_SUCCESS = "HERO_SUCCESS";
export const HERO_FAIL = "HERO_FAIL";
export const UPDATE_HERO = "UPDATE_HERO";
export const TOGGLE_URL = "TOGGLE_URL";

export const loadHero = (e, hero) => dispatch => {
  e.preventDefault();
  if (hero === "") {
    dispatch({ type: HERO_FAIL, payload: "Please enter a character name..." });
    return;
  } else dispatch({ type: HERO_LOADING, payload: hero });

  axios
    .get(`https://superheroapi.com/api/${token}/search/${hero}`)
    .then(res =>
      res.data.results !== undefined
        ? dispatch({ type: HERO_SUCCESS, payload: res.data.results })
        : dispatch({
            type: HERO_FAIL,
            payload:
              "Sorry, that character is not in our database. Please try another."
          })
    )
    .catch(err =>
      dispatch({
        type: HERO_FAIL,
        payload: "Sorry, there was an error. Please try again."
      })
    );
};

export const updateHero = hero => dispatch => {
  dispatch({ type: UPDATE_HERO, payload: hero });
};

export const toggleURL = url => dispatch => {
  console.log(url);
  const newURL =
    url === "?" ? (
      <a href="https://superheroapi.com/ids.html" target="_blank">
        LIST OF AVAILABLE CHARACTERS
      </a>
    ) : (
      "?"
    );

  dispatch({
    type: TOGGLE_URL,
    payload: newURL
  });
};
