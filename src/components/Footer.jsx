import React from "react";

function Footer(){
    return (
    <div className="absolute bottom-0 w-screen bg-blue-600 h-32 py-8">
        <div className="container flex flex-col mx-auto items-center justify-center 
        space-y-4 h-10">
            <p className="text-white font-sm">Made by Marcos Villanueva Abreu</p>
            <div className="flex space-x-4">
                <a href="https://github.com/mva919"><i className="fa-brands fa-github text-white"></i></a>
                <a href="https://www.linkedin.com/in/mva919/"><i className="fa-brands fa-linkedin text-white"></i></a>
            </div>
        </div>
        
    </div>);
}

export default Footer;