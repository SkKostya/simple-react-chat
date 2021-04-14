import React from "react";
import moment from "moment";

import "./styles.scss";

interface IMessage {
  text: string;
  userName: string;
  date: Date;
}

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
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.useRef<any>(null);

  const onSendMessage = () => {
    onAddMessage({ userName, text: messageValue });
    setMessageValue('');
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat_window">
      <div className="chat_window__messages">
        <div ref={messagesRef} className="chat_window__messages_wrapper">
          {messages.map((message, i) => (
            <div className="chat_window__message" key={i}>
              <p className="chat_window__message_text">{message.text}</p>
              <div className="chat_window__user_name">
                <span className="chat_window__message_user_name">{message.userName}</span>
                <span className="chat_window__message_user_name chat_window__message_user_name--date">
                  {moment(message.date).toNow()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <form className="chat_window__form">
          <input
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="chat_window__form_control"
            placeholder="Введите сообщение"
          />
          <button
            onClick={onSendMessage}
            type="button"
            className="chat_window__sent_button"
            id="sent-button"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
