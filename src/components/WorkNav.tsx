import type { ICenterList } from '../types/types'
import { NavLink } from 'react-router-dom'

interface IWorkNavProps {
  centers: ICenterList | null
}

const WorkNav = ({ centers }: IWorkNavProps) => {
  return (
    <div className="navbar">
        {centers?.map((center) => (
            <NavLink 
                key={center.centerId}
                to={`/work/${center.centerId}`}
            >
                {center.facility.facilityCity}, {center.facility.facilityState}
            </NavLink>
        ))}
    </div>
  )
}

export default WorkNav
