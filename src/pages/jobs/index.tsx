import React from "react";
import { useParams } from "react-router-dom";

const Jobs: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();

  return (
    <div>
      <h2>Jobs page - {pageId}</h2>
    </div>
  );
};

export default Jobs;
