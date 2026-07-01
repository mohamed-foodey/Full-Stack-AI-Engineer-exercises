import  { useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl w-full text-center max-w-md mx-auto transform transition-all duration-300">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-gray-700 text-base font-semibold">Post Not Found</p>
        <p className="text-gray-400 text-xs mt-1">Ma jiro post wata ID-gan oo la helay.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-5 w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-md hover:from-blue-700 hover:to-indigo-700 transition duration-200 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    );
  }

  
  const prevPost = posts.slice().reverse().find((p) => p.id < currentId);
  const nextPost = posts.find((p) => p.id > currentId);

  const handleNavigation = (direction) => {
    if (direction === 'prev' && prevPost) {
      navigate(`/posts/${prevPost.id}`, { state: { fromPostId: currentId } });
    } else if (direction === 'next' && nextPost) {
      navigate(`/posts/${nextPost.id}`, { state: { fromPostId: currentId } });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs w-full max-w-3xl mx-auto">
      
      
      <h2 className="text-gray-900 text-2xl font-extrabold mb-4 tracking-tight leading-snug">
        {post.title}
      </h2>
      
     
      <p className="text-gray-600 text-sm leading-relaxed mb-8 whitespace-pre-line font-normal">
        {post.content}
      </p>

      <hr className="border-gray-100 mb-6" />

      
      <div className="flex justify-between items-center gap-4 mb-5">
        
        
        {prevPost ? (
          <button 
            onClick={() => handleNavigation('prev')}
            className="flex items-center gap-2 bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-100 hover:text-gray-900 transition duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
        ) : (
          
          <div /> 
        )}

        
        {nextPost ? (
          <button 
            onClick={() => handleNavigation('next')}
            className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-98 ml-auto"
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <div />
        )}
      </div>

      
      {location.state && (
        <div className="flex items-center gap-2 bg-amber-50 text-amber-800 p-3.5 rounded-xl text-xs font-medium border border-amber-100/70 animate-pulse">
          <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>You navigated here from post ID: <strong className="font-bold underline">{location.state.fromPostId}</strong></span>
        </div>
      )}

    </div>
  );
};

export default PostDetail;