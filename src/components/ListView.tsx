import React from "react";

interface ListViewProps {
  title?: string;
  data?: Array<string>;
}

const ListView: React.FC<ListViewProps> = ({ title, data }) => {
  return (
    <div className="px-5">
      {title && <h2>{title}</h2>}
      <ul className="list-disc space-y-3">
        {data &&
          data.map((text, i) => (
            <li className="text-justify" key={i}>
              {text}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListView;
