import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-6">Recipe not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            {recipe.title}
          </h1>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <Link
            to="/"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
