import React from "react";
import { Link } from "react-router-dom";

function User(props) {
  const urlDetails = "/user/" + props.user.id;

  return (
    <div>
      <Link to={urlDetails}>
        <p>
          Nom : {props.user.lastName} <br />
          Prénom : {props.user.firstName} <br />
          Age : {props.user.age}
        </p>
      </Link>
    </div>
  );
}

export default User;
