import { FETCH_FAVORS, LOADING_DATA, ADD_FAVOR } from "../actions/types";

const initialState = {
  favors: [],
  loading: false
};

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FAVORS:
      return {
        favors: action.payload,
        loading: false
      };
    case ADD_FAVOR:
      return {
        favors: action.payload,
        loading: false
      };
    case LOADING_DATA:
      return {
        loading: true,
        favors: []
      };
    default:
      return initialState;
  }
}
