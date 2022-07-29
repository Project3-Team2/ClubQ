import React from "react";
import { useQuery } from "@apollo/client";
import { CURRENT } from "../../utils/queries";
import JoinForm from "../../pages/JoinForm.js";

const OnHomePage = () => {
  const { data } = useQuery(CURRENT);
  const Current = data?.current || [];
  return (
    <main>
      <h3>Join the Queue!</h3>
      <h4>Today Queue Id: {Current.queueId}</h4>
      <JoinForm />
    </main>
  );
};

export default OnHomePage;
