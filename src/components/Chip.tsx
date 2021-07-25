import React from "react";

const Chip: React.FC<{ text: string }> = ({ text }) => {
  return <div className="bg-brand-light px-2 py-1 rounded-2xl">{text}</div>;
};

export default Chip;
