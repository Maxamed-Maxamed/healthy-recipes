// src/pages/CategoryPage.tsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

const CategoryPage: React.FC = () => {
  const categories = [
    { id: 1, title: 'Appetizers', image: 'appetizer.jpg' },
    { id: 2, title: 'Main Courses', image: 'main-course.jpg' },
    { id: 3, title: 'Desserts', image: 'dessert.jpg' },
  ];

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Categories</Typography>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <RecipeCard id={category.id} title={category.title} image={category.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
