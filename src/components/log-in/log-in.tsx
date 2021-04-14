import React from "react";

interface IProps {
  isLoading: boolean;
  onLogin: () => void;
}

const LogIn = ({ isLoading, onLogin }: IProps) => {
  return (
    <div className="log-in">
      <button disabled={isLoading} onClick={onLogin} className="log-in__button">
        {isLoading ? "ВХОД..." : "Войти с помощью Google"}
      </button>
    </div>
  );
}

export default LogIn;
