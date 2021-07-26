import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Job from "./job";
import jobs from "../../data/jobs.json";
// import { useParams } from "react-router-dom";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Jobs: React.FC = () => {
  // const { pageId } = useParams<{ pageId: string }>();

  useEffect(() => {}, []);

  return (
    <Layout>
      {/* <h2>Jobs page - {pageId}</h2> */}
      <CarouselProvider
        naturalSlideWidth={1100}
        naturalSlideHeight={400}
        totalSlides={jobs.length + 1}
        isIntrinsicHeight
      >
        <Slider className="">
          {jobs &&
            jobs.map((job, i) => (
              <Slide key={i} index={i}>
                <Job data={job} />
              </Slide>
            ))}
          <Slide index={jobs.length}>
            <div className="flex align-middle items-center justify-center h-48 bg-white shadow-sm">
              <h2 className="">The End</h2>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </Layout>
  );
};

export default Jobs;
