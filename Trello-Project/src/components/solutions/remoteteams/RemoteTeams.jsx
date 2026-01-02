import React from 'react'
import Hero1 from "../remoteteams/Heor1.jsx"
import SignupHero from "../remoteteams/SignupHero.jsx"
import CompaniesSection from "../remoteteams/CompaniesSection.jsx"
import Pws from '../remoteteams/Pws.jsx'
import Section4 from "../remoteteams/Section4.jsx"
import Section5 from "../remoteteams/Section5.jsx"
import Section6 from "../remoteteams/Section6.jsx"
import Article from "../remoteteams/Article.jsx"
import CardSlider from "../remoteteams/CardSlider.jsx"
import CardsFooter from "../remoteteams/CardsFooter.jsx"
import PreFooter from "../remoteteams/PreFooter.jsx"
import UniversalFooter from '../../UniversalFooter.jsx'
import NavBar from '../../NavBar.jsx'




export const RemoteTeams = () => {
  return (
   <>
   <NavBar/>
   <div className='overflow-x-hidden'>
   <Hero1/>
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
