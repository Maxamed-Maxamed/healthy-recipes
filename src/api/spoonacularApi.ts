// src/api/spoonacularApi.ts
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export const fetchRecipes = async (query: string) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = await response.json();
  return data;
};

export const fetchRecipeById = async (id: number) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipe');
  }
  const data = await response.json();
  return data;
};


