import { Routes, Route } from 'react-router-dom';
import { Home } from "./ui/pages/home/Home.jsx";
import { FIRRegistration } from "./ui/pages/fir/FIRRegistration.jsx";  
import {Investigation} from "./ui/pages/investigation/Investigation.jsx"
import {CourtReportCard} from "./ui/pages/court/Court.jsx"
import {Police} from "./ui/pages/police/Police.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/fir" element={<FIRRegistration />} /> 
        <Route path="/investigation" element={<Investigation/>}/>
        <Route path="/court" element={<CourtReportCard/>}/>
        <Route path="/police" element={<Police/>}/>
      </Routes>
    </>
  );
}

export default App;
