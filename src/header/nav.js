import React from "react";


export default function Navbar() {
    return (
        <div className="container w-5/6 flex justify-between items-center p-6 md:mx-auto">
            <img src="./images/logo.svg" alt="" />
            <div className="hidden md:flex">
                <a href="2" className="px-4 py-2 font-bold text-white duration-0 hover:text-black hover:bg-white hover:rounded-xl hover:duration-[1000ms]">About</a>
                <a href="2" className="px-4 py-2 font-bold text-white duration-0 hover:text-black hover:bg-white hover:rounded-xl hover:duration-[1000ms]">Services</a>
                <a href="2" className="px-4 py-2 font-bold text-white duration-0 hover:text-black hover:bg-white hover:rounded-xl hover:duration-1000">Project</a>
                <a href="2" className="px-4 py-2 font-bold text-white duration-0 hover:text-black hover:bg-white hover:rounded-xl hover:duration-1000">Contact</a>
            </div>
        </div>
    )
}