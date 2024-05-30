import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { TiHome } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    return open ? setOpen(false) : setOpen(true);
  };
  return (
    <nav className=" bg-white">
      <div className="flex items-center justify-between relative container mx-auto px-6 py-3">
        <div className="pt2">
          <img
            src="https://www.jotform.com/uploads/guest_618a51e80828734f/form_files/_mainPWAIcon664b728393e99.png?nc=1"
            alt="company logo"
            className="max-w-[40px]"
          />
        </div>
        <div className="hidden md:flex space-x-6 items-center text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transform hover:scale-110 flex gap-2 items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            <span>
              <TiHome />
            </span>{" "}
            Home
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              `transform hover:scale-110 flex gap-2 items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            Order Food
          </NavLink>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `transform hover:scale-110 flex gap-2 items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            Feedback
          </NavLink>
          <a href="#" class="transform hover:scale-110">
            Contact Us
          </a>
          <a href="#" class="transform hover:scale-110">
            Cart
          </a>
        </div>

        <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none"
          onClick={handleClose}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {open ? (
        <div className="w-full absolute flex flex-col items-center space-y-4 text-lg font-semibold bg-white pb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transform hover:scale-110 flex gap-2 items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            <span>
              <TiHome />
            </span>{" "}
            Home
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              `transform hover:scale-110 flex gap-2 items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            Order Food
          </NavLink>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `transform hover:scale-110 flex gap-2 items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            Feedback
          </NavLink>
          <a href="#" class="transform hover:scale-110">
            Contact Us
          </a>
          <a href="#" class="transform hover:scale-110">
            Cart
          </a>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
