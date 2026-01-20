// import { useState } from 'react'

interface CenterItemProps {
    id: string;
    centerName: string;
    active: boolean;
    selectedCenterID: string | null;
    toggleCenter: (id: string, active: boolean) => void;
    archiveCenter: (id: string) => void;
    // Edit Name: (id: string, newName: string) => void;
}


export function CenterItem( props: CenterItemProps ) {
     return (
        <li key={props.id}>
                {/* {props.id === props.selectedCenterID && <div>***</div>}     */}
                <label>Active:
                    <input key={props.id} type="checkbox" 
                    checked={props.active} 
                    onChange={e => props.toggleCenter(props.id, e.target.checked)}
                    />
                 {props.centerName}
                </label>
                <button 
                onClick={() => props.archiveCenter(props.id)}
                >Archive</button>
                {props.id === props.selectedCenterID && "<--"} 
        </li>
     ) 
}