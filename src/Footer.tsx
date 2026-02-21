import { useState } from 'react';
import type { IEvents } from './types';

 interface FooterProps {
    currentEvents: IEvents | null;
}

export const Footer = ({currentEvents }: FooterProps) =>{        
    return (
        <>
            <div className="mt-4 text-black p-1 rounded-lg border border-gray-500 text-center bottom-0 w-full bg-gray-200  ">
                <h3>United States Southeast Area: Disaster Relief Committee.</h3>
                {currentEvents && currentEvents.length > 0 ? (
                    <div>
                        <h4 className="font-bold">Current Events:</h4>
                        <ul>
                            {currentEvents.map(event => (
                                <li key={event.id}>{event.name}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No current events.</p>
                )}
            </div>
            
        </>
    );
}