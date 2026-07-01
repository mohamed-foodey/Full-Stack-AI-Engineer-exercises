import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchVal = formData.get('search') || '';
    navigate(`/?search=${searchVal}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full">
      
      <h2 className="text-gray-700 text-sm font-semibold mb-2">Blog Posts</h2>
      
      
      <form onSubmit={handleSearchSubmit} className="mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search posts..."
          defaultValue={searchTerm}
          className="w-full p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 mb-2 block bg-gray-50"
        />
        <button 
          type="submit"
          className="w-full p-2.5 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition shadow-sm cursor-pointer"
        >
          Search
        </button>
      </form>
      
      
      <div className="flex flex-col gap-3">
        {filteredPosts.map((post) => (
          <div key={post.id} className="border-b border-gray-100 pb-3">
            <Link 
              to={`/posts/${post.id}`}
              className="text-blue-500 text-sm font-normal hover:underline block"
            >
              {post.title}
            </Link>
          </div>
        ))}
        
        {filteredPosts.length === 0 && (
          <p className="text-gray-400 text-sm text-center mt-4">Wax post ah oo la helay ma jiraan.</p>
        )}
      </div>

    </div>
  );
};

export default Home;