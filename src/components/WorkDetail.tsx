import { getById as getACenterById } from '../services/centersApi'
import type { ICenter } from '../types/types'
import { useLoaderData } from 'react-router-dom'
//import WorkNav from '../components/WorkNav'
import CenterReadOnlyPlate from '../components/CenterReadOnlyPlate'


const WorkDetail = () => {

  const center: ICenter = useLoaderData()

  return (
    <>
        <div className="container">
            <h2>{center.year}:{center.stormName}:Week{center.week} -- {center.facility.facilityCity}, {center.facility.facilityState}</h2>
            <div className="mb-4 bg-black/10 p-4 rounded">
            < CenterReadOnlyPlate centerInfo={center?.informationPage} />
            </div>
        </div>
    </>
  )
}

export default WorkDetail

export const workDetailLoader = async ({ params }: any)=> {
    const { centerId } = params;
    const oneCenter = new Promise ((resolve) => {
    setTimeout(() => {
            resolve(getACenterById(centerId));
        }, 1000);
    })
    if(!oneCenter) {
        throw Error("Center not found");
    }  
    return oneCenter;
}
