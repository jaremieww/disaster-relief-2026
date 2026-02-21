import Training from '../pages/Training'
//import Breadcrumb from '../components/Breadcrumb'
import { Outlet } from 'react-router-dom'

const TrainingLayout = () => {
  return (
    <div>
      {/* <Breadcrumb /> */}
      <Training />
      <Outlet />
    </div>
  )
}

export default TrainingLayout
