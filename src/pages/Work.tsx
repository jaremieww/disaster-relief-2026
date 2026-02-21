//import React from 'react'
import { getAll as getCenters } from '../services/centersApi'
import { useLoaderData } from 'react-router-dom'
import type { ICenter, ICenterList } from '../types/types'
import { Link } from 'react-router-dom'
import WorkNav from '../components/WorkNav'

const Work = () => {

    const centers = useLoaderData() as ICenterList

    return (
        <>
            <WorkNav 
                centers={centers}
             />
            <div>
                <ul>
                    {centers.map((center: ICenter) => (
                        <li key={center.centerId}><Link to={`/work/${center.centerId}`}>{center.facility.facilityCity}, {center.facility.facilityState}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Work

export const workLoader = async () => {
  // Simulate fetching data for centers
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(getCenters());
            }, 1000);
    })
}

