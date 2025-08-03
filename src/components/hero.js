'use client'

export default function HeroSection() {
    return (
        <section className="w-full flex justify-center mt-[221px]">
            <div className="w-[1120px] h-[582px] flex justify-between items-start">

                {/* Left: Heading + Subtext */}
                <div className="w-[560px] mt-[30px]">
                    <h1 className="text-white text-5xl font-bold leading-[84px]">
                        Sell your car for the best price.
                    </h1>
                    <p className="mt-6 w-[425px] text-white font-bold text-[18px] leading-[31px]">
                        So you can sell your vehicle today!
                    </p>
                </div>

                {/* Right: Form */}
                <div className="w-[540px] h-[550px] mt-[10px] bg-white rounded-lg p-6 shadow-lg space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Make / Model</label>
                        <input
                            type="text"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="e.g. Toyota Corolla"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">VIN</label>
                        <input
                            type="text"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                            placeholder="Vehicle Identification Number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">License Plate</label>
                        <input
                            type="text"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter License Plate"
                        />
                    </div>

                    <button className="w-full mt-6 bg-[#FF8713] hover:bg-[#e56e00] text-white font-semibold py-2 rounded-md transition">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}
