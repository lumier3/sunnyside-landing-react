import React from "react";

export default function Testimonial() {
    return (
        <div className="w-full mb-10">
            <h2 className="w-4/5 text-center text-2xl mx-auto mt-10">
                CLIENT TESTIMONIALS
            </h2> 

            <div className="w-4/5 flex flex-col lg:flex-row mx-auto justify-between items-center">
                <div className="w-full lg:w-1/4 mt-20 text-center overflow-hidden">
                    <div className="w-14 mx-auto">
                    <img src="./images/image-emily.jpg" alt="" className="rounded-full w-14" />
                    </div>
                    <p className="mt-12 text-sm font-medium text-gray-400">
                        We put our trust in Sunnyside and they
                        delivered, making sure our needs were met 
                        and deadlines were always hit.
                    </p>
                    <div className="mt-10 text-center">
                        <h1 className="text-2xl font-bold">Emily R.</h1>
                        <span className="text-sm text-gray-400">Marketing Manager</span>
                    </div>
                </div>

                <div className="w-full lg:w-1/4 mt-20 text-center overflow-hidden">
                    <div className="w-14 mx-auto">
                    <img src="./images/image-emily.jpg" alt="" className="rounded-full w-14" />
                    </div>
                    <p className="mt-12 text-sm font-medium text-gray-400">
                        We put our trust in Sunnyside and they
                        delivered, making sure our needs were met 
                        and deadlines were always hit.
                    </p>
                    <div className="mt-10 text-center">
                        <h1 className="text-2xl font-bold">Emily R.</h1>
                        <span className="text-sm text-gray-400">Marketing Manager</span>
                    </div>
                </div>

                <div className="w-full lg:w-1/4 mt-20 text-center overflow-hidden">
                    <div className="w-14 mx-auto">
                    <img src="./images/image-emily.jpg" alt="" className="rounded-full w-14" />
                    </div>
                    <p className="mt-12 text-sm font-medium text-gray-400">
                        We put our trust in Sunnyside and they
                        delivered, making sure our needs were met 
                        and deadlines were always hit.
                    </p>
                    <div className="mt-10 text-center">
                        <h1 className="text-2xl font-bold">Emily R.</h1>
                        <span className="text-sm text-gray-400">Marketing Manager</span>
                    </div>
                </div>


            </div>
        </div>
    )
}