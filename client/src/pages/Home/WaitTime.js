import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUEUE } from "../../utils/queries";

const WaitTime = ({ queueId }) => {
  const { data } = useQuery(QUERY_QUEUE, {
    variables: { queueId: queueId },
  });
  const Queue = data?.queue || [];
  const wait_time = Queue.wait_time;
  const extra_time = Queue.customers.length * wait_time;
  const total = wait_time + extra_time;
  const people_count = Queue.customers.length;
  return (
    <main>
      <div>
        <h4>There are {people_count} people in the queue</h4>
      </div>
      <div>
        <h4>Current Wait Time: {total} Minutes</h4>
      </div>
    </main>
  );
};

export default WaitTime;
