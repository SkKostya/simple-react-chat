import React from "react";

import { getRooms } from "./helpers/api";

import socket from "./socket";
import { ROOM_JOIN, ROOM_SET_USERS, ROOM_NEW_MESSAGE } from "./constants/socket";
import { INITIAL_STATE } from "./constants/initial-state";

import MainReducer from "./redux.reducers";
import { joinRoom, setData, setUsers as setUsersAction, addMessage } from "./redux.actions";

import { LogIn, ChatWindow, UsersSidebar } from "./components";

interface IMessage {
  userName: string;
  text: string;
  date?: Date;
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

  const messageDispatch = (message: IMessage) => {
    dispatch(addMessage(message));
  };

  const onAddMessage = ({ userName, text }: IMessage) => {
    const message = { userName, text, date: new Date() };
    socket.emit(ROOM_NEW_MESSAGE, message);
    messageDispatch(message);
  };

  const setUsers = (users: string[]) => {
    dispatch(setUsersAction(users));
  };

  React.useEffect(() => {
    socket.on(ROOM_SET_USERS, setUsers);
    socket.on(ROOM_NEW_MESSAGE, messageDispatch);
  }, []);

  return (
    <div className="wrapper">
      {!state.joined
        ? <LogIn onLogin={onLogin} />
        : <div className="chat">
          <ChatWindow
            messages={state.messages}
            userName={state.userName}
            onAddMessage={onAddMessage}
          />
          <UsersSidebar users={state.users} />
        </div>
      }
    </div>
  );
}

export default App;
