import React from "react";
import moment from "moment";

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
            <div className="message" key={i}>
              <p className="message__text">{message.text}</p>
              <div className="message__user-container">
                <span className="message__user-name">{message.userName}</span>
                <span className="message__user-name message__user-name--small">
                  {moment(message.date).toNow()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <form className="form">
          <input
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form__control"
            placeholder="Введите сообщение"
          />
          <button
            onClick={onSendMessage}
            type="button"
            className="form__button"
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
