import React from "react";
import { useQuery } from "@apollo/client";
import { CURRENT } from "../../utils/queries";
import JoinForm from "../JoinForm/index.js";
import Nav from "../Nav";
import Footer from "../Footer";

const OnHomePage = () => {
  const { data } = useQuery(CURRENT);
  const Current = data?.current || [];
  return (
    <main >
      <Nav />
      <div >
        <h2>Join the Queue!</h2>
        <h3>Today's Queue Id: {Current.queueId}</h3>
      <JoinForm />
      </div>
      <Footer />
    </main>
  );
};

export default OnHomePage;
