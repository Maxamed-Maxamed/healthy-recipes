// src/pages/BlogPage.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const BlogPage: React.FC = () => {
  const blogs = [
    { id: 1, title: 'Healthy Eating Tips', image: 'blog1.jpg', excerpt: 'Learn how to eat healthy with these tips...' },
    { id: 2, title: 'Nutrition Facts', image: 'blog2.jpg', excerpt: 'Discover the nutrition facts of various foods...' },
    { id: 3, title: 'Diet Plans', image: 'blog3.jpg', excerpt: 'Find the best diet plans for a healthy lifestyle...' },
  ];

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Blog</Typography>
      <Grid container spacing={2}>
        {blogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{blog.title}</Typography>
                <Typography variant="body2" color="textSecondary">{blog.excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPage;
