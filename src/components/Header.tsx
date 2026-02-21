import { Link, NavLink } from 'react-router-dom'
import usseDRLogo from '../assets/usseDRLogo.png' 

export const Header = () => {
  return (
    <div className="navbar">
        <div className="logo-container">
            <Link to="/"><img src={usseDRLogo} alt="Disaster Relief Logo" className="h-12 w-12 mr-2" /></Link>
        </div>
        <div>
            <ul>
                <NavLink to="/" className="nav-link"><li>Home</li></NavLink>
                <NavLink to="/work" className="nav-link"><li>Work</li></NavLink>
                <NavLink to="/training" className="nav-link"><li>Training</li></NavLink>
            </ul>
        </div>
        <div>
            <a href="https://nase-disaster-relief.org/" target="_blank"><button className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">Original</button></a>
        </div>   
    </div>
  )
}

export default Header
