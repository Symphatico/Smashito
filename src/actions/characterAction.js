import { createCharacter, getCharacters } from "../apis/smashAPI";

export const characterInfo = () => async dispatch => {
  const response = await getCharacters();
  dispatch({
    type: "CHARACTER_INFO",
    payload: response
  });
};

export const newCharacter = character => async dispatch => {
  await createCharacter(character);
  dispatch({
    type: "CREATE_CHARACTER",
    payload: character
  });
};
