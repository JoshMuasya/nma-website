import React from 'react'

const ProgressBar = () => {
  return (
    <div>
        <progress 
            className="progress progress-primary w-full" 
            value={0} 
            max="100"
        ></progress>
    </div>
  )
}

export default ProgressBar