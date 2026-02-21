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
import { FileManager } from './FileManager'
import { Reports } from './Reports'
import { WardFamilyIdeas } from './WardFamilyIdeas'
import { StakeTraining } from './StakeTraining'
import { AssignmentManager } from './AssignmentManager'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import type { ICenters, ICenter, IStakes, IStake, IUsers, IUser, IEvents } from './types'
import areaStakes from "./data/USSEStakes.json";
import testUsers from "./data/USSEUsers.json";
//import calculateDistance from "./DistanceCalculatorManual";
import { getDistance }  from 'geolib';
//import buildDefaultCenterJSON from './CenterDefault';
//import { Editor } from './components/ui/editor';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


//   const [events, setEvents] = useState<IEvents | null>(() => {
//       const fetchEvents = async () => {
//         console.log("Starting fetchEvents function.");
//       try {
//         setIsLoading(true);
//         console.log("Fetching events data...");
//         const response = await fetch('https://rosilc6e38.execute-api.us-east-1.amazonaws.com/default/manageUSSEdatacalls/get(USSEEvents)');

//         if(!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         console.log("Response received, parsing data...");
        
//         const data = await response.json();
//         setEvents(data);
//         } catch (error) {
//           setError(error instanceof Error ? error : new Error('An unknown error occurred'));
//         } finally {
//           setIsLoading(false);
//         }

//         const storedEvents = localStorage.getItem("EVENTS");
//         if (storedEvents == null) return null;

//         console.log("Loading events from local storage.");
//         return JSON.parse(storedEvents);
//       }});


//   const [user, setUser] = useState<IUser | null>(() => {
//     const storedUser = localStorage.getItem("USER");
//     if (storedUser == null) return null;

//     return JSON.parse(storedUser);
//   });

//   const [centers, setCenters] = useState<ICenters>(() => {
//     const storedCenters = localStorage.getItem("CENTERS");
//     if (storedCenters == null) return null

//     return JSON.parse(storedCenters)
//   });

//   const [selectedCenterId, setSelectedCenterId] = useState<string | null>(() => {
//     const storedCenterId = localStorage.getItem("SELECTED_CENTER_ID");
//     if (storedCenterId == null) return null;

//     return storedCenterId ? JSON.parse(storedCenterId) : null;
//   });

//   const [stakes, setStakes] = useState<IStakes>(() => {
//     const storedStakes = localStorage.getItem("STAKES");
//     const freshStakes = areaStakes.Stakes;
//     if (storedStakes != null) 
//     { 
//       return JSON.parse(storedStakes); 
//     }
//     else if (areaStakes != null) 
//     {
//       return freshStakes;
//     }
//     console.log("Stakes data not found.");
//     return [];
//   });

//  useEffect(( ) => {
//     localStorage.setItem("CENTERS", JSON.stringify(centers))
//   }, [centers])

//   useEffect(() => {
//     localStorage.setItem("SELECTED_CENTER_ID", JSON.stringify(selectedCenterId));
//   }, [selectedCenterId]);

//   useEffect(() => {
//     localStorage.setItem("STAKES", JSON.stringify(stakes))
//   }, [stakes])  
  
//   // useEffect(() => {
//   //   localStorage.setItem("USERS", JSON.stringify(users))
//   // }, [users])

//   useEffect(() => {
//     localStorage.setItem("USER", JSON.stringify(user))
//   }, [user])  

//   useEffect(() => {
//   const fetchEvents = async () => {
//   try {
//     setIsLoading(true);
//     console.log("Fetching events data...");
//     const response = await fetch('https://rosilc6e38.execute-api.us-east-1.amazonaws.com/default');

//     if(!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     console.log("Response received, parsing data...");
    
//     const data = await response.json();
//     setEvents(data);
//     } catch (error) {
//       setError(error instanceof Error ? error : new Error('An unknown error occurred'));
//     } finally {
//       setIsLoading(false);
//     }

//     localStorage.setItem("EVENTS", JSON.stringify(currentEvents))
  
//   };}, []);


//   function getAnotherUser() {
//     const testUsersList: IUsers = testUsers.Users;
//     if (testUsersList == null || testUsersList.length === 0) return;
//     const randomIndex = Math.floor(Math.random() * testUsersList.length);
//     const foundUser = testUsersList[randomIndex];
//     setUser( foundUser );
//     return;
//   }

//   function addCenter(centerName: string, latitude: number | null, longitude: number | null) {
//     //const newJSONValue = NewCenterPage
//     const brandNewCenter: ICenter = { 
//       id: crypto.randomUUID(),
//       centerName, 
//       active: true,
//       latitude: latitude != null ? latitude : 30.1894,
//       longitude: longitude != null ? longitude : 82.6394,
//       detailJSON: "",
//       //detailJSON: buildDefaultCenterJSON(centerName),
//       // TODO:set the initial JSON value to something meaningful
//       //detailJSON: JSON.stringify(newCenterJSON(centerName)),
//       //detailJSON: JSON.stringify(initialJSONValue),
//       assignedStakes: []
//     };
//     //setSelectedCenterId(brandNewCenter.id);
    
