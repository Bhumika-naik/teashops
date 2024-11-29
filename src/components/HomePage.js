import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const items = {
    all: [
      { name: 'Corn Snacks', description: 'Crispy and delicious fries', price: 26, image: 'https://th.bing.com/th/id/OIP.NlHg1kSgD9J5eWXJSO6s9wHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7' },
        { name: 'Black Tea', description: 'A strong cup of black tea', price: '25', image: 'https://th.bing.com/th/id/OIP.5sbcLjiAG7-kIupCtQxPgQHaHK?w=150&h=180&c=7&r=0&o=5&pid=1.7' },
      
        { name: 'White Tea', description: 'A refreshing cup of white tea', price: '16', image: 'https://static.vecteezy.com/system/resources/previews/017/340/364/original/white-cup-of-tea-png.png' },
        { name: 'Corn Snacks', description: 'Crispy and delicious fries', price: '16', image: 'https://th.bing.com/th/id/OIP.NlHg1kSgD9J5eWXJSO6s9wHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7' },
        { name: 'Spring Rolls', description: 'Crispy spring rolls with savory filling', price: '18', image: 'https://th.bing.com/th/id/OIP.Cc3TaUAkPJYcmTJCbUKi9gHaFP?w=229&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Pu-erh Tea', description: 'A strong cup of Pu-erh tea', price: '15', image: 'https://cupsnchai.com/wp-content/uploads/2024/06/discover-how-long-to-steep-black-tea-500x500.jpg' },
        { name: 'Genger Tea', description: 'A strong cup of Genger tea', price: '25', image: 'https://th.bing.com/th/id/OIP.Z7obq3RzN-naNmtL02JWWgHaFj?w=269&h=202&c=7&r=0&o=5&pid=1.7' },
        { name: 'Alo Sandwich', description: 'A tasty vegetarian  Alo sandwich', price: '10', image: 'https://th.bing.com/th/id/OIP.5CggU_2QaFCh740nFZmpfgHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7' },
        { name: 'Chicken Club Sandwich', description: 'A savory chicken club sandwich', price: '12', image: 'https://th.bing.com/th/id/OIP.dEyEvqfGH62TNJfiOrLy2gHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7' },
        { name: 'Bagel Sandwich', description: 'A tasty vegetarian  bagel sandwich', price: '10', image: 'https://th.bing.com/th/id/OIP.DkInzAEzI0uO0VGczI1UPwHaJP?w=182&h=228&c=7&r=0&o=5&pid=1.7' },
         { name: 'Chicken Club Sandwich', description: 'A savory chicken club sandwich', price: '12', image: 'https://th.bing.com/th/id/OIP.dEyEvqfGH62TNJfiOrLy2gHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7' },
         { name: 'Avocodo Sandwich', description: 'A tasty vegetarian   avocodo sandwich', price: '10', image: 'http://ts3.mm.bing.net/th?id=OIP.BfZUdxCwB-zphmjWfJXgogHaE3&pid=15.1' },
         { name: 'Chicken Club Sandwich', description: 'A savory chicken club sandwich', price: '12', image: 'https://th.bing.com/th/id/OIP.dEyEvqfGH62TNJfiOrLy2gHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7' },
         { name: 'Avocodo Sandwich', description: 'A tasty vegetarian   avocodo sandwich', price: '10', image: 'http://ts3.mm.bing.net/th?id=OIP.BfZUdxCwB-zphmjWfJXgogHaE3&pid=15.1' },
         { name: 'Chicken Club Sandwich', description: 'A savory chicken club sandwich', price: '12', image: 'https://th.bing.com/th/id/OIP.dEyEvqfGH62TNJfiOrLy2gHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7' },
         { name: 'Alo Sandwich', description: 'A tasty vegetarian  Alo sandwich', price: '10', image: 'https://th.bing.com/th/id/OIP.5CggU_2QaFCh740nFZmpfgHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7' },
    ],
    tea: [
      { name: 'Black Tea', description: 'A strong cup of black tea', price: 25, image: 'https://th.bing.com/th/id/OIP.5sbcLjiAG7-kIupCtQxPgQHaHK?w=150&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Green Tea', description: 'A refreshing cup of green tea', price: 26, image: 'https://getinfolist.com/wp-content/uploads/2015/11/Green_tea_recipe.jpg' },
      { name: 'Black Tea', description: 'A strong cup of black tea', price: '25', image: 'https://th.bing.com/th/id/OIP.5sbcLjiAG7-kIupCtQxPgQHaHK?w=150&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Matcha Tea', description: 'A spicy and aromatic  Matcha tea', price: '26', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/08/How-to-Make-Matcha-013.jpg' },
     
      { name: 'oolong  Tea', description: 'A spicy and aromatic oolong tea', price: '26', image: 'https://cdn.shopify.com/s/files/1/0022/1393/7252/articles/20221031112901-oolong-tea-recipe_98aeef4f-4c3e-4958-a358-0fbf28eddb72_1200x1200.jpg?v=1667216317' },
      { name: 'White Tea', description: 'A refreshing cup of white tea', price: '16', image: 'https://static.vecteezy.com/system/resources/previews/017/340/364/original/white-cup-of-tea-png.png' },
      { name: 'Herbal Tea', description: 'A soothing herbal blend', price: '17', image: 'https://th.bing.com/th/id/OIP.6GCYUcPsgJQPotd1wLP5fwHaFJ?w=223&h=187&c=7&r=0&o=5&pid=1.7' },
      { name: 'Chai Tea', description: 'A spicy and aromatic chai tea', price: '26', image: 'https://salateenonline.com/wp-content/uploads/2022/03/CHAI.jpg' },
      { name: 'Pu-erh Tea', description: 'A strong cup of Pu-erh tea', price: '25', image: 'https://cupsnchai.com/wp-content/uploads/2024/06/discover-how-long-to-steep-black-tea-500x500.jpg' },
    ],
    sandwiches: [
      
      { name: 'Alo Sandwich', description: 'A tasty vegetarian  Alo sandwich', price: '10', image: 'https://th.bing.com/th/id/OIP.5CggU_2QaFCh740nFZmpfgHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Chicken Club Sandwich', description: 'A savory chicken club sandwich', price: '12', image: 'https://th.bing.com/th/id/OIP.dEyEvqfGH62TNJfiOrLy2gHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Bagel Sandwich', description: 'A tasty vegetarian  bagel sandwich', price: '10', image: 'https://th.bing.com/th/id/OIP.DkInzAEzI0uO0VGczI1UPwHaJP?w=182&h=228&c=7&r=0&o=5&pid=1.7' },
       { name: 'Chicken Club Sandwich', description: 'A savory chicken club sandwich', price: '12', image: 'https://th.bing.com/th/id/OIP.dEyEvqfGH62TNJfiOrLy2gHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7' },
       { name: 'Avocodo Sandwich', description: 'A tasty vegetarian   avocodo sandwich', price: '10', image: 'http://ts3.mm.bing.net/th?id=OIP.BfZUdxCwB-zphmjWfJXgogHaE3&pid=15.1' },
    ],
    snacks: [
      { name: 'Pop tarts', description: 'Crispy spring rolls with savory filling', price: 18, image: 'https://handletheheat.com/wp-content/uploads/2013/03/strawberry-pop-tarts-recipe-SQUARE.jpg' },
      { name: 'Corn Snacks', description: 'Crispy and delicious fries', price: '16', image: 'https://th.bing.com/th/id/OIP.NlHg1kSgD9J5eWXJSO6s9wHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Spring Rolls', description: 'Crispy spring rolls with savory filling', price: '18', image: 'https://th.bing.com/th/id/OIP.Cc3TaUAkPJYcmTJCbUKi9gHaFP?w=229&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Potato Chips', description: 'Crispy and delicious fries', price: '26', image: 'https://th.bing.com/th/id/OIP.sMUgf9zGU21EdVBBh_o73AHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Popcorn', description: 'Crispy spring rolls with savory filling', price: '28', image: 'https://th.bing.com/th/id/OIP.Z5_OEcDrFct5jr1LKHoHjAHaE8?rs=1&pid=ImgDetMain' },
      { name: 'Corn Snacks', description: 'Crispy and delicious fries', price: '16', image: 'https://th.bing.com/th/id/OIP.NlHg1kSgD9J5eWXJSO6s9wHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7' },
      { name: 'Brownies', description: 'Crispy spring rolls with savory filling', price: '28', image: 'https://th.bing.com/th/id/OIP.jX4CSlT_z5NuJ5gV91QgfgAAAA?w=184&h=257&c=7&r=0&o=5&pid=1.7s' },
      { name: 'Fudge', description: 'Crispy and delicious fries', price: '20', image: 'https://th.bing.com/th/id/OIP.c2lmAFKzq2G7tySFuZcwPwHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7' },
    ],
  };
const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search term when category is clicked
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  // Filter items based on category and search term
  const filteredItems = items[selectedCategory].filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="home-page">
    

      <h2>Our Menu</h2>

      <div className="category-buttons">
        {['all', 'tea', 'sandwiches', 'snacks'].map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search in ${selectedCategory}`}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="menu-items">
        {filteredItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
