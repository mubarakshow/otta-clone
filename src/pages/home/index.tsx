import React from "react";
import Layout from "../../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-bold text-xl">Welcome to Otta Clone</h2>
        <p className="text-gray-600">IFG Frontend Challenge</p>
        <br />
        <p>
          By{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://linkedin.com/in/mubarak4show"
            className="underline"
          >
            Mubarak Showole
          </a>
        </p>
        <p>
          Github:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://github.com/mubarakshow"
            className="underline"
          >
            @mubarakshow
          </a>
        </p>
        <p>
          Twitter:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://twitter.com/mubarak4show"
            className="underline"
          >
            @mubarak4show
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Home;
