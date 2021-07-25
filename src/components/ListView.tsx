import React from "react";

interface ListViewProps {
  title?: string;
  data?: Array<string>;
}

const ListView: React.FC<ListViewProps> = ({ title, data }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>{data && data.map((text, i) => <li key={i}>{text}</li>)}</ul>
    </div>
  );
};

export default ListView;
