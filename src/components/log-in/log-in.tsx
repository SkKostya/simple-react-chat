import React from "react";

interface IProps {
  onLogin: ({ userName }: { userName: string }) => void;
}

const LogIn = ({ onLogin }: IProps) => {
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!userName) {
      return alert("Неверные данные");
    }
    const obj = {
      userName,
    };
    setLoading(true);
    onLogin(obj);
  };

  return (
    <div className="log-in">
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="log-in__name-field"
      />
      <button disabled={isLoading} onClick={onEnter} className="log-in__button">
        {isLoading ? "ВХОД..." : "ВОЙТИ"}
      </button>
    </div>
  );
}

export default LogIn;
