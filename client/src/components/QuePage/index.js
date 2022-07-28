import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { QUERY_QUEUES } from "../../utils/queries";

function QuePage() {
  const { loading, data } = useQuery(QUERY_QUEUES);
  const queue = data?.queues || [];
  console.log(queue);
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {queue &&
            queue.map((queue) => (
              <div key={queue._id} className="card mb-3">
                <p className="card-header">
                  {queue.queueId} Queue on {queue.createdAt}
                </p>
                <div className="card-body">
                  {queue.customers.map((customer) => (
                    <div>
                    {customer.username}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default QuePage;
