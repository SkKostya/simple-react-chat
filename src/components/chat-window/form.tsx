import React from "react";

interface IProps {
  messageValue: string;
  setMessageValue: (value: string) => void;
  onSendMessage: () => void;
};

const Form = ({ messageValue, setMessageValue, onSendMessage }: IProps) => {
  return (
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
  );
};

export default Form;
