// src/pages/RecipePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api/spoonacularApi';
import { Box, Typography, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data = await fetchRecipeById(Number(id));
        setRecipe(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [id]);

  if (loading) return <CircularProgress />;

  return (
    <Box p={2}>
      {recipe && (
        <Card>
          <CardMedia component="img" height="400" image={recipe.image} alt={recipe.title} />
          <CardContent>
            <Typography variant="h4" gutterBottom>{recipe.title}</Typography>
            <Typography variant="body1" gutterBottom>Cooking Time: {recipe.readyInMinutes} minutes</Typography>
            <Typography variant="body1" gutterBottom>Servings: {recipe.servings}</Typography>
            <Typography variant="body1" gutterBottom>Difficulty: {recipe.difficulty}</Typography>
            <Typography variant="body1" gutterBottom>Ingredients:</Typography>
            <ul>
              {recipe.extendedIngredients.map((ingredient: any) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
            <Typography variant="body1" gutterBottom>Instructions:</Typography>
            <Typography variant="body2">{recipe.instructions}</Typography>
            <Typography variant="body1" gutterBottom>Nutritional Information:</Typography>
            <Typography variant="body2">{recipe.nutrition.nutrients.map((nutrient: any) => `${nutrient.name}: ${nutrient.amount} ${nutrient.unit}`).join(', ')}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default RecipePage;