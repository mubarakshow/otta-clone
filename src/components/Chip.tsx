import React from "react";

const Chip: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-brand-light px-3 py-1 rounded-xl shadow-sm">{text}</div>
  );
};

export default Chip;
