import { JOINED, SET_DATA, SET_USERS } from "./redux.reducers";

export const joinRoom = user => {
  return {
    type: JOINED,
    payload: user,
  }
};

export const setData = data => {
  return {
    type: SET_DATA,
    payload: data,
  }
};

export const setUsers = users => {
  return {
    type: SET_USERS,
    payload: users,
  }
}
