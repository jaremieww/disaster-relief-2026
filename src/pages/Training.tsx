import { NavLink } from 'react-router-dom'

const Training = () => {
 
  return (
    <div  >
      <div className="bg-yellow-300 flex flex-row items-center justify-around h-full">
        <NavLink to="/training/teamlead" >Team Lead</NavLink>
        <NavLink to="/training/callcenter" >Call Center</NavLink>
        <NavLink to="/training/centerleaders" >Center Leaders</NavLink>
      </div>
    </div>
  )
}

export default Training
