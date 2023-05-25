import React from 'react'
import './Output.css'
const Output = () => {
  return (
    <div className='toast' >
      <div style={{display:"flex",textAlign:"center",alignItems:"center"}}>
        <i className="fa-sharp fa-solid fa-circle-check" style={{fontSize:"1.5rem"}}></i>
        <p className='toastMessage'>Thank You! Message Sent.</p>
      </div>
    </div>
  )
}

export default Output