import React from 'react'

export default function Login() {
  return (
<div>
    
    <div style={{width:"30vw",margin:"auto"}}>
    <div class="h1" style={{paddingLeft:"200px"}}>Login</div>
    <form class="row " action='/'>
  <div class="row g-10 m-5">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" placeholder="Enter Username"  />
  </div>
  <div class="row g-10 m-5">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
  </div>
  <div class="row g-10 m-5">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
    </div>


</div>

  )
}
