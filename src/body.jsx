import React from 'react';
import restaurantImage from './assets/restaurant.webp'; // Import the images for each category
import cafeImage from './assets/cafe.webp';
import cleaningImage from './assets/cleaning.webp';
import clothshopImage from './assets/clothshop.webp';
import foodImage from './assets/food.webp';
import fruitShopImage from './assets/fruit shop.jpeg'; // Note: consider renaming this file to follow best practices
import salonImage from './assets/salon.webp';
import vegetableImage from './assets/vegetable.jpeg';

const categories = [
  { image: restaurantImage, alt: 'Restaurant', text: 'Restaurants' },
  { image: cafeImage, alt: 'Cafe', text: 'Cafes' },
  { image: cleaningImage, alt: 'Cleaning Services', text: 'Cleaning Services' },
  { image: clothshopImage, alt: 'Clothing Shop', text: 'Clothing Shops' },
  { image: foodImage, alt: 'Food', text: 'Food' },
  { image: fruitShopImage, alt: 'Fruit Shop', text: 'Fruit Shops' },
  { image: salonImage, alt: 'Salon', text: 'Salons' },
  { image: vegetableImage, alt: 'Vegetable', text: 'Vegetables' },
];

const Body = ({ data }) => (
  <div className=' max-w-8xl ml-15 mr-11 justify-center'>
    <h1 className="text-2xl font-semibold mb-4">Categories</h1>
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
          <div className="relative">
            <img
              src={category.image}
              alt={category.alt}
              className="w-full h-72 object-cover object-center" // Adjust the height as needed
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{category.text}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Body;
