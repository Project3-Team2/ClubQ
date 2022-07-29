import React from "react";
import AdminPageOn from "../components/HomePageOn";
import AdminPageOff from "../components/AdminPageOff";
import { useQuery } from "@apollo/client";
import { SWITCH } from "../utils/queries";


const AdminPage = () => {
  const { data } = useQuery(SWITCH);
  const Switch = data?.switch || [];

  if (Switch.length) {
    return <AdminPageOn />;
  } else {
    return <AdminPageOff />;
  }
};

export default AdminPage;
