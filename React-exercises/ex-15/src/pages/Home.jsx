import { Link } from "react-router-dom";

const Home = () => {
  return (
    // KA SAAR <nav> halkan
    <main className="flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Book</h1>
      <p className="text-gray-600 mb-8">Discover delicious recipes and start cooking today!</p>
      
      <div className="flex gap-6">
        <Link to="/recipes" className="bg-red-600 text-white p-6 rounded-lg">Browse Recipes</Link>
        <Link to="/categories" className="bg-red-600 text-white p-6 rounded-lg">Recipe Categories</Link>
      </div>
    </main>
  );
};

export default Home;