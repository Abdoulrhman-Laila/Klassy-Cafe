"use client";
import React, { useState } from 'react';

const footerItems = {
  Breakfast: [
    { id: 1, image: '/images/tab-item-01.png', price: '$10', description: 'First breakfast description' },
    { id: 2, image: '/images/tab-item-02.png', price: '$12', description: 'Second breakfast description' },
    { id: 3, image: '/images/tab-item-03.png', price: '$11', description: 'Third breakfast description' },
    { id: 4, image: '/images/tab-item-03.png', price: '$13', description: 'Fourth breakfast description' },
    { id: 5, image: '/images/tab-item-03.png', price: '$14', description: 'Fifth breakfast description' },
    { id: 6, image: '/images/tab-item-03.png', price: '$15', description: 'Sixth breakfast description' },
  ],
  Lunch: [
    { id: 13, image: '/images/tab-item-03.png', price: '$30', description: 'First dinner description' },
    { id: 14, image: '/images/tab-item-03.png', price: '$32', description: 'Second dinner description' },
    { id: 15, image: '/images/tab-item-03.png', price: '$31', description: 'Third dinner description' },
    { id: 16, image: '/images/tab-item-03.png', price: '$33', description: 'Fourth dinner description' },
    { id: 17, image: '/images/tab-item-03.png', price: '$34', description: 'Fifth dinner description' },
    { id: 18, image: '/images/tab-item-03.png', price: '$35', description: 'Sixth dinner description' },
  ],
  Dinner: [
    { id: 7, image: '/images/tab-item-03.png', price: '$20', description: 'First lunch description' },
    { id: 8, image: '/images/tab-item-03.png', price: '$22', description: 'Second lunch description' },
    { id: 9, image: '/images/tab-item-03.png', price: '$21', description: 'Third lunch description' },
    { id: 10, image: '/images/tab-item-03.png', price: '$23', description: 'Fourth lunch description' },
    { id: 11, image: '/images/tab-item-03.png', price: '$24', description: 'Fifth lunch description' },
    { id: 12, image: '/images/tab-item-03.png', price: '$25', description: 'Sixth lunch description' },
  ],
};

export default function Footer() {
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');

  return (
    <footer className="p-5">
      <h1 className='text-center text-red-500 text-3xl'>This Week’s Special Meal Offers</h1>
      <div className="flex flex-col md:flex-row justify-around mb-4 mt-5">
        <button onClick={() => setSelectedMeal('Breakfast')} className="flex flex-col items-center text-gray-700 hover:text-red-500 mb-4 md:mb-0">
          <img src="/images/tab-icon-01.png" alt="Breakfast" className="w-16 h-15 mb-1" />
          <span>Breakfast</span>
        </button>
        <button onClick={() => setSelectedMeal('Lunch')} className="flex flex-col items-center text-gray-700 hover:text-red-500 mb-4 md:mb-0">
          <img src="/images/tab-icon-02.png" alt="Lunch" className="w-12 h-12 mb-1" />
          <span>Lunch</span>
        </button>
        <button onClick={() => setSelectedMeal('Dinner')} className="flex flex-col items-center text-gray-700 hover:text-red-500">
          <img src="/images/tab-icon-03.png" alt="Dinner" className="w-12 h-12 mb-1" />
          <span>Dinner</span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {footerItems[selectedMeal].map((item, index) => (
          <div key={item.id} className={`w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center transition-transform transform hover:scale-105 ${index < 3 ? 'text-right' : 'text-left'}`}>
            <img src={item.image} alt={`Image of ${item.description}`} className="w-24 h-24 mb-2 rounded shadow-lg" />
            <h4 className="text-lg font-bold text-gray-800">{item.price}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}