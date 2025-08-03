'use client'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-[#0A0A0A99] backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Car Trackers Logo" className="w-[235px] h-[52px]" />
                </div>

                {/* Menu links */}
                <div className="hidden md:flex space-x-5 text-sm text-white">
                    {['Home',
                        'Sell your car',
                        'Apply for a new car',
                        'Beat my offer',
                        'About us',
                        'FAQ',
                        'Kelley Blue Book',
                        'Media'
                    ].map((text, i) => (
                        <Link
                            key={i}
                            href="#"
                            className="hover:text-[#FF8713] hover:underline underline-offset-4 transition"
                        >
                            {text}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                    <button className="border border-[#FF8713] text-[#FF8713] px-4 py-2 rounded hover:bg-[#FF8713] hover:text-white transition">Get Offer</button>
                    <button className="bg-[#FF8713] text-white px-4 py-2 rounded-md text-sm hover:bg-[#e56e00]">Contact Us</button>
                </div>
            </div>
        </nav>
    )
}