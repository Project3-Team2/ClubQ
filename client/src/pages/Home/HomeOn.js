import React from "react";
import { useQuery } from "@apollo/client";
import { CURRENT } from "../../utils/queries";
import WaitTime from "./WaitTime.js";
import JoinForm from "./JoinForm.js";

const OnHomePage = () => {
  const { data } = useQuery(CURRENT);
  const Current = data?.current || [];
  return (
    <main>
      <h3>Join the Queue!</h3>
      <h4>Today Queue Id: {Current.queueId}</h4>
      <JoinForm queueId={Current.queueId} />
    </main>
  );
};

export default OnHomePage;
