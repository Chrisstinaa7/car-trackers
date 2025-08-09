'use client';
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const ReviewsSection = () => {
    return (
        <section className="w-full bg-white py-16 flex justify-center items-center">
            <div className="relative w-[90%] max-w-[1509px] h-[625px] bg-white px-4">

                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center space-x-1">
                    {Array(5).fill(0).map((_, i) => (
                        <FaStar key={i} className="text-[#FF8713] text-[14px]" />
                    ))}
                </div>

                {/* Orange box with rating */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-[#FF8713] w-[150px] h-[35px] flex items-center justify-center rounded">
                    <span className="text-white text-sm font-semibold">4.5 Stars on Yelp</span>
                </div>

                {/* Heading Image */}
                <div className="absolute top-[100px] left-1/2 -translate-x-1/2">
                    <Image
                        src="/Heading 2.png"
                        alt="Heading"
                        width={900}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Orange bordered container */}
                <div className="absolute top-[270px] left-1/2 -translate-x-1/2 w-[1211px] h-[379px] rounded-[20px] flex justify-between px-4">

                    {/* Box 1 */}
                    <div className="w-[370px] h-full border border-[#FF8713] rounded-[20px] p-6 flex flex-col items-start justify-start space-y-4">
                        <div className="flex space-x-1 text-[#FF8713]">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14} />
                            ))}
                        </div>
                        <p className="text-[16px] leading-[27px] font-[400] font-['DM Sans'] text-left text-black">
                            I've been looking to get out of my lease
                            Car Trackers came through -- better
                            than the dealership buyout. The process
                            was smooth and my car was picked up
                            the following day. And the best part... He
                            found me a new car the same week! For
                            all my future car needs, I definitely plan
                            to use Car Trackers again.
                        </p>
                        <p className="text-[20px] leading-[30px] font-semibold font-['Epilogue'] text-black">
                            Jane. L
                        </p>
                        <p className="text-[13.6px] leading-[13.6px] font-[400] font-['DM Sans'] text-gray-600">
                            Venice Beach, CA- July 6, 2024
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="w-[370px] h-full border border-[#FF8713] rounded-[20px] p-6 flex flex-col items-start justify-start space-y-4">
                        <div className="flex space-x-1 text-[#FF8713]">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14} />
                            ))}
                        </div>
                        <p className="text-[16px] leading-[27px] font-[400] font-['DM Sans'] text-left text-black">
                            I don't often take the time to leave a
                            review but it was so refreshing working
                            with Car Trackers. I sold them my VW
                            Golf and got an amazing price. The
                            team was great and everything was
                            extremely convenient.
                        </p>
                        <p className="text-[20px] leading-[30px] font-semibold font-['Epilogue'] text-black">
                            Diane. C
                        </p>
                        <p className="text-[13.6px] leading-[13.6px] font-[400] font-['DM Sans'] text-gray-600">
                            Ventura, CA- September 1, 2024
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="w-[370px] h-full border border-[#FF8713] rounded-[20px] p-6 flex flex-col items-start justify-start space-y-4">
                        <div className="flex space-x-1 text-[#FF8713]">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14} />
                            ))}
                        </div>
                        <p className="text-[16px] leading-[27px] font-[400] font-['DM Sans'] text-left text-black">
                            great people to work with and I had no
                            issues selling car. I was a bit concerned at
                            first like everybody else, but the process
                            was seamless and the business is legit. The
                            money arrived in the bank with no issues
                            and I sold the car with confidence.
                        </p>
                        <p className="text-[20px] leading-[30px] font-semibold font-['Epilogue'] text-black">
                            Robert. C
                        </p>
                        <p className="text-[13.6px] leading-[13.6px] font-[400] font-['DM Sans'] text-gray-600">
                            Oceanside, CA- October 10, 2024
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
