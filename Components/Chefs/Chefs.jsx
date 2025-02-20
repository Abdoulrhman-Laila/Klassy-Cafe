"use client";

import Image from 'next/image';
import { FaWhatsapp, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Chefs() {
    const chefs = [
        {
            id: 1,
            image: '/images/chefs-01.jpg',
            title: 'Chef One',
            subtitle: 'Master of Italian Cuisine',
        },
        {
            id: 2,
            image: '/images/chefs-02.jpg',
            title: 'Chef Two',
            subtitle: 'Expert in French Pastries',
        },
        {
            id: 3,
            image: '/images/chefs-03.jpg',
            title: 'Chef Three',
            subtitle: 'Specialist in Japanese Sushi',
        },
    ];

    return (
        <div className='p-6 md:p-12'>
            <h1 className='text-3xl text-center text-red-500 mb-8'>We offer the best ingredients for you</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {chefs.map(chef => (
                    <div key={chef.id} className="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-lg border border-gray-800 transition-colors duration-300 group hover:border-red-500">
                        <div className="relative group">
                            <Image 
                                className="w-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-50"
                                src={chef.image} 
                                alt={chef.title} 
                                width={400} 
                                height={300} 
                                style={{ height: 'auto' }} // الحفاظ على الارتفاع الأصلي
                            />
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex space-x-4">
                                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-red-500">
                                        <FaWhatsapp className="text-white" size={20} />
                                    </a>
                                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-red-500">
                                        <FaFacebookF className="text-white" size={20} />
                                    </a>
                                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-red-500">
                                        <FaTwitter className="text-white" size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2">{chef.title}</div>
                            <p className="text-gray-700 text-base">{chef.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}