import { GET_CHARACTER, CHARACTER_INFO } from "../actions/types";

export default function characterReducer(state = {}, action) {
  switch (action.type) {
    case CHARACTER_INFO:
      return {
        characterInfo: action.payload,
        ...state
      };
    case GET_CHARACTER:
      return {
        character: action.payload,
        ...state
      };
    default:
      return state;
  }
}
