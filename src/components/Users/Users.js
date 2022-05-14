import React from "react";
import style from "./Users.module.css";
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && style.active}
              onClick={(e) => {
                props.changePage(page);
              }}
              key={page}
            >
              {page}
            </span>
          );
        })}
      </div>

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
