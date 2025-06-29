import { Link, useLoaderData, useParams } from "react-router";
import { PiSubtitles } from "react-icons/pi";
import { CiDollar, CiPhone, CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import {
  getApplyJobApplications,
  saveApplyJobApplications,
} from "../../utility/localStorage";

const Jobs = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(jobs, idInt);

  const handleApplyNow = () => {
    saveApplyJobApplications(idInt);
    toast("Job Applied Successfully");
  };
  return (
    <div className="mb-14">
      <section>
        <div className="flex items-center justify-between">
          <div>
            <img className="w-3xs" src="/src/assets/images/bg1.png" alt="" />
          </div>
          <div>
            <h1 className="font-[manrope] text-2xl font-extrabold text-nowrap text-[#1a1919] md:text-3xl">
              Job Details
            </h1>
          </div>
          <div>
            <img className="w-3xs" src="/src/assets/images/bg2.png" alt="" />
          </div>
        </div>
      </section>
      <section className="mt-14 grid gap-4 lg:grid-cols-4">
        <div className="col-span-2 space-y-6 p-2">
          <h1>
            <span className="font-[manrope] text-base font-extrabold text-[#1a1919]">
              Job Description:
            </span>{" "}
            <span className="font-[manrope] text-base font-medium text-[#757575]">
              {job.details.job_description}
            </span>
          </h1>
          <h1>
            <span className="font-[manrope] text-base font-extrabold text-[#1a1919]">
              Job Responsibility:
            </span>{" "}
            <span className="font-[manrope] text-base font-medium text-[#757575]">
              {job.details.job_responsibility}
            </span>
          </h1>
          <h1>
            <span className="font-[manrope] text-base font-extrabold text-[#1a1919]">
              Educational Requirements:
            </span>{" "}
            <br />{" "}
            <span className="font-[manrope] text-base font-medium text-[#757575]">
              {job.details.educational_requirements}
            </span>
          </h1>
          <h1>
            <span className="font-[manrope] text-base font-extrabold text-[#1a1919]">
              Experience:
            </span>{" "}
            <br />{" "}
            <span className="font-[manrope] text-base font-medium text-[#757575]">
              {job.details.experience}
            </span>
          </h1>
        </div>
        <div className="col-span-2">
          <div className="rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.1)_0%,_rgba(152,115,255,0.1)_100%)] p-3 md:p-6 lg:p-8">
            <h1 className="font-[manrope] text-xl font-extrabold text-[#1a1919]">
              Job Details
            </h1>
            <div className="my-6 border-1 border-[#7e8ffe5e]"></div>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span>
                  <CiDollar className="text-xl text-[#7e90fe]"></CiDollar>
                </span>
                <span className="font-[manrope] text-xl font-bold text-[#474747]">
                  Salary:{" "}
                </span>
                <span className="font-[manrope] text-xl font-medium text-[#757575]">
                  {job.salary}
                </span>
              </p>
              <p className="flex gap-2">
                <span>
                  <PiSubtitles className="text-xl text-[#7e90fe]"></PiSubtitles>
                </span>
                <span className="font-[manrope] text-xl font-bold text-nowrap text-[#474747]">
                  Job Title:{" "}
                </span>
                <span className="font-[manrope] text-xl font-medium text-[#757575]">
                  {job.title}
                </span>
              </p>
            </div>
            <h1 className="mt-6 font-[manrope] text-xl font-extrabold text-[#1a1919]">
              Contact Information
            </h1>
            <div className="my-6 border-1 border-[#7e8ffe5e]"></div>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span>
                  <CiPhone className="text-xl text-[#7e90fe]"></CiPhone>
                </span>
                <span className="font-[manrope] text-xl font-bold text-[#474747]">
                  Phone:{" "}
                </span>
                <span className="font-[manrope] text-xl font-medium text-[#757575]">
                  {job.contact.phone}
                </span>
              </p>
              <p className="flex gap-2">
                <span>
                  <AiOutlineMail className="text-xl text-[#7e90fe]"></AiOutlineMail>
                </span>
                <span className="font-[manrope] text-xl font-bold text-nowrap text-[#474747]">
                  Mail:{" "}
                </span>
                <span className="font-[manrope] text-xl font-medium text-[#757575]">
                  {job.contact.email}
                </span>
              </p>
              <p className="flex gap-2">
                <span>
                  <CiLocationOn className="text-xl text-[#7e90fe]"></CiLocationOn>
                </span>
                <span className="font-[manrope] text-xl font-bold text-nowrap text-[#474747]">
                  Address:{" "}
                </span>
                <span className="font-[manrope] text-xl font-medium text-[#757575]">
                  {job.contact.address}
                </span>
              </p>
            </div>
          </div>
          <Link to='/applied'>
          <button
            onClick={handleApplyNow}
            className="btn mt-6 w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-7 font-[manrope] text-xl font-extrabold text-white"
          >
            Apply Now
          </button>
          </Link>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Jobs;
