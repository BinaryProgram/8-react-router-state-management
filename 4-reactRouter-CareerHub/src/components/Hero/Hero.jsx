import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src="/src/assets/images/user.png" />
        </div>
        <div className="self-auto">
          <h1 className="font-[manrope] text-4xl leading-14 font-extrabold text-[#1a1919] md:text-5xl">
            <p>One Step</p>
            <p>Closer To Your</p>
            <p className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
              Dream Job
            </p>
          </h1>
          <p className="py-6 text-lg text-[#757575] font-medium font-[manrope] leading-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none font-[manrope] font-extrabold text-xl text-[#fff]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
