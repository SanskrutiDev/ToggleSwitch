/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Toggle.css';


function Toggle() {
    const[ison,setIson]=useState(false);

    const handletoggleswitch =()=>{
        setIson(!ison);
        
    }

    
  return (
    <div className='toggle-switch ' style={{backgroundColor: ison? '#4caf50' : '#f44336'}} onClick={handletoggleswitch}>
        <div className={`switch ${ison? 'on' : 'off'}`}>
            <span className='switch-state '>{ison? 'on' : 'off'}</span>
        </div>
    </div>
  )
}

export default Toggle