import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('/');
  };

  return (
    /* Sanduuqa weyn oo u eg kan Home-ka (bg-white, border, shadow-sm) */
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full">
      
      {/* Title-ka sare */}
      <h2 className="text-gray-700 text-sm font-semibold mb-4">Create a New Post</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        {/* Qaybta Title Input-ka */}
        <div>
          <label className="block text-gray-600 text-xs font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter post title..."
            className="w-full p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-gray-50 block"
          />
        </div>

        {/* Qaybta Content Textarea-ga */}
        <div>
          <label className="block text-gray-600 text-xs font-medium mb-1">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Write your post content here..."
            rows="5"
            className="w-full p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 bg-gray-50 block resize-none"
          ></textarea>
        </div>

        {/* Badhanka Submit-ka oo buluug ah (sida kan Search-ka) */}
        <button 
          type="submit"
          className="w-full p-2.5 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition shadow-sm cursor-pointer mt-2"
        >
          Create Post
        </button>

      </form>
    </div>
  );
};

export default CreatePost;