import { useState } from 'react'
import reactLogo from './assets/react.svg'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import viteLogo from '/vite.svg'
import './App.css'

const images = [img1,img2,img3]

function App() {
  const [photo, setPhoto] = useState(null)

  const [prevIndex, setIndex] = useState(0)

  const changeImg = () => {
    const randomIndex = Math.floor(Math.random() * 3);

    setPhoto(images[randomIndex])
    
  }

setInterval(changeImg, 2000)

  return (
    <>
      <div className='box'>
        <img className='img1' src={img1} alt="taohid" />
      </div>
    </>
  )
}

export default App
