import React from 'react'

export default function GeneralInformation() {
  return (
    <div>
        <h3 className='mt-5'>General Information</h3><hr/>
      <div className='container mt-5'>
      <div className='row'>
        <div className='col'><label id="firstnameLabel" for="first input box">First Name</label></div>
        <div className='col'><label id="middleLabel" for="middle input box">Middle Name</label></div>
        <div className='col'><label id="lastLabel" for="last input box">Last Name</label></div>
        <div className='col'><label id="prefixLabel" for="prefix input box">Prefix</label></div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input id="first input box" type="text" placeholder='Enter First name' aria-labelledby="firstnameLabel"/></div>
        <div className='col'><input id="middle input box" type="text" placeholder='Enter middle name' aria-labelledby="middleLabel"/></div>
        <div className='col'><input id="last input box" type="text" placeholder='Enter last name' aria-labelledby="lastLabel"/></div>
        <div className='col'><input id="prefix input box" type="text" placeholder='Enter prefix' aria-labelledby="prefixLabel"/></div>
        </div>
        <div className='row mt-5'>
        <div className='col'><label id="languageLabel" for="language input box">Language</label></div>
        <div className='col'><label id="country1Label" for="country1 input box">Country</label></div>
        <div className='col'><label id="birthdayLabel" for="birthday input box">Birthday</label></div>
        <div className='col'><label id="genderLabel" for="gender input box">Gender</label></div>
      </div>
      <div className='row mt-3'>
        <div className='col'><input id="language input box" type="text"   aria-labelledby="languageLabel"  placeholder='Enter language'/></div>
        <div className='col'><input id="country1 input box" type="text"   aria-labelledby="country1Label"  placeholder='Enter country'/></div>
        <div className='col'><input id="birthday input box" type="text"   aria-labelledby="birthdayLabel"  placeholder='Enter birthday'/></div>
        <div className='col'><input id="gender input box" type="text"   aria-labelledby="genderLabel"  placeholder='Enter gender'/></div>
        </div>
        </div>
    </div>
  )
}
