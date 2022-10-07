import React from "react";
import Navbar from "./nav";
import Textbox from "./textbox";

export default function HeaderSection() {
    return (
        <div className="w-full min-h-screen bg-main-page-mobile bg-cover bg-no-repeat bg-center md:bg-main-page" id="header">
            <Navbar />
            <Textbox/>
            
        </div>
    )
}