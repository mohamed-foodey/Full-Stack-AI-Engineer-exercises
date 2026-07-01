import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { PostsProvider } from './context/PostsContext';

const App = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  return (
    <PostsProvider>
      
      <div className="bg-gray-50 min-h-screen py-8 px-4 flex flex-col items-center font-sans">
        
        
        <div className="w-full max-w-3xl">
          
          {/* Magaca Blog-ka */}
          <h1 className="text-gray-800 text-2xl font-bold mb-4">
            React Blog
          </h1>

          
          <nav className="flex gap-3 mb-4">
            
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-5 py-2 rounded text-sm font-medium transition cursor-pointer ${
                  isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`
              }
            >
              Home
            </NavLink>

            
            <NavLink 
              to="/create" 
              className={({ isActive }) => 
                `px-5 py-2 rounded text-sm font-medium border transition cursor-pointer ${
                  isActive ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`
              }
            >
              Create Post
            </NavLink>

            
            {isAuthenticated ? (
              <button 
                onClick={logout} 
                className="bg-red-500 text-white px-5 py-2 rounded text-sm font-medium hover:bg-red-600 transition cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <NavLink 
                to="/login" 
                className={({ isActive }) => 
                  `px-5 py-2 rounded text-sm font-medium transition cursor-pointer ${
                    isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </nav>

          
          <hr className="w-full border-gray-200 mb-6" />

          
          <Outlet />

        </div>
      </div>
    </PostsProvider>
  );
};

export default App;