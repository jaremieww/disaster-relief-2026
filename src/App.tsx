import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './Header'
import { Home } from './Home'
import { About } from './About'
import { Footer } from './Footer'
import { CenterDetail } from './CenterDetail'
import { PageNotFound } from './PageNotFound'
import { CenterManager } from './CenterManager'
import { CenterMapView } from './CenterMapView'
import { FindAssignment } from './FindAssignment'
import { Reports } from './Reports'
import { WardFamilyIdeas } from './WardFamilyIdeas'
import { StakeTraining } from './StakeTraining'
import { AssignmentManager } from './AssignmentManager'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import type { ICenters, ICenter } from './types'


function App() {

  const [centers, setCenters] = useState<ICenters>(() => {
    const storedCenters = localStorage.getItem("CENTERS");
    if (storedCenters == null) return null

    return JSON.parse(storedCenters)
  });

  const [selectedCenterId, setSelectedCenterId] = useState<string | null>(() => {
    const storedCenterId = localStorage.getItem("SELECTED_CENTER_ID");
    if (storedCenterId == null) return null;

    return storedCenterId ? JSON.parse(storedCenterId) : null;
  });

 useEffect(( ) => {
    localStorage.setItem("CENTERS", JSON.stringify(centers))
  }, [centers])

  useEffect(() => {

    localStorage.setItem("SELECTED_CENTER_ID", JSON.stringify(selectedCenterId));
  }, [selectedCenterId]);
  

  function addCenter(centerName: string) {
    //const newJSONValue = NewCenterPage
    const brandNewCenter: ICenter = { 
      id: crypto.randomUUID(),
      centerName, 
      active: true,
      detailJSON: "{}",
      // TODO:set the initial JSON value to something meaningful
      //detailJSON: JSON.stringify(newCenterJSON(centerName)),
      //detailJSON: JSON.stringify(initialJSONValue),
    };
    //setSelectedCenterId(brandNewCenter.id);
    
    const updatedCenters = centers ? [...centers, brandNewCenter] : [brandNewCenter];
    setCenters(updatedCenters); 
  }

  function toggleCenter(id: string, active: boolean) {

    setCenters(currentCenters => {
      return currentCenters.map(center => {
        if (center.id === id) {
            return { ...center, active}
        }
        return center
      })
    })
  }

  function archiveCenter(id: string) {
    if (selectedCenterId === id)
    { 
      //setSelectedCenter(null)
      setSelectedCenterId( id );
    }
    setCenters(currentCenters => {     
      return currentCenters.filter(center => center.id !== id)
    })
  }


  return (
    <>

      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home 
                currentCenters={centers} />}  />
          <Route path="/home" element={<Home 
                currentCenters={centers} />}  />
          <Route path="/about" element={<About />}  />
          <Route path="*" element={<Home 
                currentCenters={centers} />} />
          <Route path="/centermanager" element={<CenterManager 
                currentCenters={centers}
                addCenter={addCenter}
                toggleCenter={toggleCenter}
                archiveCenter={archiveCenter}
                selectedCenterID={selectedCenterId} />}  />
          <Route path="/centerdetail" element={<CenterDetail 
                currentCenters={centers} 
                selectedCenterId={selectedCenterId} 
                setSelectedCenterId={setSelectedCenterId} 
                />} />
          <Route path="/centermapview" element={<CenterMapView />} />
          <Route path="/findassignment" element={<FindAssignment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/preparation" element={<WardFamilyIdeas />} />
          <Route path="/training" element={<StakeTraining />} />
         <Route path="/assignmentmanager" element={<AssignmentManager />} />
             
          // <Route path="/error" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}


export default App
