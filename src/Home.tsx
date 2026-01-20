import type { ICenters } from './types';

interface HomeProps {
    currentCenters: ICenters;
}

export const Home = ({ currentCenters }: HomeProps) => {    
    return (
        <>
            <h1 className="text-3xl font-bold underline text-blue-600">Welcome to the Home Page</h1 >
                
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 text-center font-semibold bg-gray-200 text-2xl sm:text-sm">
                <div className="bg-slate-600 rounded-xl hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/centerdetail">Let's Get to Work:  {currentCenters != null ? ` ${currentCenters.filter(center => center.active).length} active centers` : "0 active centers"} </a></div>               
                <div className="bg-slate-600 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/centermanager">Center Manager</a></div>
                <div className="bg-slate-600 rounded-l hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/centermapview">See the map</a></div>
                <div className="bg-slate-600 rounded-m hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/findassignment">Where am I assigned?</a></div>
                <div className="bg-slate-600 rounded-m hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/reports">How are we doing?</a></div>
                <div className="bg-slate-600 rounded-m hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/preparation">Offseason Activities</a></div>
                <div className="bg-slate-600 rounded-m hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/training">Training Zone</a></div>
                <div className="bg-slate-600 rounded-s hover:bg-slate-700 hover:scale-110 transition-all duration-300"><a href="/assignmentmanager">Stake Assignment Manager</a></div>     
            </div>         
        </>
    );
}