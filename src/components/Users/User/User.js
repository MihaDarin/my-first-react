import React from "react";

const User = (props) => {
  return (
    <div>
      <div>{props.avatar}</div>
      <div>{props.name}</div>
      <div>{props.status}</div>
    </div>
  );
};
export default User;
