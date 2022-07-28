import React from "react";
import { useQuery } from "@apollo/client";
import { SWITCH } from "../../utils/queries";
import HomeOn from "../../pages/Home/HomeOn";
import HomeOff from "../../pages/Home/HomeOff";

const HomePage = () => {
  const { data } = useQuery(SWITCH);
  const Switch = data?.switch || [];

  if (Switch.length) {
    return <HomeOn />;
  } else {
    return <HomeOff />;
  }
};

export default HomePage;
