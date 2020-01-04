import jsonPlaceholder from "./JsonPlaceholder";
export const createCharacter = async character => {
  const response = await jsonPlaceholder.post("/characters", character);
  return response.data;
};

export const getCharacters = async () => {
  var response = await jsonPlaceholder.get("/characters");
  return response.data;
};

export const getCharacterAPI = async id => {
  var response = await jsonPlaceholder.get(`/characters/${id}`);
  return response.data;
};

export const getVotes = async () => {
  var response = await jsonPlaceholder.get("/votes");
  return response.data;
};
