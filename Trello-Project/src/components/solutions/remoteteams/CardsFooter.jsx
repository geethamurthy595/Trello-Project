import React from 'react'
import Heading from '../remoteteams/Cards/Heading.jsx'
import Free from "../remoteteams/Cards/Free.jsx"
import Standard from "../remoteteams/Cards/Standard.jsx"
import Premium from "../remoteteams/Cards/Premium.jsx"
import Enterprise1 from "../remoteteams/Cards/Enterprise1.jsx"

const CardsFooter = () => {
  return (
    <>
    <Heading/>
    <div className='flex justify-center'>
        <Free/>
        <Standard/>
        <Premium/>
        <Enterprise1/>
    </div>
    </>
  )
}

export default CardsFooter