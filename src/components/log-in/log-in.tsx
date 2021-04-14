import React from 'react';

import "./styles.scss";

interface IProps {
  onLogin: ({ userName }: { userName: string }) => void;
}

const LogIn = ({ onLogin }: IProps) => {
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!userName) {
      return alert('Неверные данные');
    }
    const obj = {
      userName,
    };
    setLoading(true);
    onLogin(obj);
  };

  return (
    <div className="log_in">
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={isLoading} onClick={onEnter} className="log_in__button">
        {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
      </button>
    </div>
  );
}

export default LogIn;
