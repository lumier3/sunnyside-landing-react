import React from "react";

export default function Pics() {
    return (
        <div className="overflow-hidden w-full">
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 ">
            <img src="./images/desktop/image-gallery-cone.jpg" alt="" className="hidden lg:block" />
            <img src="./images/mobile/image-gallery-cone.jpg" alt="" className="lg:hidden" />
            <img src="./images/desktop/image-gallery-cone.jpg" alt="" className="hidden lg:block" />
            <img src="./images/mobile/image-gallery-cone.jpg" alt="" className="lg:hidden" />
            <img src="./images/desktop/image-gallery-cone.jpg" alt="" className="hidden lg:block" />
            <img src="./images/mobile/image-gallery-cone.jpg" alt="" className="lg:hidden" />
            <img src="./images/desktop/image-gallery-cone.jpg" alt="" className="hidden lg:block" />
            <img src="./images/mobile/image-gallery-cone.jpg" alt="" className="lg:hidden" />
            </div>
            
        </div>
    )
}