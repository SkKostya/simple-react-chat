import React from "react";
import firebase from "firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { LogIn, ChatWindow, UsersSidebar } from "./components";
import { Context } from ".";

interface IMessage {
  userName: string | null;
  text: string;
  date?: Date;
};

function App() {
  const { auth, firestore } = React.useContext(Context);
  const [ user, loading, error ] = useAuthState(auth);
  const [ messages, mLoading, mError ] = useCollectionData(
    firestore.collection("messages").orderBy("date")
  );
  const [ users, uLoading, uError ] = useCollectionData(
    firestore.collection("users").orderBy("uid")
  );

  const onLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);

    if(users) {
      if(!!!users.find(({ uid }) => user.uid === uid)) {
        await firestore.collection("users").add({ uid: user.uid, userName: user.displayName });
      }
    }
  };

  const onLogOut = async () => {
    await auth.signOut();
  };

  const onAddMessage = async ({ userName, text }: IMessage) => {
    await firestore.collection("messages").add({
      userName,
      text,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  };

  if(error) {
    return <div>{JSON.stringify(error)}</div>
  }
  if(mError) {
    return <div>{JSON.stringify(error)}</div>
  }
  if(uError) {
    return <div>{JSON.stringify(error)}</div>
  }

  const validMessages = messages
    ? messages.map(({ userName, text, date }) => {
      return { userName, text, date: date && date.toDate() }
    })
    : [];

  return (
    <div className="wrapper">
      {!user || !messages || !users
        ? <LogIn isLoading={loading || mLoading || uLoading} onLogin={onLogin} />
        : <div className="chat">
          <ChatWindow
            messages={validMessages}
            userName={user.displayName}
            onAddMessage={onAddMessage}
          />
          <UsersSidebar onLogOut={onLogOut} users={users?.map(({ userName }) => userName) || []} />
        </div>
      }
    </div>
  );
}

export default App;
