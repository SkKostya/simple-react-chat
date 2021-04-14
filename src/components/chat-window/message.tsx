import React from "react";
import moment from "moment";

export interface IProps {
  text: string;
  userName: string;
  date: Date;
};

const Message = ({ text, userName, date }: IProps) => {
  return (
    <div className="message">
      <p className="message__text">{text}</p>
      <div className="message__user-container">
        <span className="message__user-name">{userName}</span>
        <span className="message__user-name message__user-name--small">
          {moment(date).toNow()}
        </span>
      </div>
    </div>
  );
};

export default Message;
