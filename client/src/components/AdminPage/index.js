import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_QUEUE, CLOSE } from "../../utils/mutations";
import { SWITCH, QUERY_QUEUE } from "../../utils/queries";

const AdminPage = () => {
  const { loading, data } = useQuery(SWITCH);
  const Switch = data?.switch || [];
  const [formState, setFormState] = useState({
    queueId: "",
  });
  console.log(Switch[0])
  const [addQueue, { error }] = useMutation(ADD_QUEUE);
  const [closeQueue] = useMutation(CLOSE);
  if (!Switch.switch) {
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const { data } = await addQueue({
          variables: { ...formState },
        });
        const queue = data?.queues || [];
      } catch (e) {
        console.error(e);
      }
    };

    return (
      <main>
        <h4>Create a New Queue for tonight</h4>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Queue Id"
            name="queueId"
            type="queueId"
            id="queueId"
            value={formState.queueId}
            onChange={handleChange}
          />
          <button className="btn d-block w-100" type="submit">
            Submit
          </button>
        </form>
        {error && <div>Add Queue Failed</div>}
      </main>
    );
  } else {
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        await closeQueue();
      } catch (e) {
        console.error(e);
      }
    };
    return (
      <main>
        <h4>Current Queue:</h4>
        <form onSubmit={handleFormSubmit}>
          <button className="btn d-block w-100" type="submit">
            Close Queue
          </button>
        </form>
      </main>
    );
  }
};

export default AdminPage;
