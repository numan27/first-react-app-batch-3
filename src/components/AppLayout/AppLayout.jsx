import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-5 pt-5">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
