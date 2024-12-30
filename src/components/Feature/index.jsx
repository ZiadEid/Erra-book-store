import React from 'react'

const Feature = ({icon, feature}) => {
  return (
    <div className='flex items-center gap-4'>
      {icon}
      <p>{feature}</p>
    </div>
  )
}

export default Feature