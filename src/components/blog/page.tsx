'use client';

import Image from 'next/image';
import { Button, Card } from '@nextui-org/react';
import Link from 'next/link';
import bannerImg from "../../../public/assets/img/banner.svg";
const Blog = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <Image
                                src={bannerImg}
                                alt="Running"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 rounded-br-lg">
                                Category: PET SPA
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">
                                Ready, Set, Go! How to Start Running to Stay Fit
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Walking Is Recognized As A Safe And Effective Mode Of Exercise When The Goal Is To Improve Fitness, Health Or Both. Something As Simple As A Daily Brisk Walk Can Help Someone...
                            </p>
                            <Link href="/blog/ready-set-go" className="text-blue-500">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <Image
                                src={bannerImg}
                                alt="Running"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 rounded-br-lg">
                                Category: PET SPA
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">
                                Ready, Set, Go! How to Start Running to Stay Fit
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Walking Is Recognized As A Safe And Effective Mode Of Exercise When The Goal Is To Improve Fitness, Health Or Both.
                            </p>
                            <Link href="/blog/ready-set-go" className="text-blue-500">
                                Read More
                            </Link>
                        </div>
                    </div>



                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <Image
                                src={bannerImg}
                                alt="Athletic Training"
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 bg-brown-500 text-white px-4 py-2 rounded-br-lg">
                                Category: Tutorials
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">
                                Athletic Training | Soft and Hard Styles of Training
                            </h2>
                            <div className="flex flex-wrap mb-4">
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Medical Knowledge
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Bodybuilding
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
                                    Reggie Food
                                </div>

                            </div>
                            <Link href="/blog/athletic-training" className="text-blue-500">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;