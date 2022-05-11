import React from "react";
import axios from "axios";
// import User from "./User/User";
const Users = (props) => {
  if (props.usersData.length === 0) {
    axios.get("http://localhost:3001/users").then((response) => {
      props.setUsers(response.data);
    });
  }

  return (
    <div>
      {props.usersData.map((user) => (
        <div key={user.id}>
          <div>{user.avatar}</div>
          <div>{user.name}</div>
          <div>{user.status}</div>
          <div>
            {user.follow ? (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                {" "}
                UNFOLLOW{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                {" "}
                FOLLOW{" "}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
