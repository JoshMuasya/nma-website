import React from 'react'
import { ProgressBarType } from '../interface'

const ProgressBar = ({ currentItem }:ProgressBarType) => {
  const progressValue = (currentItem) * 10
  
  return (
    <div>
        <progress 
            className="progress progress-primary w-full" 
            value={progressValue} 
            max="100"
        ></progress>
    </div>
  )
}

export default ProgressBar