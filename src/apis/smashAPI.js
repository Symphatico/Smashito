import jsonPlaceholder from "./JsonPlaceholder";
//Agrega al api
export const createCharacter = async character => {
  const response = await jsonPlaceholder.post("/characters", character);
  return response.data;
};

export const createVote = async vote => {
  console.log(vote);
  const response = await jsonPlaceholder.post("/votes", vote);
  return response.data;
};

//saca el objeto del api de personaje
export const getCharacters = async () => {
  var response = await jsonPlaceholder.get("/characters");
  return response.data;
};

//Obtiene un personaje del api
export const getCharacterAPI = async id => {
  var response = await jsonPlaceholder.get(`/characters/${id}`);
  return response.data;
};

//Saca el objeto del api de votos
export const getVotes = async () => {
  var response = await jsonPlaceholder.get("/votes");
  return response.data;
};
