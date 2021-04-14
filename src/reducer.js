const Reducer = (state, action) => {
  switch (action.type) {
    case "JOINED":
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
      };

    case "SET_DATA":
      return {
        ...state,
        users: action.payload.users,
      };

    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
