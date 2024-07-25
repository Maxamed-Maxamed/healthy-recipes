// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AuthProvider from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
