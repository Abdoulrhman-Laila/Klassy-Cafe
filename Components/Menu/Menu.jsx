"use client";
import React, { useState } from 'react';

export default function Menu() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null); // حالة لتتبع العنصر الذي يتم التحويم عليه
    const menuItems = [
        { id: 1, image: '/images/menu-item-01.jpg', title: 'Chocolate cake', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sit aut, laborum nisi nulla velit saepe eligendi eveniet consequatur provident nam, est maxime autem fugit, voluptatibus dicta dolore explicabo rem.`, price: 12.5 },
        { id: 2, image: '/images/menu-item-02.jpg', title: 'Klassy Pancake', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sit aut, laborum nisi nulla velit saepe eligendi eveniet consequatur provident nam, est maxime autem fugit, voluptatibus dicta dolore explicabo rem.`, price: 15.0 },
        { id: 3, image: '/images/menu-item-03.jpg', title: 'Tall Klassy Bread', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sit aut, laborum nisi nulla velit saepe eligendi eveniet consequatur provident nam, est maxime autem fugit, voluptatibus dicta dolore explicabo rem.`, price: 10.0 },
        { id: 4, image: '/images/menu-item-04.jpg', title: 'Blueberry Cheesecake', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sit aut, laborum nisi nulla velit saepe eligendi eveniet consequatur provident nam, est maxime autem fugit, voluptatibus dicta dolore explicabo rem.`, price: 20.0 },
        { id: 5, image: '/images/menu-item-05.jpg', title: 'Klassy Cupcake', description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sit aut, laborum nisi nulla velit saepe eligendi eveniet consequatur provident nam, est maxime autem fugit, voluptatibus dicta dolore explicabo rem.`, price: 18.5 },
    ];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
    };

    return (
        <div className='menu p-6 md:p-12'>
            <h1 className="text-3xl font-bold text-left mb-6 text-red-500">Our selection of cakes with quality taste</h1>
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} // استخدم 100% للتنقل الكامل
                >
                    {menuItems.map((item) => (
                        <div
                            className="flex flex-col items-center m-4 relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4" // إعدادات الاستجابة هنا
                            key={item.id}
                            onMouseEnter={() => setHoveredIndex(item.id)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={`صورة ${item.title}`}
                                    className="w-full h-auto rounded-lg"
                                />
                                <p className="absolute top-2 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white bg-red-500 p-1 rounded">
                                    ${item.price.toFixed(2)}
                                </p>

                                {hoveredIndex === item.id && (
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-500 bg-opacity-90 flex items-center justify-center text-white p-4 rounded-lg">
                                        <div className="text-center">
                                            <h2 className="text-xl font-bold">{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between absolute left-0 right-0 bottom-0 p-4">
                    <button
                        onClick={prevImage}
                        className="bg-red-500 rounded-full p-2"
                    >
                        <img src="/images/prev.png" alt="السابق" className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="bg-red-500 rounded-full p-2"
                    >
                        <img src="/images/next.png" alt="التالي" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}