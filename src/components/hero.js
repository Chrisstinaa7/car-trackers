'use client'
import { useState } from 'react'

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState('makeModel')

    const renderInput = () => {
        const inputBaseClasses = "w-full px-4 py-2 border border-gray-300 rounded-sm mt-4"
        const buttonClasses = "mt-3 bg-[#FF8713] hover:bg-[#e56e00] text-white font-semibold px-6 py-2 rounded-sm transition"

        switch (activeTab) {
            case 'makeModel':
                return (
                    <>
                        <input
                            type="text"
                            placeholder="Enter Make / Model"
                            className={inputBaseClasses}
                        />
                        <button className={buttonClasses}>Submit</button>
                    </>
                )
            case 'vin':
                return (
                    <>
                        <input
                            type="text"
                            placeholder="Enter VIN"
                            className={`${inputBaseClasses} bg-gray-100`}
                        />
                        <button className={buttonClasses}>Submit</button>
                    </>
                )
            case 'license':
                return (
                    <>
                        <input
                            type="text"
                            placeholder="Enter License Plate"
                            className={inputBaseClasses}
                        />
                        <button className={buttonClasses}>Submit</button>
                    </>
                )
            default:
                return null
        }
    }

    return (
        <section className="w-full flex justify-center mt-[221px]">
            <div className="w-[1120px] h-[582px] flex justify-between items-start">

                {/* Left Column: Heading + Subtext */}
                <div className="w-[560px] mt-[30px]">
                    <h1 className="text-white text-5xl font-bold leading-[84px]">
                        THE NEW WAY TO SELL YOUR CAR.
                    </h1>
                    <p className="mt-6 w-[425px] text-white font-bold text-[18px] leading-[31px]">
                        So you can sell your vehicle today!
                    </p>
                </div>

                {/* Right Column: Dynamic Form Box */}
                <div className="w-[540px] h-[220px] mt-[10px] bg-white rounded-sm p-6 shadow-lg">
                    {/* Tabs */}
                    <div className="flex justify-between mb-4">
                        {[
                            { key: 'makeModel', label: 'Make / Model' },
                            { key: 'vin', label: 'VIN' },
                            { key: 'license', label: 'License Plate' }
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex-1 text-sm font-semibold py-2 rounded-sm transition
                                    ${activeTab === tab.key
                                        ? 'bg-gray-200 text-black'
                                        : 'hover:bg-gray-100 text-gray-700'}
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Input field + Submit button */}
                    <div>
                        {renderInput()}
                    </div>
                </div>
            </div>
        </section>
    )
}
