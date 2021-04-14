export const JOINED = "JOINED";
export const SET_DATA = "SET_DATA";
export const SET_USERS = "SET_USERS";
export const ADD_MESSAGE = "ADD_MESSAGE";

const MainReducer = (state, action) => {
  switch (action.type) {
    case JOINED:
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
      };

    case SET_DATA:
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages
      };

    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};

export default MainReducer;
