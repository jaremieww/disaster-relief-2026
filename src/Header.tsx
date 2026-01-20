import {useState} from "react";
//import ussedrlogo from "./assets/ussedrlogo.png";

export const Header = () =>{   
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* NavBar */}
            <div className="flex items-center justify-between h-8 text-black gap-4 p-4 bg-gray-200 text-gray-800">
                <a href="/home">HOME</a>  
                {/* <a href="/home"><img src={ussedrlogo} alt="USSE Disaster Relief Logo" className="h-8 w-auto"/></a>   */}
                {/* Desktop Navigation */}
                <div className="hidden sm:flex gap-2">
                    <span><a href="/home">Home</a></span>
                    <span><a href="/about">About Us</a></span>
                    <span><a href="/center">Centers</a></span>
                </div>
                <button className="text-xl cursor-pointer sm:hidden"
                onClick={() => setOpen(!open)
                }>=</button>
            </div> 
        {/* Mobile Navigation */}
        { open && (
            <div className="flex flex-col items-center gap-4 bg-gray-200 text-gray-800 p-4 sm:hidden">
               <span><a href="/home">Home</a></span>
               <span><a href="/about">About Us</a></span>
               <span><a href="/center">Centers</a></span>
            </div>
        )}
        </div>
    );
}