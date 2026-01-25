import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe); // use store
  const [title, setTitle] = useState('');                       // state for title
  const [description, setDescription] = useState('');           // state for description

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;                         // simple validation
    addRecipe({ id: Date.now(), title, description });           // call addRecipe
    setTitle('');                                                // reset form
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
