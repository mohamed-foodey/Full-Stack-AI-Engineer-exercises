import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Tani waxay isAuthenticated ka dhigaysaa true
    navigate('/create'); // Markuu login dhaco, toos ugu celi Create Post
  };

  return (
    /* Sanduuqa weyn oo u eg boggaga kale (bg-white, border, shadow-sm) */
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full text-center">
      
      <h2 className="text-gray-800 text-lg font-bold mb-2">Login Required</h2>
      
      <p className="text-gray-500 text-sm mb-6">
        You must log in to access the Create Post page.
      </p>

      {/* Badhanka Log In oo buluug ah */}
      <button
        onClick={handleLogin}
        className="w-full p-2.5 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition shadow-sm cursor-pointer"
      >
        Log In
      </button>

    </div>
  );
};

export default Login;