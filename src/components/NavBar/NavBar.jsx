import { NavLink } from "react-router-dom";
import '../Style/link.css'
const NavBar = () => {
    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a>Listed Books</a></li>
        <li><a>Pages to Read</a></li>
      </ul> 
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1">
    {/* <NavLink>Home</NavLink>
    <NavLink>Listed Books</NavLink>
    <NavLink>Pages to Read</NavLink> */}
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/listed'}>Listed Books</NavLink></li>
    <li><NavLink to={'/pages'}>Pages to Read</NavLink></li> 
    </ul>  
    
  

   
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
    <a className=" btn bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
    );
};

export default NavBar;