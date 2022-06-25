import React from 'react'

export default function GeneralInformation() {
  return (
    <div>
        <p className='h3 mt-5'>General Information</p><hr/>
      <div className='container mt-5'>
      <div className='row'>
        <div className='col'>First Name</div>
        <div className='col'>Middle Name</div>
        <div className='col'>Last Name</div>
        <div className='col'>Prefix</div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        </div>
        <div className='row mt-5'>
        <div className='col'>Language</div>
        <div className='col'>Country</div>
        <div className='col'>Birthday</div>
        <div className='col'>Gender</div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        <div className='col'><input type="text"/></div>
        </div>
        </div>
    </div>
  )
}
