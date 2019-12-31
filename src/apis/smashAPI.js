import jsonPlaceholder from "./JsonPlaceholder";
export const createCharacter = async character => {
  const response = await jsonPlaceholder.post("/characters", character);
  return response.data;
};

export const getCharacters = async () => {
  var response = await jsonPlaceholder.get("/characters");
  return response.data;
};

export const getCharacter = async id => {
  var response = await jsonPlaceholder.get(`/characters/${id}`);
  return response.data;
};
