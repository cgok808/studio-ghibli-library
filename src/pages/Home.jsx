import React from "react";
import {
  Discounted,
  Explore,
  Featured,
  Highlights,
  Landing,
} from "../components";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