//     const updatedCenters = centers ? [...centers, brandNewCenter] : [brandNewCenter];
//     setCenters(updatedCenters); 
//   }

//   function toggleCenter(id: string, active: boolean) {

//     setCenters(currentCenters => {
//       return currentCenters.map(center => {
//         if (center.id === id) {
//             return { ...center, active}
//         }
//         return center
//       })
//     })
//   }

//   function archiveCenter(id: string) {
//     if (selectedCenterId === id)
//     { 
//       //setSelectedCenter(null)
//       setSelectedCenterId( id );
//     }
//     setCenters(currentCenters => {     
//       return currentCenters.filter(center => center.id !== id)
//     })
//   }


//   function chooseCenter(id: string) {
//    const updateSelectedCenter = setSelectedCenterId( id );
//    // if(updateSelectedCenter == null) return; 
//     console.log("Choosing a new Center.");

//    const selectedCenter : ICenter | undefined = centers.find(center => center.id === id);
//   // console.log(JSON.stringify(editor))
//   //  if (selectedCenter && editor) {
//   //   console.log("Updating editor value for selected center.");
//   //    const updateEditor = editor.tf.setvalue(JSON.parse(selectedCenter.detailJSON));
//   //  }

//     if (!selectedCenter || !stakes) return;       
   
//     const updatedStakes = stakes.map((stake:IStake) => {
//        const distance = getDistance(selectedCenter, stake);
//        return { ...stake, distance: distance }; 
//     })
//     setStakes(updatedStakes);
//     return updatedStakes;

//   }

//   function addStakeToSelectedCenter(stakeUnitNumber: string) {
//     setCenters(currentCenters => {
//       return currentCenters.map(center => {
//         if (center.id === selectedCenterId) {
//             const updatedAssignedStakes = center.assignedStakes ? [...center.assignedStakes, stakeUnitNumber] : [stakeUnitNumber];
//             return { ...center, assignedStakes: updatedAssignedStakes}
//         }
//         return center
//       })
//     })
//   }

//   function removeStakeFromSelectedCenter(stakeId: string) {
//     setCenters(currentCenters => {
//       return currentCenters.map(center => {
//         if (center.id === selectedCenterId) {
//             const updatedAssignedStakes = center.assignedStakes ? center.assignedStakes.filter(id => id !== stakeId) : [];
//             return { ...center, assignedStakes: updatedAssignedStakes}
//         }
//         return center
//       })
//     })
//   }


//   function updateCenterPage(id: string | null, detailJSON: string) {
//     setCenters(currentCenters => {
//       return currentCenters.map(center => {
//         if (center.id === id) {
//             return { ...center, detailJSON: detailJSON}
//         }
//         return center
//       })
//     })
//   }



  return (
    <>

      {/* <Header 
        user={user}
        getAnotherUser={getAnotherUser}
        /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home 
                currentCenters={centers}
                currentUser={user} />}  />
          <Route path="/home" element={<Home 
                currentCenters={centers}
                currentUser={user} />}  />
          <Route path="/about" element={<About />}  />
          <Route path="*" element={<Home 
                currentCenters={centers}
                currentUser={user} />} /> */}
          {/* <Route path="/centermanager" element={<CenterManager 
                currentCenters={centers}
                addCenter={addCenter}
                toggleCenter={toggleCenter}
                archiveCenter={archiveCenter}
                chooseCenter={chooseCenter}
                selectedCenterId={selectedCenterId}
                updateCenterPage={updateCenterPage} />}  />
          <Route path="/centerdetail" element={<CenterDetail 
                currentCenters={centers} 
                selectedCenterId={selectedCenterId} 
                chooseCenter={chooseCenter}
                //setSelectedCenterId={setCurrentCenterId} 
                currentStakes={stakes}
                />} />
          <Route path="/centermapview" element={<CenterMapView
           centers={centers} />} />
          <Route path="/findassignment" element={<FindAssignment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/filemanager" element={<FileManager />} />
          <Route path="/preparation" element={<WardFamilyIdeas />} />
          <Route path="/training" element={<StakeTraining />} />
          <Route path="/assignmentmanager" element={<AssignmentManager
                currentCenters={centers} 
                selectedCenterId={selectedCenterId}
                //setSelectedCenterId={setCurrentCenterId}
                chooseCenter={chooseCenter}
                //updateStakeAssignments={updateStakeAssignments}
                addStakeToSelectedCenter={addStakeToSelectedCenter}
                stakes={stakes} 
                //sortStakes={sortStakes}
                removeStakeFromSelectedCenter={removeStakeFromSelectedCenter}
              />} />
          <Route path="/error" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  )
}


export default App
