import React from 'react'
import './css/greeting.css'

function Greeting() {
  return (
    <div className='greeting'>
      <div className='text'>
          <i className='fa fa-quote-left icon-quote'></i>
            Welcome to the Admin's homepage
          <i className='fa fa-quote-left icon-quote'></i>
        </div>
      <i className='fa fa-cloud icon-left'></i>
      <i className='fa fa-cloud icon'></i>
    </div>
  )
}

export default Greeting