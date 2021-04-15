import React from "react";

interface IProps {
  users: string[];
  onLogOut: () => void;
};

const UsersSidebar = ({ users, onLogOut }: IProps) => {
  return (
    <div className="users-sidebar">
      <h3>Всего ({users.length}):</h3>
      <ul className="users-sidebar__list">
        {users.map((name, index) => (
          <li className="users-sidebar__item" key={name + String(index)}>{name}</li>
        ))}
      </ul>
      <button className="users-sidebar__log-out" onClick={onLogOut}>Выйти</button>
    </div>
  );
};

export default UsersSidebar;
