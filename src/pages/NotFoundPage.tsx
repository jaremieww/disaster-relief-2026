import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button onClick={() => navigate('/')} className="button">
          Go back to Home
        </button>
    </div>
  )
}

export default NotFoundPage
