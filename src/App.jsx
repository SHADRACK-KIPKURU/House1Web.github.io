import { useState } from 'react'
import HouseList from './HouseList';
import Nav from './Nav'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HouseContext } from './Context/HouseContext';
import SharedLayout from './Context/SharedLayout';
import SingleHouse from './SingleHouse';
function App() {
  const [house, setHouse] = useState(null);
  return (
    <HouseContext.Provider value={{house,setHouse}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HouseList/> } />
            <Route path='house' element={<SingleHouse/>} />
          </Route>
       </Routes>
    </BrowserRouter>
    </HouseContext.Provider>
  )
}
export default App
