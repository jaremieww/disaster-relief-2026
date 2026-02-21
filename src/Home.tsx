import type { ICenters, IUser } from './types';

interface HomeProps {
    currentCenters: ICenters;
    currentUser: IUser;
}

export const Home = ({ currentCenters, currentUser }: HomeProps) => {    
    return (
        <>
            {/* <h1 className="text-3xl font-bold underline text-blue-600">Welcome to the Home Page</h1 >
                 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 text-center font-semibold text-2xl sm:text-lg">
                {currentUser.role === "Administrator" &&
                    <>
                        <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/centermanager">Center Manager**</a></div>
                        <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/assignmentmanager">Stake Assignment Manager**</a></div>     
                        <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/filemanager">File Manager**</a></div>     
                        <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/reports">How are we doing?**</a></div>
                    </>
                } 
                <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/centerdetail">Find Work  {currentCenters != null ? `at ${currentCenters.filter(center => center.active).length} Centers` : ""} </a></div> 
                <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/findassignment">Where am I assigned?</a></div>
                <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/centermapview">See the map</a></div>
                <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/preparation">Offseason Activities</a></div>
                <div className="bg-slate-400 rounded-full hover:bg-slate-500 hover:scale-105 transition-all duration-300"><a href="/training">Training Zone</a></div>
           </div>         
        </>
    );
}