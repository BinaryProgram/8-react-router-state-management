import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1919] p-8 md:p-20 lg:p-28">
      <div className="grid gap-5 md:grid-cols-6">
        <nav className="col-span-1 space-y-5 md:col-span-2">
          <h2 className="font-[manrope] text-3xl font-extrabold text-[#fff]">
            CareerHub
          </h2>
          <p className="font-[manrope] text-base leading-7 text-[#ffffffb3]">
            Building bridges between talent and opportunity — CareerHub is your
            trusted partner in professional growth.
          </p>
          <div className="flex gap-3">
            <a className="link">
              <FaFacebook className="text-3xl text-white hover:text-4xl" />
            </a>
            <a className="link">
              <FaSquareXTwitter className="text-3xl text-white hover:text-4xl" />
            </a>
            <a className="link">
              <FaInstagramSquare className="text-3xl text-white hover:text-4xl" />
            </a>
          </div>
        </nav>
        <nav className="space-y-5">
          <h6 className="font-[manrope] text-xl font-semibold text-[#fff]">
            Company
          </h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              About Us
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Work
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Latest News
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Careers
            </a>
          </div>
        </nav>
        <nav className="space-y-5">
          <h6 className="font-[manrope] text-xl font-semibold text-[#fff]">
            Product
          </h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Prototype
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Plans & Pricing
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Customers
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Integrations
            </a>
          </div>
        </nav>
        <nav className="space-y-5">
          <h6 className="font-[manrope] text-xl font-semibold text-[#fff]">
            Support
          </h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Help desk
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Sales
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Become a Partner
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              Developers
            </a>
          </div>
        </nav>
        <nav className="space-y-5">
          <h6 className="font -semibold font-[manrope] text-xl text-[#fff]">
            Contact
          </h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              524 Broadway, NYC
            </a>
            <a className="link link-hover font-[manrope] text-base text-[#ffffffb3]">
              +1777-978-6630
            </a>
          </div>
        </nav>
      </div>
      <div className="mt-14 border-1 bg-[linear-gradient(90deg,_rgba(126,144,254,0.2)_0%,_rgba(152,115,255,0.2)_100%)]"></div>
      <div className="flex justify-between flex-col lg:flex-row mt-14">
        <p className="font-[inter] text-sm text-[#ffffff66] font-semibold">@2025 CareerHub. All Rights Reserved</p>
        <p className="font-[inter] text-sm text-[#ffffff66] font-bold">Powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
