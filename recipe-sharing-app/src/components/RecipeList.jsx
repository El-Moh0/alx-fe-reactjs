import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Use filteredRecipes if searchTerm exists, otherwise show all
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) => state.recipes);

  const listToDisplay = searchTerm ? filteredRecipes : recipes;

  if (listToDisplay.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {listToDisplay.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
