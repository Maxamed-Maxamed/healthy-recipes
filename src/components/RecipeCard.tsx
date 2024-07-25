// src/components/RecipeCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, image }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/recipes/${id}`}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;