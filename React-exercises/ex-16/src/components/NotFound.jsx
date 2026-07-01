
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
      <h2 className="text-6xl font-extrabold text-red-500 mb-4">404</h2>
      <p className="text-xl text-gray-700 font-semibold mb-2">Boggan lama helin!</p>
      <p className="text-gray-500 mb-6">Waddada aad codsatay ma jirto ama waa la beddelay.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-200">
        Ku laabo Home-ka
      </Link>
    </div>
  );
}

export default NotFound;