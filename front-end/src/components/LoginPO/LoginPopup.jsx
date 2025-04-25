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
     </from>
    </div>
  )
}

export default LoginPopup