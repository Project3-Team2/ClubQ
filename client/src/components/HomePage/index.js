import { DirectiveLocation } from "graphql";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { SWITCH } from "../../utils/queries";

const HomePage = () => {
  const { loading, data } = useQuery(SWITCH);
  const Switch = data?.switch || [];
  if (Switch.switch) {
    return (
      <div>
        <h3>We are now closed</h3>
      </div>
    );
  } else {
    return <h3>We are now opened</h3>;
  }
};

export default HomePage;
