import React from 'react'
// import image01 from '../community-images/arabian-ranches-ii.jpg'

function Card({image, description, title}) {
  return (
    <div className="w-[391px] min-h-[552px] text-[#887C68] text-base font-normal font-sans">
        <div className='bg-gradient-to-r from-opacity-0 to-opacity-80'> <img  className="w-[391px] h-[292px] inset-0 bg-cover" src={image}/> </div>
        <div className="font-sans bg-white text-left p-[24px] pt-[30px] max-h-[181px] pb-[34px] overflow-hidden" > {description} </div>
        <div className="bg-[#F8F8F8] text-[22px] h-[79px] text-left p-4 items-center "><p>{title}</p> </div>
    </div>
  )
}

export default Card