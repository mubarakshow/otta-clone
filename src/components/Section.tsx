import React from "react";

const Section: React.FC<{ title?: string; center?: boolean }> = ({
  title,
  center,
  children,
}) => {
  return (
    <section className={`items-center mt-6 ${center ? "text-center" : ""}`}>
      {title && <h2 className="font-semibold mb-4">{title}</h2>}
      <div className={center ? "text-center" : ""}>{children}</div>
      <hr className="mt-6" />
    </section>
  );
};

export default Section;
