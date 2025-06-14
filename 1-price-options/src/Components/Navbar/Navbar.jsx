import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/services",
      name: "Services",
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact",
    },
    {
      id: 5,
      path: "/profile/:userId",
      name: "UserProfile",
    },
  ];
  // console.log(toggle);
  return (
    <div className="z-10 relative">
      <nav>
        <div
          onClick={() => setToggle(!toggle)}
          className="w-full bg-green-400 p-5 text-xl md:hidden"
        >
          {toggle ? (
            <AiOutlineClose className="text-[#ff0000]"></AiOutlineClose>
          ) : (
            <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
          )}
        </div>
        <div
          className={`absolute sm:static ml-9 flex text-xl flex-col gap-3 bg-[#1e90ff] px-10 py-3 duration-200 md:m-0 md:w-full md:flex-row md:gap-5 md:p-5 md:duration-0 ${toggle ? "top-12" : "-top-54"} md:top-0`}
        >
          {routes.map((route) => (
            <Link route={route} key={route.id}></Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
