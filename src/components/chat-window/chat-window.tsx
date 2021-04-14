import React from "react";

import Message from "./message";
import Form from "./form";

import { IProps as IMessage } from "./message";

interface IAddMessage {
  userName: string;
  text: string;
}

interface IProps {
  messages: IMessage[];
  userName: string;
  onAddMessage: ({ userName, text }: IAddMessage) => void;
};

const ChatWindow = ({ messages, userName, onAddMessage }: IProps) => {
  const [messageValue, setMessageValue] = React.useState("");
  const messagesRef = React.useRef<any>(null);

  const onSendMessage = () => {
    onAddMessage({ userName, text: messageValue });
    setMessageValue("");
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-window__messages">
        <div ref={messagesRef} className="chat-window__messages-wrapper">
          {messages.map((message, i) => (
            <Message {...message} key={i} />
          ))}
        </div>
        <Form
          {...{
            messageValue,
            setMessageValue,
            onSendMessage
          }}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
