import React from 'react'
import AddressInformation from '../components/AddressInformation'
import BrandInformation from '../components/BrandInformation'
import GeneralInformation from '../components/GeneralInformation'
import Header from '../components/Header'
import ProgramInformation from '../components/ProgramInformation'

export default function App() {
  return (
       <div>
      <Header/>
      <h2>Enter Customer details</h2>
      <hr/>
      <BrandInformation/>
      <GeneralInformation/>
      <AddressInformation/>
      <ProgramInformation/>
      </div>
  )
}
