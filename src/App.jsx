import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";
import { getUsers, deleteUser } from "./api/apiMethods";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchUsers = async () => {
    const userList = await getUsers();
    setUsers(userList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const success = await deleteUser(id);
    if (success) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>User Management</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={fetchUsers} style={{ padding: "5px 10px", marginRight: "10px" }}>
          Reload Users
        </button>
        <FilterBox filter={filter} setFilter={setFilter} />
      </div>
      <UserList users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
};

export default App;
