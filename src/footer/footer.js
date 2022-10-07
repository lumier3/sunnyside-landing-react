import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook , faInstagram, faTwitter, faPinterest} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="w-full bg-green">
            <div className="w-2/3 mx-auto text-center p-10">
                <h1 className="font-bold text-4xl">SUNNYSIDE</h1>
                <div>
                    <ul>
                        <li className="inline-block px-4 font-medium py-4">About</li>
                        <li className="inline-block px-4 font-medium py-4">Services</li>
                        <li className="inline-block px-4 font-medium py-4">Projects</li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFacebook}  className="px-2 text-2xl mt-3" />
                    <FontAwesomeIcon icon={faInstagram} className="px-2 text-2xl mt-3" />
                    <FontAwesomeIcon icon={faTwitter}   className="px-2 text-2xl mt-3"  />
                    <FontAwesomeIcon icon={faPinterest} className="px-2 text-2xl mt-3"  />
                </div>
            </div>
        </div>
    )
}
