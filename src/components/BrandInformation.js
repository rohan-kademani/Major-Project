import React from 'react'

export default function BrandInformation() {
  return (
    <div>
        <h3 className='mt-2'>Brand Information</h3><hr/>
      <div className='container mt-5'>
      <div className='row'>
        <div className='col'>Tier code</div>
        <div className='col'>Brand code</div>
        <div className='col'>User code</div>
        <div className='col'>Accountid</div>
      </div>
      <div className='row mt-3'>
      <div className='col'>
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Tier
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p class="dropdown-item">Gold</p>
    <p class="dropdown-item">Silver</p>
    <p class="dropdown-item">bronze</p>
  </div>
</div>
      </div>
      <div className='col'>
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 Brand
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p class="dropdown-item">Indian oil</p>
    <p class="dropdown-item">CNG</p>
    <p class="dropdown-item">More</p>
  </div>
</div>
      </div>
      <div className='col'>
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 User
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p class="dropdown-item">Active</p>
    <p class="dropdown-item">Inactive</p>
    <p class="dropdown-item">New</p>
  </div>
</div>
      </div>
      <div className='col'>
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Account
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p class="dropdown-item">Test123</p>
    <p class="dropdown-item">user133</p>
    <p class="dropdown-item">test456</p>
  </div>
</div>
      </div>
      </div>
      </div>


    </div>
  )
}
