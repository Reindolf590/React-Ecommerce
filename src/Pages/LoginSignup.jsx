import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign up</h1>
        <div className='fields'>
          <input type='text' placeholder='Your Name'></input>
          <input type='email' placeholder='Your Email id'></input>
          <input type='password' placeholder='Your Password'></input>
        </div>
        <button className='login-btn'>Continue</button>
        <p className='login-text'>Already have an account? <span>Login here</span></p>
        <div className='login-agree'>
          <input type='checkbox' name='' id=''></input>
          <p>By continuing, I agree to all the terms of conditions and privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
