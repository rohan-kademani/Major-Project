import React from 'react'

export default function AddressInformation() {
  return (
    <div>
        <p className='h3 mt-5'>Address Information</p><hr/>
      <div className='container mt-5'>
      <div className='row'>
        <div className='col'>Home number</div>
        <div className='col'>Address line 1</div>
        <div className='col'>Address line 2</div>
        <div className='col'>District</div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        </div>
        <div className='row mt-5'>
        <div className='col'>state</div>
        <div className='col'>Country</div>
        <div className='col'>Pincode</div>
        <div className='col'></div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'></div>
        
        </div>
        </div>
    </div>
  )
}
