import { createCharacter, getCharacters } from "../apis/smashAPI";
import { GET_CHARACTER, CHARACTER_INFO, CREATE_CHARACTER } from "./types";

export const characterInfo = () => async dispatch => {
  const response = await getCharacters();
  dispatch({
    type: CHARACTER_INFO,
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

export const getCharacter = () => async dispatch => {
  const response = await getCharacter();
  dispatch({
    type: GET_CHARACTER,
    payload: response
  });
};
