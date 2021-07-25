import React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-32 py-10">{children}</div>
    </>
  );
};

export default Layout;
