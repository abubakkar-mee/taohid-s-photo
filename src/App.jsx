import { useState } from 'react'
import reactLogo from './assets/react.svg'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import viteLogo from '/vite.svg'
import { FaSquareFacebook } from "react-icons/fa6";
import { Analytics } from '@vercel/analytics/react';

const images = [img1,img2,img3]

function App() {
  const [photo, setPhoto] = useState(null)
  const [name, setName] = useState("TAOHID ISLAM")

  const [prevIndex, setIndex] = useState(0)

  const changeImg = () => {
    const randomIndex = Math.floor(Math.random() * 3);

    setPhoto(images[randomIndex])
    
  }

setInterval(changeImg, 2000)

  return (
    <>
    <Analytics/>
    <div>
      <h2 className='text-white font-bold text-3xl text-center p-4'>{name}</h2>
      <div className='flex justify-center pb-2 '>
        <a target='_blank' href="https://web.facebook.com/profile.php?id=61578696069403">
          <FaSquareFacebook className='text-center text-3xl text-white cursor-pointer'/>
        </a>
      </div>
      <div className='flex justify-center mb-8'>
        <img className='w-[80%] md:w-[50%] h-[350px] object-cover rounded-xl' src={img1} alt="taohid" />
      </div>
      <div className='flex justify-center mb-8'>
        <img className='w-[80%] md:w-[50%] h-[350px] object-cover rounded-xl' src={img2} alt="taohid" />
      </div>
      <div className='flex justify-center'>
        <img className='w-[80%] md:w-[50%] h-[350px] object-cover rounded-xl' src={img3} alt="taohid" />
      </div>

    </div>
    </>
  )
}

export default App
