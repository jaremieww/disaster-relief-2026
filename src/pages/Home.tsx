import { useLoaderData } from 'react-router-dom'
import { getAll as getCenters } from '../services/centersApi'
import type { ICenter, ICenterList } from '../types/types'
import { Link } from 'react-router-dom'


const Home = () => {

  const currentCenters = useLoaderData() as ICenterList

  return (
    <div >   
      <p className="mt-4">This is the home page for disaster relief training resources.</p>
      <p className="mt-2">Use the navigation above to explore training materials and work opportunities.</p>
      <h2 className="mt-6 text-xl font-bold">Current Centers:</h2>
      <ul className="mt-2 list-disc list-inside">
        {currentCenters?.map((center: ICenter) => (
          <li key={center.centerId}>
            <Link to={`/work/${center.centerId}`} className="text-blue-500 hover:underline">
              {center.facility.facilityCity}, {center.facility.facilityState}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

export const currentWorkLoader = async () => {
  // Simulate fetching data for centers
    const theCenters = new Promise((resolve) => {
        setTimeout(() => {
                resolve(getCenters());
            }, 1000);
    })

    return theCenters
}


