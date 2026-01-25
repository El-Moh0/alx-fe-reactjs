import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add, update, delete as before
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // Search & filtering
  setSearchTerm: (term) =>
    set((state) => ({ searchTerm: term }), false),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
