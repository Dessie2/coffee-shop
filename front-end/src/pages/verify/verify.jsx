import React, { useContext } from 'react'
import './verify.css'
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const verify = () => {
   
  const [searchParrams,setSearchParams] = useSearchParams();
  const success = searchParrams.get("success")
  const orderId = searchParrams.get("orderId")
  const {url} = useContext(StoreContext);

  const verifyPayment = async () =>{
    const response = await axios.post(url+"/api/order/verify",{success, orderId});
    if (response.data.success) {
      
    }
  }

  return (
    <div className='verify'>
     <div className="spinner">

     </div>
    </div>
  )
}

export default verify