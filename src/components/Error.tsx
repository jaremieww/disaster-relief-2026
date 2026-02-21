import { useRouteError, useNavigate } from 'react-router-dom'

const Error = () => {

    const error = useRouteError() as Error
    const navigate = useNavigate()

  return (
    <div>
      <h1>Error Page</h1>
      <p>Something went wrong. Please try again later.</p>
      <p>Error Details: {error.message}</p>
      <button onClick={() => navigate('/')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go Back Home
      </button>
    </div>
  )
}

export default Error
