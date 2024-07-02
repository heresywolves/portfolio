import React from 'react'
import './Hero.css'
import card1 from '../assets/dragon_1.jpg'
import card2 from '../assets/dragon_2.jpg'
import card3 from '../assets/dragon_3.jpg'
import card4 from '../assets/dragon_4.jpg'
import card5 from '../assets/dragon_5.jpg'
import card6 from '../assets/dragon_6.jpg'
import card7 from '../assets/dragon_7.jpg'
import card8 from '../assets/dragon_8.jpg'
import card9 from '../assets/dragon_9.jpg'
import card10 from '../assets/dragon_10.jpg'
import modelImg from '../assets/model.png'
import bg from '../assets/bg.png'

function Hero() {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='hero w-full h-svh text-center overflow-hidden relative'>
      <div className="hero__slider absolute w-[200px] h-[200px]"  style={{"--quantity": 10}} >
        <div style={{"--position": 1}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card1} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 2}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card2} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 3}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card3} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 4}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card4} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 5}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card5} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 6}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card6} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 7}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card7} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 8}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card8} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 9}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card9} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div style={{"--position": 10}} className="hero__card absolute top-0 bottom-0 left-0 right-0">
          <img src={card10} alt="Hero floating card" className='w-[100%] h-[100%] object-cover'/>
        </div>
      </div>
      <div className="hero__content absolute h-max pb-[100px] flex justify-between items-center">
        <h1 data-content="FRONT END">FRONT END</h1>
        <div className="hero__author">
          <h2>ОЛЕГ ГЕРАСИМЕНКО</h2>
          <p>Веб Разработчик</p>
        </div>
        <div style={{backgroundImage: `url(${modelImg})`}} className="hero__model absolute bottom-0 left-0"></div>
      </div>

    </div>
  )
}

export default Hero
