// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/spoonacularApi';
import RecipeCard from '../components/RecipeCard';
import { Box, Typography, Grid } from '@mui/material';

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes('healthy');
        setRecipes(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipes();
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Featured Recipes</Typography>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
