import React from 'react'
import { PoliceReportCard } from '../../components/PoliceReportCard '
import { NavbarCard } from '../../components/Navbar'

export const Police = () => {
  return (
    <>
    <NavbarCard/>

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center ">
    
     <PoliceReportCard/>
     <PoliceReportCard/>
     <PoliceReportCard/>
    </div>
    </>
  )
}

export default Police
