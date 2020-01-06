import axios from "axios";
import { FETCH_USER, FETCH_FAVORS, ADD_FAVOR, LOADING_DATA } from "./types";

export const fetchUser = () => async dispatch => {
  dispatch(setLoadingData());
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFavors = () => async dispatch => {
  const res = await axios.get("/api/favors");

  dispatch({ type: FETCH_FAVORS, payload: res.data });
};

export const addFavor = () => async dispatch => {
  dispatch(setLoadingData());
  const res = await axios.post("/api/favors");

  dispatch({ type: ADD_FAVOR, payload: res.data });
};

export const setLoadingData = () => {
  return {
    type: LOADING_DATA
  };
};
