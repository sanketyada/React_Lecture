import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbaar() {
  return (
    <header className="bg-red-700 shadow sticy z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <img className="h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&s"
              alt=""
            />
          </Link>
          {/* logo done */}
          {/* linkStart */}
          <div className="bg-red-50">
            <ul className="flex flex-wrap gap-6 text-lg">
                <li className="mx-6">
                    <NavLink to={"/hero"}>
                        Home
                    </NavLink>
                </li>
                <li className="mx-6">
                    <NavLink to="/home">
                        About
                    </NavLink>
                </li>
                <li className="mx-6">
                    <NavLink to="/user:id">
                        User Detail
                    </NavLink>
                </li>
                <li className="mx-6">
                    <NavLink to="/joke">
                        Joke
                    </NavLink>
                </li>
            </ul>
          </div>
          {/* linkdone */}
          {/* <div>
            <Link>
            Log in
            </Link>
            <Link>
            Get Started
            </Link>
          </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbaar;
