import {Routes,Route} from 'react-router-dom';
import {Home} from "./ui/pages/home/Home.jsx";


function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>

    </>
  )
}

export default App