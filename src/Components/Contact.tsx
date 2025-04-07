import React, { useEffect } from 'react'
import GetInTouch from './GetInTouch'
import Schedule from './Schedule'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page when the component mounts
      }, []);
  return (
    <div>
      <GetInTouch/>
      <Schedule/>
    </div>
  )
}

export default Contact
