import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-center items-center" >
        <div className="mr-4">
            <Link to="/contact" className="text-white hover:underline mr-4">
                Contact Us
            </Link>
        </div>
        <div className="mr-4">
            <Link to ="/about" className="text-white hover:underline">
            About Us
            </Link>
        </div>
        <div>
            <p className="text-center">© 2026 USSE Disaster Relief. All rights reserved.</p>
                {/* <br/> Last Deployed {new Date().toLocaleString()} Version 0.1.0
                <br/>Not an official site of the Church of Jesus Christ of Latter-day Saints */}
        </div>  
    </div>
  )
}

export default Footer
