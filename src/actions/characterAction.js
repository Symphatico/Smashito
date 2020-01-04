import {
  createCharacter,
  getCharacters,
  getCharacterAPI,
  getVotes
} from "../apis/smashAPI";
import {
  GET_CHARACTER,
  CHARACTER_INFO,
  CREATE_CHARACTER,
  SET_LOADING,
  GET_VOTES
} from "./types";

export const characterInfo = () => async dispatch => {
  const response = await getCharacters();
  dispatch({
    type: CHARACTER_INFO,
    payload: response
  });
};

export const getAllVotes = () => async dispatch => {
  const response = await getVotes();
  dispatch({
    type: GET_VOTES,
    payload: response
  });
};

export const newCharacter = character => async dispatch => {
  await createCharacter(character);
  dispatch({
    type: CREATE_CHARACTER,
    payload: character
  });
};

export const getCharacter = id => async dispatch => {
  dispatch(setLoading(true));
  const response = await getCharacterAPI(id);
  dispatch({
    type: GET_CHARACTER,
    payload: response
  });
  dispatch(setLoading(false));
  return response;
};

export const setLoading = load => {
  return {
    type: SET_LOADING,
    payload: load
  };
};
