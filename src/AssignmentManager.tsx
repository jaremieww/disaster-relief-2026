//import  { useMemo } from "react";
//import areaStakes from "./data/USSEStakes.json";
import type { IStakes, IStake, ICenters, ICenter } from "./types";
//import calculateDistance from "./DistanceCalculatorManual";
//import { StakeDistanceTable } from "./StakeDistanceTable";


interface AssignmentManagerProps {
    currentCenters: ICenters;
    selectedCenterId: string | null;
    //setCurrentCenterId: (id: string | null) => void;
    chooseCenter: (id: string) => void;
    //updateStakeAssignments: (id: string, assignments: string[]) => void;
    addStakeToSelectedCenter: (stakeId: string) => void;
    //TODO overrideStakeAssignment
    stakes: IStakes | null;
    //sortStakes: (selectedCenterId: string | null) => IStake[]; 
    removeStakeFromSelectedCenter: (stakeId: string) => void;
}

export const AssignmentManager = ({ currentCenters, selectedCenterId, chooseCenter, addStakeToSelectedCenter, stakes, removeStakeFromSelectedCenter }: AssignmentManagerProps) =>{    
   
    return (
        <>
            <h1 >Manage Stake Assignments to Centers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 text-center font-semibold text-2xl sm:text-lg">
                <div className="bg-slate-400 p-1 rounded-lg ">
                    {currentCenters != null && currentCenters.map((center:ICenter) => 
                    (
                       <>
                            <div key={center.id} className="grid grid-cols-[50px_minmax(0,_1fr)_20px] border-black border-2 m-1 p-1 rounded-lg bg-slate-200 hover:bg-slate-300"> 
                                <div className="rounded-xl  place-items-center place-content-center text-center flex items-center justify-center"
                                    onClick={() => chooseCenter(center.id)}
                                > 
                                    <p className="-rotate-90 bg-slate-500 hover:bg-blue-400">{center.id !== selectedCenterId ? "[Select]" : ""}</p>
                                    {/* {center.id !== selectedCenterId ?
                                        <button className="px-1 py-1 bg-white text-black rounded hover:bg-blue-400 -rotate-90 align-middle " onClick={() => chooseCenter(center.id)}>Choose</button> 
                                        : ""
                                    } */}

                                </div>
                                <div className="border-black">
                                    <div className=" p-2 rounded-lg  ">
                                        {center.id === selectedCenterId ?
                                            <div className="font-semibold underline text-black">{center.centerName}</div>
                                            :
                                            <div className="font-normal text-black">{center.centerName}</div>
                                        }
                                    </div>
                                    <div className=" p-1 rounded-sm  text-black">
                                        {(center.assignedStakes != null && center.assignedStakes.map((stakeId: string) => (
                                                (<span key={stakeId} className="hover:underline hover:cursor-pointer">
                                                    {stakes?.find((stake:IStake) => stake.unitNumber === stakeId)?.stakeName}
                                                    <button className="px-1 py-0 text-black rounded bg-slate-400 hover:bg-blue-400"
                                                        onClick={() => removeStakeFromSelectedCenter(stakeId) }>
                                                        remove
                                                    </button>
                                                    <br /> 
                                                </span>)
                                            ))) || <span>No stakes assigned.</span>}  
                                         
                                    </div>
                                </div>
                                {center.id === selectedCenterId ?
                                        <div className=" bg-green-900">
                                           {/* <p className="-rotate-90 text-small">Add Here</p> */}
                                        </div>
                                        : 
                                        <div ></div>
                                }
                            </div>
                        </>
                    ))}  
                </div>  
                <div className="bg-slate-400">
                   <div className="bg-slate-200 p-2 rounded-lg m-2 text-black">
                        <div className="grid grid-cols-[75px_minmax(0,_1fr)_100px]">
                            {stakes != null ? stakes
                                .sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity))
                                .map((stake:IStake) => (  
                                    <>  
                                        <div key={stake.unitNumber} className=" p-2 rounded-lg m-1 text-black">
                                            <button className="px-1 py-0 bg-slate-400 text-black rounded hover:bg-blue-400"
                                                onClick={() => addStakeToSelectedCenter(stake.unitNumber) }>
                                                Add
                                            </button>
                                        </div>
                                        <div className=" p-2 rounded-lg m-1 text-black">
                                            {/* {stake.unitNumber}  */}
                                            {stake.stakeName} 
                                        </div>
                                        <div className=" p-2 rounded-lg m-1 text-black">
                                            {stake.distance != null ? `${(stake.distance*0.00062).toFixed(0)} mi` : '?'}
                                        </div>
                                    </>
                                )) : <p>No stakes available.</p>}
                        </div>
                    </div>
                   {/* <ul>
                        {stakes != null && stakes
                            .sort((a, b) => a.distance - b.distance)
                            .map((stake:IStake) => (
                            <li key={stake.unitNumber}>
                                <button 
                                    onClick={() => addStakeToSelectedCenter(stake.unitNumber) }>
                                    Add
                                </button>
                                {stake.unitNumber} 
                                {stake.stakeName} 
                                {stake.distance != null ? `(${(stake.distance*0.00062).toFixed(0)} mi)` : '?'} 
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>             
        </>
    );
}