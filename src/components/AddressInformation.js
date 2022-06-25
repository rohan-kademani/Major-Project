import React from 'react'

export default function AddressInformation() {
  return (
    <div>
<h3 className='mt-5'>Address Information</h3><hr/>
      <div className='container mt-5'>
      <div className='row'>
        <div className='col'><label id="homeLabel" for="home input box">Home number</label></div>
        <div className='col'><label id="Address1Label" for="Address 1 input box">Address line 1</label></div>
        <div className='col'><label id="Address2Label" for="Address 2 input box">Address line 2</label></div>
        <div className='col'><label id="DistrictLabel" for="district input box">District</label></div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input id="home input box" aria-labelledby="homeLabel" type="text" placeholder='Enter home number'/></div>
        <div className='col'><input id="Address 1 input box" aria-labelledby="Address1Label" type="text" placeholder='Enter Address 1 number'/></div>
        <div className='col'><input id="Address 2 input box" aria-labelledby="Address2Label" type="text" placeholder='Enter Address 2 number'/></div>
        <div className='col'><input id="district input box" aria-labelledby="DistrictLabel" type="text" placeholder='Enter District number'/></div>
        </div>
        <div className='row mt-5'>
        <div className='col'><label id="StateLabel" for="state input placeholder='Enter state'box">State</label></div>
        <div className='col'><label id="CountryLabel" for="country input box">Country</label></div>
        <div className='col'><label id="PincodeLabel" for="pincode input box">Pincode</label></div>
        <div className='col'></div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input id="state input box" aria-labelledby="StateLabel" type="text" /></div>
        <div className='col'><input id="country input box" aria-labelledby="CountryLabel" type="text" placeholder='Enter country'/></div>
        <div className='col'><input id="pincode input box" aria-labelledby="PincodeLabel" type="text" placeholder='Enter pincode'/></div>
        <div className='col'></div>
        
        </div>
        </div>
    </div>
  )
}
