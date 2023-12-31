import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = (
        <>
          <li>
            <NavLink
              to="/"
              // className={({ isActive }) =>
              //   isActive ? "text-white" : "text-green-400 font-bold"
              // }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Colleges"
              // className={({ isActive }) =>
              //   isActive ? "text-white" : "text-green-400 font-bold"
              // }
            >
              Colleges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Admission"
              // className={({ isActive }) =>
              //   isActive ? "text-white" : "text-green-400 font-bold"
              // }
            >
              Admission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCollage"
              // className={({ isActive }) =>
              //   isActive ? "text-white" : "text-green-400 font-bold"
              // }
            >
              My College
            </NavLink>
          </li>
        </>
      );


    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn hover:first-letter:bg-white btn-ghost normal-case text-xl">Collage Booking</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  {/* end part  */}
  <div className="navbar-end">
  <div className="flex gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
    );
};

export default Navbar;


// import React from 'react';
// import './Navbar.css'

// const NavigationBar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#colleges">Colleges</a></li>
//         <li><a href="#admission">Admission</a></li>
//         <li><a href="#mycollege">My College</a></li>
//       </ul>
//       <div className="search-field">
//         <input type="text" placeholder="Search..." />
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
