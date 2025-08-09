// src/components/Box.js
'use client';
import React from 'react';
import Image from 'next/image';
import Mask from '/public/maskgroup.png';

const Box = () => {
    return (
        <section className="relative w-full bg-[#ff8713] overflow-hidden">
            {/* Left Mask */}
            <div className="absolute top-0 left-0">
                <Image
                    src={Mask}
                    alt="Left Mask"
                    width={300}
                    height={300}
                    className="opacity-40"
                />
            </div>

            {/* Right Mask */}
            <div className="absolute top-0 right-0">
                <Image
                    src={Mask}
                    alt="Right Mask"
                    width={300}
                    height={300}
                    className="opacity-40 -scale-x-100 "
                />
            </div>

            {/* Text Block */}
            <div className="relative flex flex-col justify-center text-left px-4 py-16 max-w-6xl mx-auto pl-50">
                <h2 className="text-white text-4xl md:text-5xl font-bold uppercase font-['Oxanium'] leading-tight">
                    WE UNDERSTAND <span className="text-[#3d362f]">HOW BUSY YOU ARE.</span>
                </h2>
                <p className="mt-6 text-white text-sm md:text-base font-['Open_Sans'] max-w-3xl">
                    We can do videocall appraisals to purchase your vehicle from the convenience of your home, work, or anywhere you have signal. Our licensed appraisers will handle everything from paperwork to payment.
                </p>
            </div>
        </section>
    );
};

export default Box;
