import React from "react";
import { GenericButton } from "../components/GenericButton";

const About = () => {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1>About Page Content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        corporis fugit ut temporibus asperiores? Voluptates sapiente debitis
        tempore dicta vero magni velit ipsa voluptate. Praesentium dolor
        perspiciatis fugiat deleniti debitis?
      </p>

      <GenericButton buttonMargin="100px" buttonText="Register" />
    </div>
  );
};

export default About;
