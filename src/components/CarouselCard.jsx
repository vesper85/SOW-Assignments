import React from 'react'

function CarouselCard({title,url}) {
  // const url = "../src/assets/community-images/arabian-ranches-ii.jpg"
  return (
    <div className="flex items-end justify-center w-[391px] h-[552px] bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.6)] to-black bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${url})` }}>
      <h1 className="text-white text-[28px] mb-[40px]">{title}</h1>
    </div>
  )
}

export default CarouselCard