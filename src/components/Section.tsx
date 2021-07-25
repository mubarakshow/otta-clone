import React from "react";

const Section: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <section className="py-3">
      <h2 className="font-semibold">{title}</h2>
      {children}
      <hr />
    </section>
  );
};

export default Section;
