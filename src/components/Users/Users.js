import React from "react";
import axios from "axios";
// import User from "./User/User";

class Users extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.usersData.length === 0) {
      axios.get("http://localhost:3001/users").then((response) => {
        this.props.setUsers(response.data);
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.usersData.map((user) => (
          <div key={user.id}>
            <div>{user.avatar}</div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>
              {user.follow ? (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
                  }}
                >
                  {" "}
                  UNFOLLOW{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id);
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
  }
}

export default Users;
