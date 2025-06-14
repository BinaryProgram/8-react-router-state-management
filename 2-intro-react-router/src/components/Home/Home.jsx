import React from "react";
import Header from "../Header/Header";
import { Outlet, useLocation, useNavigation } from "react-router";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      <p>Thank's for react routing👌</p>
    </div>
  );
};

export default Home;
