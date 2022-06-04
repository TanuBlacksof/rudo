import React from 'react'
import second from './style.css'

export const Button = ({ color, lable, handleOpen, closeIntro }) => {
  const handleFunction = () => {
    handleOpen()
    closeIntro()
  }
  return (
    <div>
      <button className='button' style={{ backgroundColor: color }} onClick={handleFunction}>
        {lable}
      </button>
    </div>
  )
}
