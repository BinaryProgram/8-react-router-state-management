import { FcCalculator,FcIdea } from "react-icons/fc";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoHardwareChipSharp } from "react-icons/io5";

const CategoryList = () => {
  return (
    <section className="my-32">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-center font-[manrope] text-4xl font-extrabold text-[#1a1919] lg:text-5xl">
          Job Category List
        </h3>
        <p className="text-center font-[manrope] text-base font-medium text-[#757575] lg:w-1/2">
          Explore job categories that match your skills and interests. Whether
          you're into tech, creative roles, or customer service, we've got
          opportunities waiting for you.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.05)_0%,_rgba(152,115,255,0.05)_100%)] p-6">
          <h1 className="flex w-1/3 justify-center rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.1)_0%,_rgba(152,115,255,0.1)_100%)] p-4">
            <span>
              <FcCalculator className="text-3xl" />
            </span>
          </h1>
          <div className="mt-7 space-y-2">
            <h2 className="font-[manrope] text-xl font-extrabold text-[#474747]">
              Account & Finance
            </h2>
            <h3 className="font-[manrope] font-medium text-[#a3a3a3]">
              300 Jobs Available
            </h3>
          </div>
        </div>
        <div className="rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.05)_0%,_rgba(152,115,255,0.05)_100%)] p-6">
          <h1 className="flex w-1/3 justify-center rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.1)_0%,_rgba(152,115,255,0.1)_100%)] p-4">
            <span>
              <FcIdea className="text-3xl" />
            </span>
          </h1>
          <div className="mt-7 space-y-2">
            <h2 className="font-[manrope] text-xl font-extrabold text-[#474747]">
              Creative Design
            </h2>
            <h3 className="font-[manrope] font-medium text-[#a3a3a3]">
              100+ Jobs Available
            </h3>
          </div>
        </div>
        <div className="rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.05)_0%,_rgba(152,115,255,0.05)_100%)] p-6">
          <h1 className="flex w-1/3 justify-center rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.1)_0%,_rgba(152,115,255,0.1)_100%)] p-4">
            <span>
              <SiGooglemarketingplatform className="text-3xl" />
            </span>
          </h1>
          <div className="mt-7 space-y-2">
            <h2 className="font-[manrope] text-xl font-extrabold text-[#474747]">
              Marketing & Sales
            </h2>
            <h3 className="font-[manrope] font-medium text-[#a3a3a3]">
              150 Jobs Available
            </h3>
          </div>
        </div>
        <div className="rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.05)_0%,_rgba(152,115,255,0.05)_100%)] p-6">
          <h1 className="flex w-1/3 justify-center rounded-lg bg-[linear-gradient(90deg,_rgba(126,144,254,0.1)_0%,_rgba(152,115,255,0.1)_100%)] p-4">
            <span>
              <IoHardwareChipSharp className="text-3xl" />
            </span>
          </h1>
          <div className="mt-7 space-y-2">
            <h2 className="font-[manrope] text-xl font-extrabold text-[#474747]">
              Engineering Job
            </h2>
            <h3 className="font-[manrope] font-medium text-[#a3a3a3]">
              224 Jobs Available
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
