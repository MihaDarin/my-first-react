import React from "react";
import User from "./User/User";
const Users = (props) => {
  if (props.usersData.length === 0) {
    props.setUsers([
      {
        id: 1,
        name: "Legolas",
        avatar: "some picture",
        status: "some status",
        location: {
          country: "some country",
          city: "some city",
        },
        follow: true,
      },
      {
        id: 2,
        name: "Aragorn",
        avatar: "some picture",
        status: "some status",
        location: {
          country: "some country",
          city: "some city",
        },
        follow: false,
      },
      {
        id: 3,
        name: "Gimli",
        avatar: "some picture",
        status: "some status",
        location: {
          country: "some country",
          city: "some city",
        },
        follow: false,
      },
      {
        id: 4,
        name: "Gendlaf",
        avatar: "some picture",
        status: "some status",
        location: {
          country: "some country",
          city: "some city",
        },
        follow: true,
      },
    ]);
  }
  const usersData = props.usersData.map((user) => {
    return (
      <User
        key={user.id}
        avatar={user.avatar}
        name={user.name}
        status={user.status}
      />
    );
  });
  return (
    <div>
      {usersData}
      {/* {props.usersData.map((user) => (
        <div >
          <div>
            {user.follow ? (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                FOLLOW
              </button>
            )}{" "}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Users;
