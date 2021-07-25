import React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="sm:px-32 sm:py-10">{children}</div>
    </>
  );
};

export default Layout;
