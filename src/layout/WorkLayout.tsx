import { Outlet } from 'react-router-dom'
//import WorkNav from '../components/WorkNav'
//import Breadcrumb from '../components/Breadcrumb'


const WorkLayout = () => {
  return (
    <div>
        {/* <Breadcrumb /> */}
        <Outlet />
      
    </div>
  )
}

export default WorkLayout

