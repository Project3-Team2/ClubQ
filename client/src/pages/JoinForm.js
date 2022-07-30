import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_CUSTOMER } from "../utils/mutations";
import { CURRENT } from "../utils/queries";
import Auth from '../utils/auth';
const JoinForm = () => {
  const [addCustomer] = useMutation(ADD_CUSTOMER);
  const { data } = useQuery(CURRENT);
  const Current = data?.current || [];
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const temp = await addCustomer({
        variables: { queueId: Current.queueId, ...formState },
      });
      localStorage.setItem("queue_Id", Current.queueId);
      localStorage.setItem("username", formState.username);
      window.location.assign("/DisplayQueue");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="Phone"
          name="phone"
          type="phone"
          id="phone"
          value={formState.phone}
          onChange={handleChange}
        />
        <button className="btn d-block w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
