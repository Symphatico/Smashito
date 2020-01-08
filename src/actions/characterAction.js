import {
  createCharacter,
  getCharacters,
  getCharacterAPI,
  getVotes,
  createVote
} from "../apis/smashAPI";
import {
  GET_CHARACTER,
  CHARACTER_INFO,
  CREATE_CHARACTER,
  SET_LOADING,
  GET_VOTES,
  CREATE_VOTE,
  SIGN_IN,
  SIGN_OUT
} from "./types";

//////////////VOTOS///////////
export const getAllVotes = () => async dispatch => {
  const response = await getVotes();
  dispatch({
    type: GET_VOTES,
    payload: response
  });
};

export const newVote = vote => async dispatch => {
  await createVote(vote);
  dispatch({
    type: CREATE_VOTE,
    payload: vote
  });
  dispatch(getAllVotes());
};
////////////////////////////////////

/////////////PERSONAJES///////////////
export const newCharacter = character => async dispatch => {
  await createCharacter(character);
  dispatch({
    type: CREATE_CHARACTER,
    payload: character
  });
  dispatch(characterInfo());
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

export const characterInfo = () => async dispatch => {
  const response = await getCharacters();
  dispatch({
    type: CHARACTER_INFO,
    payload: response
  });
};
///////////////////////////////////

//GOOGLE API, SIGN IN////
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
/////////////////////////

/////SPINNER//////////////
export const setLoading = load => {
  return {
    type: SET_LOADING,
    payload: load
  };
};
/////////
