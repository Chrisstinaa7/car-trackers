'use client'

import Image from 'next/image'

export default function HowItWorks() {
    return (
        <section className="flex justify-center mt-[713px]">
            <div className="w-[1080px] h-[309px] bg-white rounded-[16px] shadow-md flex flex-col items-center px-4 py-6">

                {/* Main Heading */}
                <h2 className="text-[42px] font-black text-white bg-[#FF8713] text-center leading-[42px] w-fit px-6 py-2 rounded-lg">
                    How it works
                </h2>

                {/* Row with 3 Steps */}
                <div className="flex justify-between w-full mt-8 px-6">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center w-1/3 px-4">
                        <Image src="/icons/tag.png" alt="Tag Icon" width={50} height={50} />
                        <h4 className="text-[20px] font-bold leading-[32px] mt-3">List Your Car</h4>
                        <p className="text-[16px] font-normal leading-[31px] mt-1 text-gray-700 max-w-[320px]">
                            Add your vehicle details to get instant offers from trusted dealers.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center w-1/3 px-4">
                        <Image src="/icons/finger-phone.png" alt="Phone Interaction Icon" width={50} height={50} />
                        <h4 className="text-[20px] font-bold leading-[32px] mt-3">Choose an Offer</h4>
                        <p className="text-[16px] font-normal leading-[31px] mt-1 text-gray-700 max-w-[320px]">
                            Compare offers and pick the best one with just a tap.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center w-1/3 px-4">
                        <Image src="/icons/checklist.png" alt="Checklist Icon" width={50} height={50} />
                        <h4 className="text-[20px] font-bold leading-[32px] mt-3">Sell & Get Paid</h4>
                        <p className="text-[16px] font-normal leading-[31px] mt-1 text-gray-700 max-w-[320px]">
                            Complete the deal and receive payment quickly and securely.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
