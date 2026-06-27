import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const navLinkStyle = ({ isActive }) => 
    `px-4 py-2 transition ${isActive ? "text-red-600 font-bold border-b-2 border-red-600" : "text-gray-700 hover:text-red-600"}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-red-700">Recipe Book</h1>
        <ul className="flex gap-6 font-medium">
          <li><NavLink to="/" className={navLinkStyle} end>Home</NavLink></li>
          <li><NavLink to="/recipes" className={navLinkStyle}>Recipes</NavLink></li>
          <li><NavLink to="/categories" className={navLinkStyle}>Categories</NavLink></li>
        </ul>
      </nav>

      
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;