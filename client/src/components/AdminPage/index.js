import React from "react";
import { useQuery } from "@apollo/client";
import { SWITCH } from "../../utils/queries";

const AdminPage = () => {
  const { data } = useQuery(SWITCH);
  const Switch = data?.switch || [];
  if (Switch.length) {
    return <div>You have Queue now</div>;
  } else {
    return <div>You have no Queue</div>;
  }
};
export default AdminPage;



