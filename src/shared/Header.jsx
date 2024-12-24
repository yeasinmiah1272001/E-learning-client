import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiSearch } from "react-icons/fi"; // React Icons
import Container from "../components/Container";
import logo from "../assets/logo/logo.png";
import { menu } from "../constant";

const Header = () => {
  return (
    <header className="bg-white p-4 w-full border-b border-slate-300 shadow-xl fixed top-0 z-50">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center border-r-4 pr-4">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-6 ml-6 border-r-4 pr-4">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-600"
                } hover:text-slate-800 font-semibold text-xl`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button className="text-slate-600 hover:text-blue-600">
            <FiMenu size={24} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 border-r-4 pr-4">
          <div className="relative w-full">
            <FiSearch
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search here"
              className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none border-gray-400"
            />
          </div>
        </div>

        {/* Enroll Button */}
        <div>
          <button className="text-white px-8 py-2 rounded-md shadow transition-all hover:bg-[#138357] bg-green-400">
            Enroll
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
