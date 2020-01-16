import jsonPlaceholder from "./JsonPlaceholder";

//Agrega al api
export const createCharacter = async character => {
  const response = await jsonPlaceholder.post("/characters", character);
  return response.data;
};

export const createVote = async vote => {
  const { userId, chars, winner } = vote;
  //Verificar si existe el voto en el json
  const oldVoteResponse = await jsonPlaceholder.get("/votes");
  const oldVotes = oldVoteResponse.data;

  const voto = oldVotes.find(
    v =>
      v.userId === userId &&
      v.chars.includes(chars[0]) &&
      v.chars.includes(chars[1])
  );
  //Si existe, comprobar si es cambio de voto(Winners diferentes)
  if (voto) {
    //Si es cambio de voto, insertar
    if (winner !== voto.winner) {
      await jsonPlaceholder.post("/votes", vote);
    }
    //Eliminar el voto pasado
    await jsonPlaceholder.delete(`/votes/${voto.id}`);
  } else {
    //Si no existe, agregar voto (Post)
    await jsonPlaceholder.post("/votes", vote);
  }
  return vote;
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
