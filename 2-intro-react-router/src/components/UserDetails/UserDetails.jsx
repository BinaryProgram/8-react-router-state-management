import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  // Navigate on Click, useNavigate, Not Found and useParams
  const navigate = useNavigate();
  const userDetailsNavigate = () => {
    navigate(-1);
  };
  // useParams
  const {userId} = useParams();
  console.log(userId);
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-500">
        City - {user.company.name}
      </h2>
      <h2 className="text-2xl font-bold text-green-500">
        Website - {user.website}
      </h2>
      <button
        onClick={userDetailsNavigate}
        className="btn btn-wide bg-amber-100 text-blue-500"
      >
        Back To User
      </button>
    </div>
  );
};

export default UserDetails;
