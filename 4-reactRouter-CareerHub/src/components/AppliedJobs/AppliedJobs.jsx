import React, { useEffect, useState } from "react";
import { useLoaderData,Link } from "react-router";
import { getApplyJobApplications } from "../../utility/localStorage";
import { FaAngleDown } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const AppliedJobs = () => {
  const allJobs = useLoaderData();
  const [applyJobs, setApplyJobs] = useState([]);
  const [filterJobs,setFilterJobs] = useState([]);
  const handleFilterJobs = filter => {
    if(filter === 'All'){
      setFilterJobs(applyJobs);
    }
    else if(filter === 'Remote'){
      const remote = applyJobs.filter(job => {
            return job.type.includes('Remote');
      })
      setFilterJobs(remote);
    }
    else if(filter === 'Full Time'){
      const fullTime = applyJobs.filter(job => {
        return job.type.includes('Full Time');
      })
      setFilterJobs(fullTime);
    }
  }

  useEffect(() => {
    // data from localStorage
    const storedId = getApplyJobApplications();
    if (allJobs.length > 0) {
      const appliedJobs = allJobs.filter((job) => storedId.includes(job.id));

      // or

      // const appliedJobs = [];
      // for(const id of storedId){
      //   const job = allJobs.find(jobId => jobId === id);
      //   appliedJobs.push(job);
      // }
      // console.log(appliedJobs);
      setApplyJobs(appliedJobs);
      setFilterJobs(appliedJobs);
    }
  }, [allJobs]);

  return (
    <div>
      <section>
        <div className="flex items-center justify-between">
          <div>
            <img className="w-3xs" src="/src/assets/images/bg1.png" alt="" />
          </div>
          <div>
            <h1 className="font-[manrope] text-2xl font-extrabold text-nowrap text-[#1a1919] md:text-3xl">
              Applied Jobs
            </h1>
          </div>
          <div>
            <img className="w-3xs" src="/src/assets/images/bg2.png" alt="" />
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="flex justify-end">
          <details className="dropdown group">
            <summary className="btn m-1">
              Filter By
              <span className="transform transition-transform duration-50 ease-out group-open:translate-y-1">
                <FaAngleDown />
              </span>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 min-w-fit p-2 shadow-sm">
              <li onClick={() => handleFilterJobs('All')}>
                <a>All</a>
              </li>
              <li onClick={() => handleFilterJobs('Remote')}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleFilterJobs('Full Time')}>
                <a>Full Time</a>
              </li>
            </ul>
          </details>
        </div>
      </section>
      <section className="mt-6">
        {
          filterJobs.map(job => (<div className="mb-5 rounded-lg border border-[#e8e8e8] p-10 flex justify-between items-center flex-col lg:flex-row" key={job.id}>
            <figure className="bg-[#f4f4f4] p-20"><img src={job.logo} alt="" /></figure>
            <div>
              <h1 className="mt-8 font-[manrope] text-2xl font-extrabold text-[#474747]">
                {job.title}
              </h1>
              <h3 className="mt-2 font-[manrope] text-xl font-semibold text-[#757575]">
                {job.company}
              </h3>
              <article className="mt-5 flex gap-2">
                {job.type?.includes("Remote") && (
                  <p className="text-[bg-gradient-to-r to-[#9873FF]] rounded-sm border border-[#7e90fe] from-[#7E90FE] p-3">
                    <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text font-[manrope] text-base font-extrabold text-transparent">
                      Remote
                    </span>
                  </p>
                )}
                {job.type?.includes("Full Time") && (
                  <p className="text-[bg-gradient-to-r to-[#9873FF]] rounded-sm border border-[#7e90fe] from-[#7E90FE] p-3">
                    <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text font-[manrope] text-base font-extrabold text-transparent">
                      Full Time
                    </span>
                  </p>
                )}
              </article>
              <article className="mt-6 flex flex-col gap-3 md:flex-row">
                <p className="flex items-center gap-1 font-[manrope] text-xl font-semibold text-[#757575]">
                  <span>
                    <CiLocationOn></CiLocationOn>
                  </span>
                  <span>{job.location}</span>
                </p>
                <p className="flex items-center gap-1 font-[manrope] text-xl font-semibold text-[#757575]">
                  <span>
                    <AiOutlineDollarCircle></AiOutlineDollarCircle>
                  </span>
                  <span>{job.salary}</span>
                </p>
              </article>
            </div>
            <Link to={`/jobs/${job.id}`}>
              <button className="btn mt-7 rounded-lg border-none bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 font-[manrope] text-xl font-extrabold text-[#fff]">
                View Details
              </button>
            </Link>
          </div>))
        }
      </section>

    </div>
  );
};

export default AppliedJobs;
