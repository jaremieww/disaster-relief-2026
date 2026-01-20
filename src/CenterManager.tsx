import { useState } from "react";
import type { ICenters } from './types';
import { CenterItem } from "./CenterItem";
import stkCenters from "./data/USSELocations.json";

interface CenterManagerProps {
    currentCenters: ICenters;
    // setCenters: (centers: ICenters) => void;
    addCenter: (centerName: string) => void;
    //chooseCenter: (id: string) => void;
    toggleCenter: (id: string, active: boolean) => void;
    archiveCenter: (id: string) => void;
    selectedCenterID: string | null;
}

export const CenterManager = ({ currentCenters, addCenter, toggleCenter, archiveCenter, selectedCenterID }: CenterManagerProps) => {    
   const [newCenterName, setNewCenterName] = useState("");
   
   function handleAddCenter(e: React.FormEvent) {
        e.preventDefault();
        if(newCenterName.trim() === "") return;

        addCenter(newCenterName);

        setNewCenterName("");
    }

    return (
        <>
            <div>
                <form onSubmit={handleAddCenter} className="mb-4">
                    <input
                        type="text"
                        value={newCenterName}
                        onChange={(e) => setNewCenterName(e.target.value)}
                        placeholder="Enter center name"
                    />
                    <button type="submit">Add Center</button>
                </form>
            </div> 
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 text-center font-semibold bg-gray-200 text-2xl sm:text-sm">
                <div className="bg-slate-600 rounded-xl hover:bg-slate-700 hover:scale-110 transition-all duration-300">
                  <div>
                    {stkCenters.Locations.map(item => (
                    <details key={item.State} style={{ border: '1px solid #ccc', padding: '10px', width: '450px' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            {item.State} Click to expand/collapse
                        </summary>
                        <div style={{ padding: '10px 0 0 0' }}>
                            <ul>
                                {item.Stakes.map(stake => (     
                                    <li key={stake.Name}>{stake.Name}
                                        <button 
                                            onClick={() => addCenter(stake.Name)}>
                                            Add
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </details>
                ))}
            </div>
            </div>               
                <div className="bg-slate-600 rounded-l hover:bg-slate-700 hover:scale-110 transition-all duration-300">
                    {currentCenters == null || currentCenters.length === 0 ? 
                       <div>No centers available</div>
                    : 
                    <ol>
                        {currentCenters.map(center => {
                            return (
                                    <CenterItem
                                        id={center.id}
                                        centerName={center.centerName}
                                        active={center.active}
                                        key={center.id}
                                        selectedCenterID={selectedCenterID}
                                        toggleCenter={toggleCenter}
                                        archiveCenter={archiveCenter}
                                    /> 
                                )
                            })}
                    </ol> 
                    }
                </div>
            </div>
            <a href="CenterDetail">Go to Center Detail Page</a>
        </>
    );
}