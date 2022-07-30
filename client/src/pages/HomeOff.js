import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function offHomePage(props) {
  return (
    <div>
      <Nav />
        <h4>There is no Line up at the club right now!</h4>
        <h4>Feel Free to walkin!</h4>
      <Footer />
    </div>
  );
}

export default offHomePage;
