import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <button className="btn btn-outline btn-warning">
        <NavLink to="/">Back Home</NavLink>
      </button>
    </div>
  );
};

export default ErrorPage;
