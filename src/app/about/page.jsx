import { Title } from "../../components/about/title";

import React from "react";

const About = () => {
  return (
    <div
      onClick={() => {
        console.log("this is an about page");
      }}
    >
      <Title />
      <span>this is an about page</span>
    </div>
  );
};

export default About