import React from 'react'
import Hero1 from './Heor1'
import SignupHero from './SignupHero'
import CompaniesSection from './CompaniesSection'
import Pws from './Pws'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Article from './Article'
import CardSlider from './CardSlider'
import CardsFooter from './CardsFooter'
import PreFooter from './PreFooter'
import NavBar from '../../NavBar'
import UniversalFooter from '../../UniversalFooter'

const ProductManagement = () => {
  return (
              <>
              <NavBar/>
               <Hero1/>
               <div className="overflow-x-hidden">
               <SignupHero/>
               <CompaniesSection/>
               <Pws/>
               <Section4/>
               <Section5/>
               <Section6/>
               <Article/>
               <CardSlider/>
               <CardsFooter/>
               <PreFooter/>
               </div>
               <UniversalFooter/>
              </>
  )
}

export default ProductManagement