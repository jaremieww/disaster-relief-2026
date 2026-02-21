    import {useState} from "react";
    import ussedrlogo from "./ussedrlogo.png";
    import type { IUser } from "./types";

    interface HeaderProps {
        user: IUser | null;
        getAnotherUser: () => void;
    }

    export const Header = ({user, getAnotherUser}: HeaderProps) =>{   
        const [open, setOpen] = useState(false);
        return (
            <div>
                {/* NavBar */}
                <div className="flex items-center justify-between h-10 text-black gap-4 p-4 text-gray-800">
                    {/* <a href="/home">HOME</a> */}
                    <div className="flex gap-2">
                        <a href="/home"><img src={ussedrlogo} alt="USSE Disaster Relief Logo" className="h-8 w-auto"/></a>      
                        <a href="/home"><h1 className=" hidden sm:block text-2xl font-bold" >USSE Disaster Relief</h1></a>
                    </div>
                            {/* <a href="/home"><img src={ussedrlogo} alt="USSE Disaster Relief Logo" className="h-8 w-auto"/></a>   */}
                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex gap-2">
                        <span><a href="/centerdetail">Work</a></span>
                        <span><a href="/findassignment">Where</a></span>
                        <span><a href="/centermapview">Map</a></span>
                        <span><a href="/training">Learn</a></span>
                        <span className="cursor-pointer bg-gray-300" onClick={getAnotherUser}>{user?.name}, {user?.role}</span>
                    </div>
                    <button className="text-xl cursor-pointer sm:hidden"
                        onClick={() => setOpen(!open)
                    }>=</button>
                </div> 
            {/* Mobile Navigation */}
            { open && (
                <div className="flex flex-col items-center gap-4 bg-gray-200 text-black p-4 sm:hidden">
                <span><a href="/centerdetail">Work</a></span>
                <span><a href="/findassignment">Where</a></span>
                <span><a href="/centermapview">Map</a></span>
                <span><a href="/training">Learn</a></span>
                </div>
            )}
            </div>
        );
    }