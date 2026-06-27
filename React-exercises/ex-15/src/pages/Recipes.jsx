import React from 'react';
import { Link } from 'react-router-dom';

export const recipesData = [
    { 
      id: 1, 
      title: "Breakfast Smoothie Bowl", 
      category: "Breakfast", 
      desc: "Healthy and colorful breakfast bowl", 
      ingredients: ['1 banana', '1 cup berries', '1/2 cup yogurt', 'Granola'], 
      instructions: ['Blend fruits and yogurt', 'Pour into a bowl', 'Top with granola and fresh berries'] 
    },
    { 
      id: 2, 
      title: "Greek Salad", 
      category: "Lunch", 
      desc: "Fresh Mediterranean salad with feta cheese", 
      ingredients: ['Cucumbers', 'Tomatoes', 'Feta cheese', 'Olives'], 
      instructions: ['Chop vegetables', 'Toss in a bowl', 'Add feta and olive oil'] 
    },
    { 
      id: 3, 
      title: "Spaghetti Carbonara", 
      category: "Dinner", 
      desc: "Traditional Italian pasta with creamy egg sauce", 
      ingredients: ['Spaghetti', 'Pancetta', 'Eggs', 'Pecorino Romano'], 
      instructions: ['Boil pasta', 'Fry pancetta', 'Mix everything with egg sauce'] 
    },
  { 
    id: 4, 
    title: "Classic Chocolate Cake", 
    category: "Desserts", // Kan ayaa hadda noqonaya Title-ka weyn!
    desc: "Rich and moist chocolate cake perfect for any occasion", 
    ingredients: ['2 cups flour', '1 cup sugar', '3 eggs', '1 cup milk'], 
    instructions: ['Mix dry ingredients', 'Add wet ingredients', 'Bake at 350°F for 25 minutes'] 
  },
];

const Recipes = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-8">All Recipes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipesData.map((recipe) => (
          <Link 
            to={`/recipes/${recipe.id}`} 
            key={recipe.id} 
            className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-rose-300 transition duration-200 cursor-pointer text-left"
          >
            {/* SAX: Halkan waxaan `recipe.title` ugu beddelnay `recipe.category` */}
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {recipe.category}
            </h3>
            
            {/* Magacii cuntada ee hore (title) waxaan u soo raddaynay halkaan hoose */}
            <p className="text-gray-500 font-medium text-sm mb-2">
              {recipe.title}
            </p>

            <p className="text-gray-600 mb-4 text-sm">
              {recipe.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;