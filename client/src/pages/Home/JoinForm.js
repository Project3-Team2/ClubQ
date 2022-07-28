import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER } from "../../utils/mutations";

const JoinForm = ({ queueId }) => {
  console.log(queueId + "now");
  const [addCustomer, { error }] = useMutation(ADD_CUSTOMER);
  const [formState, setFormState] = useState({
    queueId: queueId,
    username: "",
    email: "",
    phone: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addCustomer({
        variables: { ...formState },
      });
      console.log(data);
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
