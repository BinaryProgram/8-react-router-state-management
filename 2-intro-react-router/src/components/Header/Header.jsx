import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center gap-4 text-blue-500">
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
        {/* link doesn't load like anchor */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* NavLink add active class to a component */}

        {/* <Link to="/users">Users</Link> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-fuchsia-600 underline bg-cyan-400" : "text-blue-500"
          }
          to="/users"
        >
          Users
        </NavLink>

        {/* <Link to="/contact">Contact</Link> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-fuchsia-600 underline bg-cyan-400" : "text-blue-500"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
