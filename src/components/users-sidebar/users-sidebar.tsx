import React from "react";

interface IProps {
  users: string[];
};

const UsersSidebar = ({ users }: IProps) => {
  return (
    <div className="users_sidebar">
      <h3>Онлайн ({users.length}):</h3>
      <ul className="users_sidebar__list">
        {users.map((name, index) => (
          <li className="users_sidebar__item" key={name + String(index)}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersSidebar;
