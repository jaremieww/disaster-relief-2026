
//import type { FC } from 'react';
// Removed React and useState imports as they are not used
// Define the types for the component's props
import type { ICenterList, ICenter, IStake } from '../types/types';

// interface IAPIProps {
//   name: string;
//   count?: number;
// }
    export const API_BASE_URL = 'https://onh77ovvj4.execute-api.us-east-1.amazonaws.com/prod';

    // GET all centers
    export const getAll: () => Promise<ICenterList> = async () => {
        const response = await fetch(`${API_BASE_URL}/centers`);
        if (!response.ok) throw new Error('Failed to fetch centers');
        const data = await response.json();
        return data.data;
    }

    // GET single center
    export const getById: (id: string) => Promise<ICenter> = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/centers/${id}`);
    if (!response.ok) throw new Error('Failed to fetch center');
    const data = await response.json();
    return data.data;
    }

    // POST create center
    export const create: (center: Partial<ICenter>) => Promise<ICenter> = async (center: Partial<ICenter>) => {
        console.log('Creating center with data:', center);
    const response = await fetch(`${API_BASE_URL}/centers`, {
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(center)
    });
    if (!response.ok) throw new Error('Failed to create center');
    const data = await response.json();
    return data.data;
    }

    // POST add a stake to center
    export const addStakeToCenter: (centerId: string, stake:Partial<IStake>) => Promise<ICenter> = async (centerId: string, stake: Partial<IStake>) => {
       // console.log(`Adding stake to center ${centerId} with data:`, stake);
        const response = await fetch(`${API_BASE_URL}/centers/${centerId}/stakes`, {    
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stake)
    });
    if (!response.ok) throw new Error('Failed to add stake to center');
    const data = await response.json();
    return data.data;
    }

    // PUT update center
    export const update: (id: string, updates: Partial<ICenter>) => Promise<ICenter> = async (id: string, updates: Partial<ICenter>) => {
    const response = await fetch(`${API_BASE_URL}/centers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
    });
    if (!response.ok) throw new Error('Failed to update center');
    const data = await response.json();
    return data.data;
    }
    
    // DELETE center
    export const deleteCenter: (id: string) => Promise<void> = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/centers/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete center');
    }



// Define the component using the FC (Functional Component) type
// or as a regular arrow function with a defined return type (e.g., JSX.Element)
// const facilitesApi: FC<IAPIProps> = ({ name, count = 0 }) => {
//     //console.log(`API Service: ${name}, Count: ${count}`);
//   return ( null );
// };

const centersApi = {
    getAll,
    getById,
    create,
    addStakeToCenter,
    update,
    deleteCenter
};  

export default centersApi;