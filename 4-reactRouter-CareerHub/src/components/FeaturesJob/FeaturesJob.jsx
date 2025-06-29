import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const FeaturesJob = (props) => {
  const { featureJob } = props;

  return (
    <div className="mb-5 rounded-lg border border-[#e8e8e8] p-10">
      <img src={featureJob.logo} alt="" />
      <h1 className="mt-8 font-[manrope] text-2xl font-extrabold text-[#474747]">
        {featureJob.title}
      </h1>
      <h3 className="mt-2 font-[manrope] text-xl font-semibold text-[#757575]">
        {featureJob.company}
      </h3>
      <article className="mt-5 flex gap-2">
        {featureJob.type?.includes("Remote") && (
          <p className="text-[bg-gradient-to-r to-[#9873FF]] rounded-sm border border-[#7e90fe] from-[#7E90FE] p-3">
            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text font-[manrope] text-base font-extrabold text-transparent">
              Remote
            </span>
          </p>
        )}
        {featureJob.type?.includes("Full Time") && (
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
          <span>{featureJob.location}</span>
        </p>
        <p className="flex items-center gap-1 font-[manrope] text-xl font-semibold text-[#757575]">
          <span>
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
          </span>
          <span>{featureJob.salary}</span>
        </p>
      </article>
      <Link to={`/jobs/${featureJob.id}`}>
        <button className="btn mt-7 rounded-lg border-none bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 font-[manrope] text-xl font-extrabold text-[#fff]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturesJob;
