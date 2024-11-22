import React from "react";

const UserCard = ({ user, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <img src={user.avatar} alt={`${user.first_name} avatar`} />
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>Email: {user.email}</p>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
