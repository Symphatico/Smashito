export default function characterReducer(state = {}, action) {
  switch (action.type) {
    case "CHARACTER_INFO":
      console.log(action);
      return {
        characterInfo: action.payload,
        ...state
      };
    default:
      return state;
  }
}
