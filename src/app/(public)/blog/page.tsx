'use client';

import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Pet Spa Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://www.southernliving.com/thmb/F6CmBtFFGbA86t7rlicydxNcDnQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1312619551-15706e976a2d4e48bfedbf92bd4421c2.jpg"
                                alt="Dog Grooming"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 rounded-br-lg">
                                Category: Grooming
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">
                                Top 10 Dog Grooming Tips for a Healthy and Happy Pet
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Regular grooming is essential for maintaining your dog's health and appearance. Here are our top 10 tips for grooming your furry friend...
                            </p>
                            <Link href="/blog/dog-grooming-tips" className="text-blue-500">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://www.ikea.com/global/en/images/pet_softtoy_bone2_9fe3c334b5.jpg"
                                alt="Cat Nutrition"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-2 rounded-br-lg">
                                Category: Nutrition
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">
                                The Purr-fect Diet: A Guide to Cat Nutrition
                            </h2>
                            <div className="flex flex-wrap mb-4">
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Cat Food
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Healthy Eating
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Pet Care
                                </div>
                            </div>
                            <Link href="/blog/cat-nutrition-guide" className="text-blue-500">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyAsUMUdpdrpqvp8XGt188HumsBC_f_OadA&s"
                                alt="Cat Nutrition"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-2 rounded-br-lg">
                                Category: Nutrition
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">
                                The Purr-fect Diet: A Guide to Cat Nutrition
                            </h2>
                            <div className="flex flex-wrap mb-4">
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Cat Food
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Healthy Eating
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Pet Care
                                </div>
                            </div>
                            <Link href="/blog/cat-nutrition-guide" className="text-blue-500">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-8">
                    <Link href="/blog" className="text-blue-500">
                        Read Our Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;