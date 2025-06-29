import { NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost border-none px-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-[manrope] text-base font-medium text-[#757575] shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost border-none p-0 font-[manrope] text-xl font-extrabold text-[#1a1919] md:text-3xl">
            CareerHub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-[manrope] text-base font-medium text-[#757575]">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-lg border-none bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-[manrope] text-base font-extrabold text-[#fff] md:text-xl">
            Start Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
