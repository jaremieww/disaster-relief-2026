import './App.css'
import { Route,
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
//import Training from './pages/Training'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'

//import Header from './components/Header'
import RootLayout from './layout/RootLayout'
import WorkLayout from './layout/WorkLayout'
import TrainingLayout from './layout/TrainingLayout'
import TeamLead from './components/TeamLead'
import CenterLeaders from './components/CenterLeaders'
import CallCenter from './components/CallCenter'
import WorkDetail from './components/WorkDetail'
import Error from './components/Error'
import { workLoader } from './pages/Work'
import { workDetailLoader } from './components/WorkDetail'
import { currentWorkLoader } from './pages/Home'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />} hydrateFallbackElement={<div>Loading...</div>} >
      <Route index element={<Home />} loader={currentWorkLoader} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/training" element={<TrainingLayout />} >
        <Route path='teamlead' element={<TeamLead />} />
        <Route path='centerleaders' element={<CenterLeaders />} />
        <Route path='callcenter' element={<CallCenter />} />
      </Route>      
      <Route path="/work" element={<WorkLayout />} errorElement={<Error />} >
        <Route index element={<Work />} loader={workLoader} />
        <Route path=":centerId" element={<WorkDetail />} loader={workDetailLoader}  />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  
  ))

  
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
