import React from "react";

const Chip: React.FC<{ text: string }> = ({ text }) => {
  return <div className="bg-brand-light px-5 py-3">{text}</div>;
};

export default Chip;
