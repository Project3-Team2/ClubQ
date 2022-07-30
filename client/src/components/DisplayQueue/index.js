import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUEUE } from "../../utils/queries";
import Nav from "../Nav";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
const current = localStorage.queue_Id;
const Display = () => {
  const { queueId } = useParams();
  const { data } = useQuery(QUERY_QUEUE, {
    variables: { queueId: current },
  });
  const queue = data?.queue || [];
  return (
    <main>
      <Nav />
      <div>
        <p>Hello {localStorage.username}</p>
        <p>Your estimate wait time is {queue.wait_time} Minutes</p>
      </div>
      <Footer />
    </main>
  );
};

export default Display;
