import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState] = React.useState('Sign Up')

  return (
    <div className='login-popup'>
     <from className="login-popup-container">
      <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-inputs">
        {currState==="Log in"?<></>:<input type="text" placeholder='Your name' required />}
        <input type="email" placeholder='Your email' required />
        <input type="password" placeholder='password' required />
      </div>
      <button>{currState=="Sing up"?"Create account":"Log in"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" required/>
        <p>By continuing, i agree to the terms of use & privacy policy</p>
      </div>
      {currState==="Log in"
      ?<p>Create a new account? <span onClick={()=>setCurrState("Sing Up")}>Click here</span></p>
      : <p>Already have an account? <span onClick={()=>setCurrState("Log in")}>Login here</span></p>
    }
     </from>
    </div>
  )
}

export default LoginPopup