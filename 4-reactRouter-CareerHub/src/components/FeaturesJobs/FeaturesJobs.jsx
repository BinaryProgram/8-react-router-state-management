import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturesJob from "../FeaturesJob/FeaturesJob";

const FeaturesJobs = () => {
  const [featureJobs, setFeatureJobs] = useState([]);
  // bangla system to handle see all jobs
  const  [seeJobs,setSeeJobs] = useState(4);
  useEffect(() => {
    axios.get("../jobs.json").then((res) => setFeatureJobs(res.data));
  }, []);
  return (
    <div>
      <div className="mb-6 flex flex-col items-center gap-3 text-center">
        <h1 className="font-[manrope] text-5xl font-extrabold text-[#1a1919]">
          Featured Jobs
        </h1>
        <p className="font-[manrope] text-base font-medium text-[#757575]">
          Our most recommended job openings, selected for visibility, value, and
          career growth.
        </p>
      </div>
      <section className="grid items-center gap-6 lg:grid-cols-2">
        {featureJobs.slice(0,seeJobs).map((featureJob) => (
          <FeaturesJob
            featureJob={featureJob}
            key={featureJob.id}
          ></FeaturesJob>
        ))}
      </section>
      <div onClick={() => setSeeJobs(featureJobs.length)} className={`flex justify-center my-16 ${seeJobs===featureJobs.length && 'hidden'}`}>
        <button className="btn mt-7 rounded-lg border-none bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 font-[manrope] text-xl font-extrabold text-[#fff]">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturesJobs;
