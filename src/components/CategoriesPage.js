import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');

  const categories = [
    { name: 'Tea', path: '/tea' },
    { name: 'Sandwiches', path: '/sandwiches' },
    { name: 'All', path: '/all' }
  ];

  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate(`/${category.toLowerCase()}`);
  };

  return (
    <div>
      <h1>Choose Your Category</h1>
      <div>
        {categories.map((cat) => (
          <button key={cat.name} onClick={() => handleCategoryClick(cat.name)}>
            {cat.name}
          </button>
        ))}
      </div>

      <div>
        <h2>{category} Items</h2>
        {/* Display the items based on selected category */}
        <p>Showing {category} items...</p>
      </div>
    </div>
  );
};

export default CategoriesPage;
