import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {recipe.summary}
              </p>

              {/* THIS is the important Step 5 change */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
