import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';
import img1 from './assets/arabian-ranches.jpg'
import img2 from './assets/community-images/arabian-ranches-ii.jpg'
import img3 from './assets/community-images/downtown-dubai.jpg'
import img4 from './assets/community-images/dubai-hills-estate.jpg'
import img5 from './assets/community-images/dubai-marina.png'
import img6 from './assets/community-images/emirates-living.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarouselCard from './components/CarouselCard';
import Slider from "react-slick";
import 'swiper/css/navigation';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  const [count, setCount] = useState(0);
  
  const data = [
    {
      image: img1,
      description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      title:"Arabian Ranches",
      url:"../src/assets/arabian-ranches.jpg"
    },
    {
      image: img2,
      description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      title:"Arabian Ranches II ",
      url:"../src/assets/community-images/arabian-ranches-ii.jpg"
    },
    {
      image: img3,
      description: "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.",
      title:"Downtown Dubai",
      url:"../src/assets/community-images/downtown-dubai.jpg"
    },
    {
      image: img4,
      description: "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.",
      title:"Dubai Hills Estate",
      url:"../src/assets/community-images/dubai-hills-estate.jpg"
    },
    {
      image: img5,
      description: "Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
      title:"Dubai Marina",
      url:"../src/assets/community-images/dubai-marina.png"
    },
    {
      image: img6,
      description: "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.",
      title:"Emirates Living ",
      url:"../src/assets/community-images/emirates-living.jpg"
    }
  ]

  const NextArr = (props) =>{
    const { className,style, onClick } = props;
    
    return(
      <svg className={className} onClick={onClick} width="65" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1208_96)">
        <rect x="4" width="57" height="53" fill="#F6F6F6"/>
      </g>
      <path d="M27 32.6321L33.7989 26.2902L27 19.9482L29.0931 18L38 26.2902L29.0931 34.5803L27 32.6321Z" fill="#64615B"/>
      <defs>
        <filter id="filter0_d_1208_96" x="0" y="0" width="65" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1208_96"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1208_96" result="shape"/>
        </filter>
      </defs>
    </svg>
    )
  }
  const PrevArr = (props) =>{
    const { className,style, onClick } = props;
    
    return(
      <svg className={className} onClick={onClick} width="65" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1208_85)">
          <rect x="4" width="57" height="53" fill="#F6F6F6"/>
        </g>
        <path d="M38 32.6323L31.2011 26.2903L38 19.9482L35.9069 18L27 26.2903L35.9069 34.5806L38 32.6323Z" fill="#64615B"/>
        <defs>
          <filter id="filter0_d_1208_85" x="0" y="0" width="65" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1208_85"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1208_85" result="shape"/>
          </filter>
        </defs>
      </svg>
    )
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:<NextArr/>,
    prevArrow:<PrevArr/>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <section>
        <div className="text-[#887C68] mt-[183px] mb-[80px] font-martel-sans text-2xl font-semibold uppercase" >Communities we manage</div>
        {/* <div className="grid grid-rows-2 grid-flow-col gap-x-[52px] gap-y-[60px] justify-center "> */}
        <div className="grid gap-y-[40px] xl:grid-rows-2 xl:grid-flow-col xl:gap-x-[52px] xl:gap-y-[60px] justify-center ">
          {data.map((ele) => {
            return <div key={ele.description} className="drop-shadow-[12px_17px_60px_rgba(0,0,0,0.25)] "><Card  {...ele} /></div>;
          })}
        </div>
      </section>

      <section className='my-40'>
        <div className='text-amber-700 font-martel-sans text-2xl font-semibold uppercase '>Our Services</div>
        <div className='mt-[78px]'>
          <Slider {...settings} className='items-center' >
          {data.map((ele,idx) => {
            return <div key={ele.description} className="drop-shadow-[12px_17px_60px_rgba(0,0,0,0.25)] flex justify-center items-center"><CarouselCard  {...ele} /></div>;
          })}
          </Slider>
      </div>
          
    </section>


    </>
  );
}

// drop-shadow-[12px_17px_60px_rgba(0,0,0,0.25)] 
export default App
