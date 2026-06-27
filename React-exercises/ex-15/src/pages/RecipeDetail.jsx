import { useParams, Link } from 'react-router-dom';
import { recipesData } from './Recipes';

const RecipeDetail = () => {
  const { id } = useParams();
  
  // Ka raadi cuntada saxda ah gudaha recipesData adoo isticmaalaya ID-ga
  const recipe = recipesData.find(r => r.id === parseInt(id));

  // Haddii cuntada la waayo
  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Cuntadan lama helin!</h2>
        <Link to="/recipes" className="text-rose-600 hover:underline mt-4 inline-block">← Ku laabo Recipes</Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto mt-6 text-left">
      <Link 
        to="/recipes" 
        className="text-rose-600 hover:text-rose-700 mb-6 inline-block font-medium text-sm"
      >
        ← Back to Recipes
      </Link>
      
      {/* SAX: Halkan waxaan `recipe.title` ugu beddelnay `recipe.category` si uu u noqdo Title-ka weyn */}
      <h2 className="text-4xl font-bold mb-1 text-gray-900">{recipe.category}</h2>
      
      {/* Magacii cuntada dhabta ahna (sida Classic Chocolate Cake) halkan hoose ayuu ku qoranyahay */}
      <span className="inline-block bg-pink-100 text-pink-600 text-sm px-3 py-1 rounded font-medium mb-8">
        {recipe.title}
      </span>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Ingredients</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Instructions</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;