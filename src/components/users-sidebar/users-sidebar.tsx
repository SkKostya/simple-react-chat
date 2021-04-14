import React from "react";

interface IProps {
  users: string[];
};

const UsersSidebar = ({ users }: IProps) => {
  return (
    <div className="users-sidebar">
      <h3>Онлайн ({users.length}):</h3>
      <ul className="users-sidebar__list">
        {users.map((name, index) => (
          <li className="users-sidebar__item" key={name + String(index)}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersSidebar;
