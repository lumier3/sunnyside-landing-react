import React from "react";

export default function HeroSection() {
    return (
        <div className="">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                <div className="w-full p-10 lg:w-1/3 lg:ml-28">
                    <h1 className="text-4xl font-bold lg:text-6xl">Transform your brand</h1>
                    <p className="text-sm font-medium text-gray-400 my-6 relative">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, labore corrupti illum repudiandae cum voluptatibus quis possimus facilis assumenda dolorum at quae! Similique sit neque illum deleniti ut saepe sed.
                    </p>
                   <span className="px-2 relative left-[30%] inline-block bg-white font-bold rounded-[10px] after:content-[''] after:absolute after:bg-yellow-400 after:h-2 after:w-full after:bottom-0 after:left-0 after:z-[1] after:opacity-50 after:rounded">Learn more</span>
                </div>
                <div className="w-full lg:w-1/2">
                <img src="./images/desktop/image-transform.jpg" alt="" className="w-full" />
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between">
                <div className="w-full p-10 lg:w-1/3 lg:mr-28">
                    <h1 className="text-4xl font-bold lg:text-6xl">Transform your brand</h1>
                    <p className="text-sm font-medium text-gray-400 my-6 relative">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, labore corrupti illum repudiandae cum voluptatibus quis possimus facilis assumenda dolorum at quae! Similique sit neque illum deleniti ut saepe sed.
                    </p>
                   <span className="px-2 relative left-[30%] inline-block bg-white font-bold rounded-[10px] after:content-[''] after:absolute after:bg-yellow-400 after:h-2 after:w-full after:bottom-0 after:left-0 after:z-[1] after:opacity-50 after:rounded">Learn more</span>
                </div>
                <div className="w-full lg:w-1/2">
                <img src="./images/desktop/image-transform.jpg" alt="" className="w-full" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="relative w-full lg:w-1/2">
                    <img src="./images/desktop/image-photography.jpg" alt="" className="hidden lg:block w-full" />
                    <img src="./images/mobile/image-photography.jpg" alt="" className="lg:hidden w-full" />
                    <div className="absolute top-[70%] left-[25%] text-center w-1/2">
                        <h1 className="text-2xl font-bold">Photography</h1>
                        <p className="mt-2 text-sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nihil reprehenderit nulla obcaecati nam rem maxime cupiditate vel aspernatur sed
                        </p>
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2">
                    <img src="./images/desktop/image-graphic-design.jpg" alt="" className="hidden lg:block" />
                    <img src="./images/mobile/image-graphic-design.jpg" alt="" className="lg:hidden" />
                    <div className="absolute top-[70%] left-[25%] text-center w-1/2">
                        <h1 className="text-2xl font-bold">Graphic Design</h1>
                        <p className="mt-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugit itaque nulla dignissimos rem maiores magnam reiciendis dolorem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}