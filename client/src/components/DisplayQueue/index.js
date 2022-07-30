import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUEUES } from "../../utils/queries";

const Display = () => {
  const { data } = useQuery(QUERY_QUEUES);
  const queues = data?.queues || [];
  const current_number = queues.length - 1;
  return (
    <div>
      <p>Hello {localStorage.username}</p>
      <p>There are people in front of you</p>
      <p>Your estimate wait time is Minutes</p>
    </div>
  );
};

export default Display;
