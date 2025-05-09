import React from 'react'
import Hero3 from '../Components/Hero3'
import ContentFormats from '../Components/ContextFormat'
import { Hero4 } from '../Components/Hero4'
import ViralCommerce from '../Components/ViralCommerce'
import ViralContents from '../Components/ViralContents'


const Solution = () => {
  return (
    <div>
      <Hero3/>
      <ContentFormats/>
      <div id='viral'>
        <Hero4/>
      </div>
     <div id='viral-commerce'>
        <ViralCommerce/>
      </div>
      <div id='viral-content'>
        <ViralContents/>
      </div>
      
    </div>
  )
}

export default Solution
