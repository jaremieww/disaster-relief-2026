// import { useState } from 'react'

interface CenterItemProps {
    id: string;
    centerName: string;
    active: boolean;
    selectedCenterID: string | null;
    toggleCenter: (id: string, active: boolean) => void;
    archiveCenter: (id: string) => void;
    chooseCenter: (id: string) => void;
    // Edit Name: (id: string, newName: string) => void;
}


export function CenterItem( props: CenterItemProps ) {
     return (
        <div className="flex items-center justify-between space-x-4 p-2 border-b border-gray-300">
            <div>
                {props.id === props.selectedCenterID ?
                    <div className="font-semibold underline text-black">{props.centerName}</div>
                    :
                    <div className="font-normal text-black">{props.centerName}</div>
                }
            </div>

            <div className="flex items-center space-x-2">
                {props.id === props.selectedCenterID ?
                    <div className="text-gray-500 italic"></div>
                    :
                    <button className="px-1 py-0 bg-white text-black rounded hover:bg-blue-400" onClick={() => props.chooseCenter(props.id)}>Choose</button> 
                }
                <button className="px-1 py-0 bg-white text-black rounded hover:bg-blue-400"
                onClick={() => props.toggleCenter(props.id, !props.active)}
                >{props.active ? "Deactivate" : "Activate"}</button>
                <button className="px-1 py-0 bg-white text-black rounded hover:bg-blue-400"
                onClick={() => props.archiveCenter(props.id)}
                >Delete</button>

            </div> 
        </div>
     ) 
}