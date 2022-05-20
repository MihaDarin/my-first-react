import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import userDefaultPhoto from "../../assets/images/user.png";
import axios from "axios";
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
              className={props.currentPage === page ? style.active : style.item}
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
          <NavLink to={"./../profile/" + user.id}>
            <img
              src={user.avatar != null ? user.avatar : userDefaultPhoto}
              alt="avatar"
              className={style.defaultPhoto}
            />
          </NavLink>
          <div>{user.name}</div>
          <div>{user.status}</div>
          <div>
            {user.follow ? (
              <button
                onClick={() => {
                  axios
                    .get(`http://localhost:3001/users/${user.id}`)
                    .then((response) => {
                      props.unfollow(response.data.id);
                    });
                }}
              >
                UNFOLLOW{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .get(`http://localhost:3001/users/${user.id}`)
                    .then((response) => {
                      props.follow(response.data.id);
                    });
                }}
              >
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
