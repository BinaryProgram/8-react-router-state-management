import { Link } from "react-router";
import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>OPPs!</h1>
      <p>{error.status || error.statusText}</p>
      {error.status === 404 && (
        <div className="text-center">
          <p>Page not found😇</p>
          <p>Go Back!</p>
          <Link to="/">
            <button className="btn bg-fuchsia-400 btn-regular">Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
