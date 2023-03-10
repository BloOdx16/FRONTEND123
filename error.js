import React from "react";
import Error404 from "../error404";
import Navbar from "../navbar";
import Footer from "../footer";

const Error = () => {
  return (
    <>
      <Navbar />
      <Error404 />
      <Footer />
    </>
  );
};

export default Error;