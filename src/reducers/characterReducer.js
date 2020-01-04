import {
  GET_CHARACTER,
  CHARACTER_INFO,
  SET_LOADING,
  GET_VOTES
} from "../actions/types";
const initialState = {
  characterInfo: null,
  character: null,
  isLoading: true
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_INFO:
      return {
        ...state,
        characterInfo: action.payload
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload
      };
    case GET_VOTES:
      return {
        ...state,
        votes: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};
