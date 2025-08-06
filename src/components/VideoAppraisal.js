import Image from 'next/image';

export default function VideoAppraisal() {
    return (
        <section className="bg-[#f8f9fa] py-16">
            <div className="container mx-auto max-w-[1120px] px-10 flex flex-col lg:flex-row items-center gap-8">

                <div className="relative w-full lg:w-[560px] h-[400px] lg:h-[479px] overflow-hidden flex items-center justify-center">

                    <div className="absolute top-4 left-4 px-3 py-2 flex items-center gap-2 z-10">
                        <Image src="/icon1.png" alt="icon" width={16} height={16} />
                        <p className="text-xs md:text-sm font-bold text-[#FF8713]">Do You Have a Smart Phone?</p>
                    </div>


                    <Image
                        src="/Videoappraisal.png"
                        alt="Video Appraisal"
                        width={550}
                        height={0}
                        className="h-auto object-contain"
                    />
                </div>


                {/* Right Side: Text + Icons */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">10 Minute Video Appraisal</h2>

                    {/* Block 1 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="min-w-[40px]">
                            <Image src="/Container (1).png" alt="home icon" width={40} height={40} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Never Leave Your Home</h3>
                            <p className="text-sm text-gray-600">Get a quick and accurate appraisal for your vehicle through a simple video call from the comfort of your home.</p>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className="flex items-start gap-4">
                        <div className="min-w-[40px]">
                            <Image src="/Container (2).png" alt="offer icon" width={40} height={40} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Final Offer</h3>
                            <p className="text-sm text-gray-600">Stop wasting time going to dealerships only to get low offers. With Car Trackers, you'll receive a final offer instantly after we assess your vehicle via video call. It doesn't get any easier!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
