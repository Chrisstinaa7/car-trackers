'use client'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-[0A0A0A61] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">C</div>
                    <span className="font-bold text-lg text-gray-800">car <span className="text-orange-500">trackers</span></span>
                </div>

                {/* Menu links */}
                <div className="hidden md:flex space-x-4 text-sm text-gray-700">
                    <Link href="#">Sell your car</Link>
                    <Link href="#">Apply for a new car</Link>
                    <Link href="#">Beat my offer</Link>
                    <Link href="#">About us</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">Kelley Blue Book</Link>
                    <Link href="#">Media</Link>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                    <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">Get Offer</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600">Contact Us</button>
                </div>
            </div>
        </nav>
    )
}
