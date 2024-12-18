import { Routes, Route } from 'react-router-dom';
import Home from "./ui/pages/home/Home.jsx";
import { FIRRegistration } from "./ui/pages/fir/FIRRegistration.jsx";  
import {Investigation} from "./ui/pages/investigation/Investigation.jsx"
import {CourtReportCard} from "./ui/pages/court/Court.jsx"
import {Police} from "./ui/pages/police/Police.jsx"
import AssignRole from './ui/pages/assign/Assign.jsx';
import ViewAllFIRPolice from './ui/pages/view-all/View.jsx';
import NewFIR from './ui/pages/new-fir/NewFir.jsx';
import InvestigateFIR from './ui/pages/investigate/Investigate.jsx';
import CloseFIRPage from './ui/pages/close-fir/CloseFIRPage.jsx';
import ViewAllFIRsPage from './ui/pages/ViewAllFIR/ViewAllFIRsPage.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />       
        {/* <Route path="/fir" element={<FIRRegistration />} /> 
        <Route path="/investigation" element={<Investigation/>}/>
        <Route path="/court" element={<CourtReportCard/>}/>
        <Route path="/police" element={<Police/>}/> */}



        <Route path="/assign-role" element={<AssignRole/>}/>
        <Route path="/view-all-fir-police" element={<ViewAllFIRPolice/>}/>
        <Route path="/new-fir" element={<NewFIR/>}/>
        <Route path="/investigate-fir" element={<InvestigateFIR/>}/>
        <Route path="/close-fir" element={<CloseFIRPage/>}/>
        <Route path="/view-fir" element={<ViewAllFIRsPage/>}/>


      </Routes>
    </>
  );
}

export default App;
