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
      <p className='h1'>Enter Customer details </p>
      <hr/>
      <BrandInformation/>
      <GeneralInformation/>
      <AddressInformation/>
      <ProgramInformation/>
      </div>
  )
}
