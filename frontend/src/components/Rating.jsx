import React from 'react'
import {FaStar,FaStarHalf,FaRegStar } from 'react-icons/fa'

const Rating = ({value, text}) => {

  const element = [];

  // Counting stars
  for(let i=5;i>0;i--){
    element.push(value>=1?<span><FaStar/></span>:value>=0.5?<span><FaStarHalf/></span>:<span><FaRegStar/></span>)
    value--;
}

  return (
    <div className='rating'>
        {element}
        <span>{text && text}</span>
    </div>
  )
}

export default Rating