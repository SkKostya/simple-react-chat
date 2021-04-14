import React from "react";

import { getRooms } from "./helpers/api";

import socket from "./socket";
import { ROOM_JOIN, ROOM_SET_USERS } from "./constants/socket";

import MainReducer from "./redux.reducers";
import { joinRoom, setData, setUsers as setUsersAction } from "./redux.actions";

import { LogIn, ChatWindow, UsersSidebar } from "./components";

const INITIAL_STATE = {
  joined: false,
  userName: null,
  users: [],
  messages: [],
};

function App() {
  const [state, dispatch] = React.useReducer(
    (state: any, action: any) => MainReducer(state, action),
    INITIAL_STATE
  );

  const onLogin = async (obj: { userName: string }) => {
    dispatch(joinRoom(obj));
    socket.emit(ROOM_JOIN, obj);
    const { data } = await getRooms();
    dispatch(setData(data));
  };

  const setUsers = (users: string[]) => {
    dispatch(setUsersAction(users));
  };

  React.useEffect(() => {
    socket.on(ROOM_SET_USERS, setUsers);
  }, []);

  return (
    <div className="wrapper">
      {!state.joined
        ? <LogIn onLogin={onLogin} />
        : <div className="chat">
          <ChatWindow
            messages={[
              {
                text: "Hello Everyone",
                userName: "Jone",
                date: new Date()
              }
            ]}
            userName="Dena"
            onAddMessage={({ userName, text }) => null}
          />
          <UsersSidebar users={state.users} />
        </div>
      }
    </div>
  );
}

export default App;
