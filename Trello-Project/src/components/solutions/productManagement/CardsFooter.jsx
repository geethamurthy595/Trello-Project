import React from 'react'
// import Heading from '../../../components/Cards/Heading.jsx'
import Heading from '../../../components/solutions/productManagement/Cards/Heading.jsx'
import Free from   '../../../components/solutions/productManagement/Cards/Free.jsx'
import Standard  from  '../../../components/solutions/productManagement/Cards/Standard.jsx'
import Premium from "../../../components/solutions/productManagement/Cards/Premium.jsx"
import Enterprise1 from "../../../components/solutions/productManagement/Cards/Enterprise1.jsx"

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