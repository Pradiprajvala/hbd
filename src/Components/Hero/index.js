import React, {
  useState
} from 'react'
import Navbar from '../Navbar'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements'

const Hero = () => {

  return (

    <HeroContainer>
        <Navbar />
      
          <HeroContent>
            <HeroItems>
             
              <HeroH1>Happy Birthday Sista</HeroH1>
              <HeroBtn>RavinaBen Khuman</HeroBtn>
            
         
            </HeroItems>
          </HeroContent>
        </HeroContainer>

  )
}

export default Hero;