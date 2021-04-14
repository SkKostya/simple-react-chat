import React from 'react';
import axios from 'axios';

import socket from './socket';
import './App.scss';
import Reducer from './reducer';

import { LogIn, ChatWindow, UsersSidebar } from "./components";

const INITIAL_STATE = {
  joined: false,
  userName: null,
  users: [],
  messages: [],
};

function App() {
  const [state, dispatch] = React.useReducer((arg: any, action: any) => Reducer(arg, action), INITIAL_STATE);

  const onLogin = async (obj: { userName: string }) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);
    const { data } = await axios.get(`/rooms`);
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  };

  const setUsers = (users: string[]) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    });
  };

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
  }, []);

  console.log(state)

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
