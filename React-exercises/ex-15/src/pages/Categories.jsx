import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipesData } from './Recipes'; // Xogta cuntooyinka dhabta ah

const Categories = () => {
  // State-kan wuxuu kaydinayaa category-ga uu qofku gujiyo (Tusaale: "Breakfast")
  // Marka hore wuxuu iska yahay null (waxba lama gujin)
  const [activeCategory, setActiveCategory] = useState(null);

  // 1. Soo saar dhammaan category-yada ku jira recipesData
  const allCategories = recipesData.map(recipe => recipe.category);
  const uniqueCategories = [...new Set(allCategories)];

  const order = ["Breakfast", "Lunch", "Dinner", "Desserts"];
  const sortedCategories = uniqueCategories.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  const categoryDescriptions = {
    Breakfast: "Start your day right",
    Lunch: "Midday favorites",
    Dinner: "Evening meals",
    Desserts: "Sweet treats"
  };

  // 2. Shaandhee cuntooyinka marka uu qofku category gujiyo
  const filteredRecipes = recipesData.filter(
    recipe => recipe.category === activeCategory
  );

  return (
    <div className="p-10 max-w-4xl mx-auto text-left space-y-6">
      
      {/* QAYBTA KOOPAD: Sanduuqa weyn ee Categories */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Categories</h2>
        
        <div className="space-y-6">
          {sortedCategories.map((cat, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-none last:pb-0">
              {/* Button-kan markii la gujiyo wuxuu beddelayaa activeCategory state-ka */}
              <button 
                onClick={() => setActiveCategory(cat)}
                className={`text-xl font-bold transition text-left block ${
                  activeCategory === cat ? 'text-rose-600 font-extrabold' : 'text-gray-800 hover:text-rose-600'
                }`}
              >
                {cat}
              </button>
              <p className="text-gray-500 text-sm mt-0.5">
                {categoryDescriptions[cat] || "Delicious recipes available"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* QAYBTA LABAAD: Halkan waxay soo baxaysaa OO KELIYA marka activeCategory la gujiyo */}
      {activeCategory && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            {activeCategory} Recipes
          </h3>
          
          <div className="space-y-4">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <Link 
                  to={`/recipes/${recipe.id}`} 
                  key={recipe.id} 
                  className="block bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-rose-300 transition"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    {recipe.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {recipe.desc}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No recipes found for this category.</p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Categories;